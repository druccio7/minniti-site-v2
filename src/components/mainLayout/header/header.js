import React from "react";
import { Link } from 'react-router-dom'

export default class Header extends React.Component{

    render(){
        return(
            <header className="site-header">
                <div className="container">
                    <a className="logo"><img src={require("../../../images/logo.png")} alt="Perfect Lab"/></a>

                    <div className="main-navigation">
                        <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                        <ul className="menu">
                            <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                            <li className="menu-item"><a href="about.html">About</a></li>
                            <li className="menu-item"><a href="#">Features</a></li>
                            <li className="menu-item"><a href="clients.html">Clients</a></li>
                            <li className="menu-item"><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mobile-navigation"></div>
                </div>
            </header>
        );
    }
}