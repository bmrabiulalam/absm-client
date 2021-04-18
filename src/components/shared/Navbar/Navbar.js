import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/fav-icon.png";

const style = {
    logo: {
        display: 'flex',
        alignItems: 'center',
        color: 'rgb(138, 48, 48)',
        fontWeight: 700,
        fontSize: '.8em'
    },
    logoImg: {
        marginRight: '0.5em'
    },
    myNavbar: {
        fontWeight: 500,
        width: '100%',
        backgroundColor: 'rgba(0, 225, 255, 0.575)'
    }
}

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignout = e => {
        const signedOutUser = {
            name: '',
            email: '',
            photoURL: '',
            signOut: true
        }
        setLoggedInUser(signedOutUser);
    }

    const handleProfileClick = e => {
        e.preventDefault();
    }

    return (
        <nav style={style.myNavbar} class="my-navbar navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container-fluid">
                <a style={style.logo} id="logo" class="navbar-brand" href="#">
                    <img style={style.logoImg} src={logo} alt="" width="60" height="48" class="d-inline-block align-top" />
                        AB SHIP MANAGEMENT
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link px-4 active text-white" to='/home'>Home</Link>
                        {
                            loggedInUser?.email && <Link className="nav-link px-4 active text-white" to='/dashboard'>Dashboard</Link>
                        }
                        <Link className="nav-link px-4 text-white" to='/contact'>Contact</Link>
                        <Link className="nav-link px-4 text-white" to='/admin'>Admin</Link>
                        {
                            loggedInUser?.email
                                ? <div class="btn-group">
                                    <button type="button" class="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img style={{ borderRadius: '50%', height: '30px' }} src={loggedInUser.photoURL} alt={loggedInUser.name} />
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuOffset">
                                        <li onClick={handleProfileClick}><a class="dropdown-item" href="">{loggedInUser.name}</a></li>
                                        <li onClick={handleSignout}><a class="dropdown-item" href="">Signout</a></li>
                                    </ul>
                                </div>
                                : <Link className="nav-link px-4 text-white" to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;