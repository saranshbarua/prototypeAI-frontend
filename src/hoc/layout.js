import React from 'react'
const Layout = (props) => {
  return (
    <div>
      Side Navbar
      <div>
        {props.children}
      </div>
    </div>
  )
};

export default Layout;


