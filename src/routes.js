import React from 'react'
import { Switch, Route } from 'react-router-dom';

//Components

import Home from './components/Home/home';
import Layout from './hoc/layout';
import Login from './containers/Login/login';
import Signup from './containers/Signup/signup';
import Groups from './components/Groups/groups';
import GroupChat from './components/GroupChat/groupChat';
import UserSettings from './components/UserSettings/UserContainer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup}/>
      <Layout loggedIn="Saransh Barua">
          <Route path="/user/groups" exact component={Groups}/>
          <Route path="/groupchat" exact component={GroupChat} />
          <Route path="/user/profile" exact component={UserSettings} />
          <Route path="/" exact 
            render = {(routeProps) => (<Home {...routeProps} loggedIn = "Saransh Barua" />)}
          />
      </Layout>
    </Switch>
  )
};

export default Routes;
