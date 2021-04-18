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

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, photoURL, email } = result.user;
      const signedInUser = { name: displayName, photoURL, email, signOut: false }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  const signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
        const loggedInUser = {
          name: '',
          email: '',
          photoURL: '',
          signOut: true
        }

        sessionStorage.removeItem('token');
        setLoggedInUser(loggedInUser);
        console.log('google sign out')
        history.replace(from);
      })
  }

  if (loggedInUser?.signOut) {
    console.log('sign out true')
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