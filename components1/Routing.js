import React from 'react';
import '../App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Reports,{Report1} from './Reports';
import Product from './Product';
import Services from './Services';
import {User,Revenue,Mens,Womens} from './Dashsub'
// if it's default exports then you can use direct else write in curly barcket
function Routing() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/reports' exact  component={Reports} />
          <Route path='/products' exact  component={Product} />
          <Route path='/services' exact  component={Services}/>
          <Route path='/dashboard/users' exact component={User}/>
          <Route path='/dashboard/revenue' exact component={Revenue}/>
          <Route path='/products/mens' exact component={Mens}/>
          <Route path='/products/womens' exact component={Womens}/>
          <Route path='/reports/report1' exact component={Report1}/>
        </Switch>
      </Router>
    </>
  );
} 

export default Routing
