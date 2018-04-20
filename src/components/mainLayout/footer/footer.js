import React from "react";
import "../../../css/mainLayout/footer/footer.css"
import FooterAbout from "./footerAbout";
import FooterContact from "./footerContact";
import FooterCV from "./footerCV";

export default class Footer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            transition: 'opacity 1.5s'
        }
    }

    componentDidMount() {
        setTimeout(function() { this.setState({opacity: 1}); }.bind(this), 200);
    }

    render(){
        return(
            <div id="footer" className="footer" style={ { opacity: this.state.opacity, transition: this.state.transition } }>
                <FooterAbout/>
                <FooterContact/>
                <FooterCV/>
            </div>
        );
    }
}