import React from "react";
import "../../../css/mainLayout/header/header.css"
import { Link } from 'react-router-dom'

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
        setTimeout(function() { this.setState({opacity: 1}); }.bind(this), 1200);
        if(window.location.href.indexOf("news") > 0){ this.setState({activeNews:true})}
        else if(window.location.href.indexOf("about") > 0){ this.setState({activeAbout:true})}
        else if(window.location.href.indexOf("contact") > 0){ this.setState({activeContact:true})}
        else{ this.setState({activeHome:true})}
    }

    changeState(event){
        if(event === 'home'){this.setState({activeHome:true, activeNews:false, activeContact:false, activeAbout:false});}
        if(event === 'news'){this.setState({activeHome:false, activeNews:true, activeContact:false, activeAbout:false});}
        if(event === 'about'){this.setState({activeHome:false, activeNews:false, activeContact:false, activeAbout:true});}
        if(event === 'contact'){this.setState({activeHome:false, activeNews:false, activeContact:true, activeAbout:false});}
    }

    render(){
        return(
            <div id="header" className="header" style={ { opacity: this.state.opacity, transition: this.state.transition } }>
                <div className="topnav">
                    <a className={this.state.activeHome ? "mHome active" : "mHome"} onClick={this.changeState.bind(this,'home')}><Link to="/">Home</Link></a>
                    <a className={this.state.activeNews ? "mNews active" : "mNews"} onClick={this.changeState.bind(this,'news')}><Link to="/news">Le mie novità</Link></a>
                    <a className={this.state.activeAbout ? "mAbout active" : "mAbout"} onClick={this.changeState.bind(this,'about')}><Link to="/about">La mia storia</Link></a>
                    <a className={this.state.activeContact ? "mContact active" : "mContact"} onClick={this.changeState.bind(this,'contact')}><Link to="/contact">Curriculum</Link></a>
                </div>
            </div>
        );
    }
}