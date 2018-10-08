import React from 'react'
import { Switch, Route } from 'react-router-dom';

//Components

import Home from './components/Home/home';
import Layout from './hoc/layout';
import Login from './components/Login/login';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
};

export default Routes;
