import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const btnStyle = {
  paddingBlock: '7px',
  borderRadius: '30px',
  cursor: 'pointer',
  backgroundColor: 'white',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)'
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const checkIsAdmin = () => {
    const emailID = loggedInUser.email;

    fetch('https://abshipmanagement.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ emailID })
    })
      .then(res => res.json())
      .then(data => {
        const user = {...loggedInUser};
        user.isAdmin = data;
        setLoggedInUser(user);
        if(data){
          history.replace('/dashboard');
        }else{
          history.replace(from);
        }
      })
  }
  
  loggedInUser?.email && checkIsAdmin()

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, photoURL, email } = result.user;

      const signedInUser = {
          isAdmin: false,
          name: displayName,
          email: email,
          photo: photoURL,
          signOut: false
      }

      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      // const errorMessage = error.message;
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function (error) {
        // Handle error
      });
  }

  const signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
        const loggedInUser = {
          isAdmin: false,
          name: '',
          email: '',
          photoURL: '',
          signOut: true
        }

        sessionStorage.removeItem('token');
        setLoggedInUser(loggedInUser);
        history.replace(from);
      })
  }

  if (loggedInUser?.signOut) {
    signOut();
  }

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 my-5 p-5 border-2 bg-light rounded-3" style={{ height: "40vh", width: '50vh' }}>
          <h2 style={{ color: '#777', marginBottom: '50px', textAlign: 'center' }}>Sign In</h2>
          <div className="row" style={btnStyle} onClick={handleGoogleSignIn}>
            <div className="col-4 d-flex justify-content-start">
              <img style={{ height: '30px' }} src="https://www.svgrepo.com/show/223041/google.svg" alt="Google Logo" />
            </div>
            <div className="col-8">Sign in with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;