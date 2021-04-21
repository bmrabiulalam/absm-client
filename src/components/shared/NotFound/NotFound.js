import React from 'react';
import { Link } from "react-router-dom";
import NotFoundImg from '../../../images/not-found.svg';

const StyledButton = {
    root: {
        background: 'linear-gradient(45deg, #47e644 10%, #0bab84 90%)',
        borderRadius: 8,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform: 'capitalize',
    }
}

const NotFound = (props) => {
    document.title = 'Error: 404! Page Not Found.';

    return (
        <div className="container container-fluid d-flex justify-content-center">
            <div className="row d-flex justify-content-center" style={{marginTop: '1%'}}>
                <div className="col-10 mt-3 d-flex flex-column justify-content-center">
                    <p><img style={{width: '500px'}} src={NotFoundImg} alt="" className="img-fluid" /></p>
                    <h5 className="text-secondary">Error: 404! Page Not Found</h5>
                    <p>You might not have permissions to see this page.</p>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button style={StyledButton.root}>Back to home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default NotFound;