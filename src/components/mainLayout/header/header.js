import React from "react";
import "../../../css/mainLayout/header/header.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            transition: 'opacity 1.5s',
            activeHome: false,
            activeNews: false,
            activeAbout: false,
            activeContact: false
        }
    }

    componentDidMount() {
        setTimeout(function() { this.setState({opacity: 1}); }.bind(this), 1000);
        if(window.location.href.indexOf("news") > 0){ this.setState({activeNews:true})}
        else if(window.location.href.indexOf("about") > 0){ this.setState({activeAbout:true})}
        else if(window.location.href.indexOf("contact") > 0){ this.setState({activeContact:true})}
        else{ this.setState({activeHome:true})}
    }

    render(){
        return(
            <div id="header" className="header" style={ { opacity: this.state.opacity, transition: this.state.transition } }>
                <div className="topnav">
                    <a className={this.state.activeHome ? "mHome active" : "mHome"} href="#">Home</a>
                    {/*<li><Link to="/netflix">Netflix</Link></li>*/}
                    <a className={this.state.activeNews ? "mNews active" : "mNews"} href="#">Le mie novità</a>
                    <a className={this.state.activeAbout ? "mAbout active" : "mAbout"} href="#">La mia storia</a>
                    <a className={this.state.activeContact ? "mContact active" : "mContact"} href="#">Curriculum</a>
                </div>
            </div>
        );
    }
}