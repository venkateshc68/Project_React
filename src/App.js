import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./Home"
import Aboutus from'./Aboutus';
import Services from './Services';
import Gallery from './Gallery';
import Contactus from './Contactus'
//import us from './components/us'
//import Layout from './components/Layout'
import Navibar from './components/Navibar';
import './App.css';
 

function App() {
  return (
    <React.Fragment>
    <Navibar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/Aboutus" component={Aboutus}/>
          <Route  path="/Services" component={Services}/>
          <Route  path="/Gallery" component={Gallery}/>
          <Route  path="/Contactus" component={Contactus}/>
          

          




        </Switch>
      </Router>
     
    </React.Fragment>
  );
}

export default App;
