import React from 'react'

import Sidenav from '../components/Sidenav/sidenav';

const Layout = (props) => {
  return (
    <div className="layout">
      <Sidenav />
      <div>
        {props.children}
      </div>
    </div>
  )
};

export default Layout;


