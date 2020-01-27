import React from 'react';
import { connect } from "react-redux";
import { startLogin } from "../actions/auth"

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title"> Expensify </h1>
            <p> It's time to get your expenses under control </p>
            <div className='g-sign-in-button' onClick={startLogin}>
                <div className="content-wrapper">
                    <div className='logo-wrapper'>
                        <img src='https://developers.google.com/identity/images/g-logo.png'></img>
                    </div>
                    <span className='text-container'>
                        <span>Sign in with Google</span>
                    </span>
                </div>
            </div>


        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);