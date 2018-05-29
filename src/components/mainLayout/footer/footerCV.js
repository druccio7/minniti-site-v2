import React from "react";
import "../../../css/mainLayout/footer/footer.css"

export default class FooterCV extends React.Component{
    render(){
        return(
            <div className="cv col-md-4">
                <h4>Scarica il mio CV!</h4>
                <div className="footerCV-button">
                    <a href="#" className="btn btn-sm btn-success">Download <span className="glyphicon glyphicon-download-alt"></span></a>
                    <a href="#" className="btn btn-sm btn-info">Guarda Online <span className="glyphicon glyphicon-search"></span></a>
                </div>
            </div>
        );
    }
}