import React from "react";


export default class Footer extends React.Component{

    render(){
        return(
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <div className="widget">
                                <h3 className="widget-title">Contact</h3>
                                <address>
                                    <strong>Prefect Labs</strong>
                                    <p>186 W Canfield St Detroit, MI 48201</p>
                                    <p><a href="#">(45) 985 527 421</a><br/>
                                        <a href="#">hello@perfectlab.com</a></p>
                                </address>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="widget">
                                <h3 className="widget-title">Help</h3>
                                <ul className="dash-list">
                                    <li><a href="#">Praesentium deleniti</a></li>
                                    <li><a href="#">Atque corrupti</a></li>
                                    <li><a href="#">Quos dolores quas molestias</a></li>
                                    <li><a href="#">Excepturi sint occaecati</a></li>
                                    <li><a href="#">Cupiditate provident</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="widget">
                                <h3 className="widget-title">Jobs</h3>
                                <ul className="dash-list">
                                    <li><a href="#">Web designer</a></li>
                                    <li><a href="#">Project manager</a></li>
                                    <li><a href="#">Web developer</a></li>
                                    <li><a href="#">Art director</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="widget">
                                <h3 className="widget-title">Follow us</h3>
                                <div className="social-links">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}