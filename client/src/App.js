import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import TruckList from "./components/TruckList";
import Truck from "./components/Truck";
import LoadList from "./components/LoadList";
import Load from "./components/Load";
import DispatchList from "./components/DispatchList";
import Dispatch from "./components/Dispatch";
import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/truck" component={TruckList}/>
            <Route path="/truck/:id" component={Truck}/>
            <Route exact path="/load" component={LoadList}/>
            <Route path="/load/:id" component={Load}/>
            <Route exact path="/dispatch" component={DispatchList}/>
            <Route path="/dispatch/:id" component={Dispatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
