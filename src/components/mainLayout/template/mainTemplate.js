import React from "react";
import "../../../css/mainLayout/template/mainTemplate.css"
import Header from "../header/header";
import Footer from "../footer/footer";
import PreContainer from "../../content/preContainer/preContainer"

export default class MainTemplate extends React.Component{

    render(){
        return(
            <div id="divContenentHaderContentFooter">
                {/*<Header/>*/}
                {/*<div id="Content">*/}
                    {/*/!*<PreContainer/>*!/*/}
                    {/*<div id="Container">*/}
                        {/*{this.props.children}*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<Footer/>*/}
            </div>
        );
    }
}