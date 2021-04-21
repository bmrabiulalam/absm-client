import React, { useContext, useState } from 'react';
import './Dashboard.css';
import logo from "../../../images/fav-icon.png";
import SideBar from '../SideBar/SideBar';
import BookService from '../../Client/BookService/BookService';
import BookedServices from '../../Client/BookedServices/BookedServices';
import { UserContext } from '../../../App';
import ManageOrder from '../../Admin/ManageOrder/ManageOrder';
let DefaultTab = null;

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
    }
}

const Dashboard = (props) => {
    const [tab, setTab] = useState(null);
    const [loggedInUser,] = useContext(UserContext);

    if (loggedInUser?.isAdmin) {
        DefaultTab = <ManageOrder></ManageOrder>;
    }
    else {
        if (props?.tabName) {
            if (props.tabName === 'BookService') {
                DefaultTab = <BookService></BookService>;
            }
        }
        else {
            DefaultTab = <BookedServices></BookedServices>;
        }
    }

    return (
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a style={style.logo} id="logo" class="navbar-brand" href="#">
                        <img style={style.logoImg} src={logo} alt="" width="60" height="48" class="d-inline-block align-top" />
                        AB SHIP MANAGEMENT
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div class="container-fluid">
                {
                    loggedInUser?.email
                    ?
                    <div class="row">
                        <SideBar setTab={setTab}></SideBar>
                        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4" style={{ position: "absolute", right: 0 }}>
                            {tab || DefaultTab}
                        </main>
                    </div>
                    :
                    <div class="text-center my-5 py-5 text-info">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default Dashboard;