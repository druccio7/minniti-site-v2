import React from "react";
import "../../../css/mainLayout/footer/footer.css"

export default class FooterCV extends React.Component{
    render(){
        return(
            <div className="cv col-md-4">
                <h4>Scarica il mio CV!</h4>
                <a href="#" className="btn btn-sm btn-success"><span className="glyphicon glyphicon-download"></span> Download</a>
            </div>
        );
    }
}