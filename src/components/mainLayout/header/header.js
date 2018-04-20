import React from "react";
import "../../../css/mainLayout/header/header.css"

export default class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            transition: 'opacity 1.5s'
        }
    }

    componentDidMount() {
        setTimeout(function() { this.setState({opacity: 1}); }.bind(this), 1000);
    }

    render(){
        return(
            <div id="header" className="header" style={ { opacity: this.state.opacity, transition: this.state.transition } }>
                <div className="topnav">
                    <a className="mHome" href="">Home</a>
                    <a className="mNews" href="">Le mie novità</a>
                    <a className="mAbout" href="">La mia storia</a>
                    <a className="mContact" href="">Curriculum</a>
                </div>
            </div>
        );
    }
}