import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Program from './components/Program';
import Event from './components/Event';
import Volunteer from './components/Volunteer';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <div className="title">
              <h2 className="center teal-text text-lighten-1">Peel Chinese Community Service Hub</h2>
            </div>
            <Navbar />
          </header>
          <div>
           <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/program' component={Program} />
              <Route path='/event' component={Event} />
              <Route path='/volunteer' component={Volunteer} />
              <Route path='/news' component={News} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
