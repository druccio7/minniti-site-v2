import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

export default class MainTemplate extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}