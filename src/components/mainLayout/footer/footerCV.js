import React from "react";
import "../../../css/mainLayout/footer/footer.css"

export default class FooterCV extends React.Component{
    render(){
        return(
            <div className="cv col-md-4 col-xs-4">
                <h4>Scarica il mio CV!</h4>
                <div className="footerCV-button">
                    <button type="button" className="btn btn-success btn-sm">Scarica <span className="glyphicon glyphicon-save"></span></button>
                    <button type="button" className="btn btn-info btn-sm">Guarda Online <span className="glyphicon glyphicon-search"></span></button>
                </div>
            </div>
        );
    }
}