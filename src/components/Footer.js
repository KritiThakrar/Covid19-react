import React from "react";
import '../App.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <p className="col-sm font-italic">
                        &copy;{new Date().getFullYear()} COVID19 | We all are in this together
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
