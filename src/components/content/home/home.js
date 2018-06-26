import React from "react";


export default class Home extends React.Component{
    render(){
        return(

         <main className="main-content">
             <div className="hero">
                 <div className="container">
                     <img src={require("../../../images/imac.png")} alt="" className="imac"/>
                         <div className="hero-content">
                             <span>Adipisicing elit eiusmod tempor</span>
                             <br/>
                             <span>Incididunt ut labore et dolore magna aliqua dolor</span>
                         </div>
                         <a href="#" className="button">Try it now</a>
                 </div>
             </div>

             <div className="fullwidth-block">
                 <div className="container">
                     <div className="col-md-4">
                         <div className="feature">
                             <i className="feature-icon">
                                 <img src={require('../../../images/icon-server.png')} alt=""/>
                             <h2 className="feature-title">Dedicated Server</h2>
                             <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>

                             </i>
                         </div>
                     </div>
                     <div className="col-md-4">
                         <div className="feature">
                             <i className="feature-icon">
                                 <img src={require('../../../images/icon-window.png')} alt=""/>
                             <h2 className="feature-title">Intuitive Dashboard</h2>
                             <p>Assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates.</p>

                             </i>
                         </div>
                     </div>
                     <div className="col-md-4">
                         <div className="feature">
                             <i className="feature-icon"><img src={require('../../../images/icon-id-card.png')} alt=""/>
                             <h2 className="feature-title">Your Own ID</h2>
                             <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.</p>
                             </i>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="fullwidth-block cta">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-9">
                             <h2>Interested? You can try it <span>for free.</span> You just need 3 minutes!</h2>
                        </div>
                         <div className="col-md-3">
                             <a href="#" className="button">Get Trial Version</a>
                         </div>
                     </div>
                 </div>
             </div>
         </main>
        );
    }
}