import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainTemplate from "./components/mainLayout/template/mainTemplate";
import Home from "./components/content/container/home/home";
import News from "./components/content/container/news/news"
import About from "./components/content/container/about/about"
import Contact from "./components/content/container/contact/contact"

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <MainTemplate>
                  <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/news' component={News}/>
                      <Route exact path='/about' component={About}/>
                      <Route exact path='/contact' component={Contact}/>
                  </Switch>
              </MainTemplate>
          </BrowserRouter>
      );
  }
}

export default App;
