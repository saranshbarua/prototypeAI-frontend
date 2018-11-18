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
import Network from './components/Network/network';
import UserProfile from './components/UserProfile/userProfile';
import SearchForm from './components/Search/searchForm';
import Logout from './containers/Logout/logout';
import Requests from './components/Requests/requests';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup}/>
      <Route path="/logout" component={Logout} />
      <Layout>
          <Route path="/user/groups" exact component={Groups}/>
          <Route path="/groupchat" exact component={GroupChat} />
          <Route path="/user/profile" exact component={UserSettings} />
          <Route path="/search" exact component={SearchForm} />
          <Route path="/profile/:id" exact component={UserProfile} />
          <Route path="/network" component={Network} />
          <Route path="/requests" component={Requests} />
          <Route path="/" exact component={Home}/>
      </Layout>
    </Switch>
  )
};

export default Routes;
