import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainTemplate from "./components/mainLayout/template/mainTemplate";
import Home from "./components/content/home/home";
import News from "./components/content/news/news"

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <MainTemplate>
                  <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/news' component={News}/>
                      <Route exact path='/about' component={Home}/>
                      <Route exact path='/contact' component={Home}/>
                  </Switch>
              </MainTemplate>
          </BrowserRouter>
      );
  }
}

export default App;
