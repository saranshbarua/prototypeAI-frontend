import React from 'react'
import { Switch, Route } from 'react-router-dom';

//Components

import Home from './components/Home/home';
import Layout from './hoc/layout';
import Login from './containers/Login/login';
import Signup from './containers/Signup/signup';
import Groups from './components/Groups/groups';
import UserSettings from './components/UserSettings/UserContainer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup}/>
      <Layout>
          <Route path="/user/groups" component={Groups}/>
          <Route path="/user/profile" component={UserSettings} />
          <Route path="/" exact component={Home} />
      </Layout>
    </Switch>
  )
};

export default Routes;
