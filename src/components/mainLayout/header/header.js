import React from "react";
import "../../../css/mainLayout/header/header.css";
import { Link } from 'react-router-dom'

export default class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activeHome: false,
            activeAbout: false,
            activeContact: false
        }
    }

    componentDidMount() {
        if(window.location.href.indexOf("about") > 0){ this.setState({activeAbout:true})}
        else if(window.location.href.indexOf("contact") > 0){ this.setState({activeContact:true})}
        else{ this.setState({activeHome:true})}
    }

    changeState(event){
        if(event === 'home'){this.setState({activeHome:true, activeContact:false, activeAbout:false});}
        if(event === 'about'){this.setState({activeHome:false, activeContact:false, activeAbout:true});}
        if(event === 'contact'){this.setState({activeHome:false, activeContact:true, activeAbout:false});}
    }

    render(){
        return(
            <div className="header">
                <a className="logo" href="/"><img src={require("../../../images/logo.png")} alt="Perfect Lab"/></a>
                <div className="main-navigation">
                    <button className="btn btn-default responsive-button"><i className="glyphicon glyphicon-menu-hamburger"/> </button>
                    <ul className="menu">
                        <li className={this.state.activeHome ? "menu-item current-menu-item" : "menu-item"}>
                            <Link onClick={this.changeState.bind(this,'home')} to="/">Home</Link>
                        </li>
                        <li className={this.state.activeAbout ? "menu-item current-menu-item" : "menu-item"}>
                            <Link onClick={this.changeState.bind(this,'about')} to="/about">About</Link>
                        </li>
                        <li className={this.state.activeContact ? "menu-item current-menu-item" : "menu-item"}>
                            <Link onClick={this.changeState.bind(this,'contact')} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}