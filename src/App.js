import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
      return (
      <html lang="en">
      <head>
          <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1">

                      <title>Compass Starter by Ariona, Rian</title>

                      <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
                          <link href="fonts/font-awesome.min.css" rel="stylesheet" type="text/css">

                              <link rel="stylesheet" href="style.css">



      </head>


      <body>

      <div class="site-content">

          <header class="site-header">
              <div class="container">
                  <a href="index.html" class="logo"><img src="images/logo.png" alt="Perfect Lab"></a>

                  <div class="main-navigation">
                      <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
                      <ul class="menu">
                          <li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
                          <li class="menu-item"><a href="about.html">About</a></li>
                          <li class="menu-item"><a href="#">Features</a></li>
                          <li class="menu-item"><a href="clients.html">Clients</a></li>
                          <li class="menu-item"><a href="contact.html">Contact</a></li>
                      </ul>
                  </div>

                  <div class="mobile-navigation"></div>
              </div>
          </header>

          <main class="main-content">
              <div class="hero">
                  <div class="container">
                      <img src="images/imac.png" alt="" class="imac">
                          <div class="hero-content">
                              <span>Adipisicing elit eiusmod tempor</span> <br>
                              <span>Incididunt ut labore et dolore magna aliqua dolor</span>
                          </div>
                          <a href="#" class="button">Try it now</a>
                  </div>
              </div>

              <div class="fullwidth-block">
                  <div class="container">
                      <div class="col-md-4">
                          <div class="feature">
                              <i class="feature-icon"><img src="images/icon-server.png" alt=""></i>
                              <h2 class="feature-title">Dedicated Server</h2>
                              <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="feature">
                              <i class="feature-icon"><img src="images/icon-window.png" alt=""></i>
                              <h2 class="feature-title">Intuitive Dashboard</h2>
                              <p>Assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates.</p>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="feature">
                              <i class="feature-icon"><img src="images/icon-id-card.png" alt=""></i>
                              <h2 class="feature-title">Your Own ID</h2>
                              <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="fullwidth-block cta">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-9">
                              <h2>Interested? You can try it <span>for free.</span> You just need 3 minutes!</h2>
                          </div>
                          <div class="col-md-3">
                              <a href="#" class="button">Get Trial Version</a>
                          </div>
                      </div>
                  </div>
              </div>
          </main> <!-- .main-content -->

          <footer class="site-footer">
              <div class="container">
                  <div class="row">
                      <div class="col-xs-6 col-md-3">
                          <div class="widget">
                              <h3 class="widget-title">Contact</h3>
                              <address>
                                  <strong>Prefect Labs</strong>
                                  <p>186 W Canfield St Detroit, MI 48201</p>
                                  <p><a href="#">(45) 985 527 421</a><br>
                                      <a href="#">hello@perfectlab.com</a></p>
                              </address>
                          </div>
                      </div>
                      <div class="col-xs-6 col-md-3">
                          <div class="widget">
                              <h3 class="widget-title">Help</h3>
                              <ul class="dash-list">
                                  <li><a href="#">Praesentium deleniti</a></li>
                                  <li><a href="#">Atque corrupti</a></li>
                                  <li><a href="#">Quos dolores quas molestias</a></li>
                                  <li><a href="#">Excepturi sint occaecati</a></li>
                                  <li><a href="#">Cupiditate provident</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-xs-6 col-md-3">
                          <div class="widget">
                              <h3 class="widget-title">Jobs</h3>
                              <ul class="dash-list">
                                  <li><a href="#">Web designer</a></li>
                                  <li><a href="#">Project manager</a></li>
                                  <li><a href="#">Web developer</a></li>
                                  <li><a href="#">Art director</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-xs-6 col-md-3">
                          <div class="widget">
                              <h3 class="widget-title">Follow us</h3>
                              <div class="social-links">
                                  <a href="#"><i class="fa fa-facebook"></i></a>
                                  <a href="#"><i class="fa fa-google-plus"></i></a>
                                  <a href="#"><i class="fa fa-twitter"></i></a>
                                  <a href="#"><i class="fa fa-pinterest"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>

      </div>


      <script src="js/jquery-1.11.1.min.js"></script>
      <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&amp;language=en"></script>
      <script src="js/plugins.js"></script>
      <script src="js/app.js"></script>

      </body>

      </html>
          {/*<BrowserRouter>*/}
              {/*<MainTemplate>*/}
                  {/*<Switch>*/}
                      {/*<Route exact path='/' component={Home}/>*/}
                      {/*<Route exact path='/news' component={News}/>*/}
                      {/*<Route exact path='/about' component={About}/>*/}
                      {/*<Route exact path='/contact' component={Contact}/>*/}
                  {/*</Switch>*/}
              {/*</MainTemplate>*/}
          {/*</BrowserRouter>*/}
      );
  }
}

export default App;
