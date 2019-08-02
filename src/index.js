import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home';
import Results from './pages/results';
import Teams from './pages/teams';
import Standings from './pages/standings';
import Drivers from './pages/drivers';
import Circuits from './pages/circuits';
const routing = (
  <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    <div>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/results' component={Results} />
          <Route path='/teams' component={Teams} />
          <Route path='/standings' component={Standings} />
          <Route path='/drivers' component={Drivers} />
          <Route path='/circuits' component={Circuits} />
        </Switch>
      </Layout>
    </div>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))