import React from "react";
import "../../../css/content/preContainer/preContainer.css"

export default class PreContainer extends React.Component{
    render(){
        return(
            <div class="preContainer">
                <div class="littleDesk">
                    <div class="cactus">
                        <div class="piant"></div>
                        <div class="ground"></div>
                        <div class="vase"></div>
                    </div>
                    <p class="book1" href="conoscenzePhp">php</p>
                    <p class="book2" href="conoscenzeHtml">html</p>
                    <p class="book3" href="conoscenzeCss">css</p>
                    <p class="book4" href="conoscenzeJavascript">javascript</p>
                </div>
                <div class="clock">
                    <div class="min"><div class="minFace"></div></div>
                    <div class="hr"><div class="hrFace"></div></div>
                </div>
            </div>
        );
    }
}