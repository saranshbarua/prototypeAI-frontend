import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const SidenavItems = () => {

    const items =[
        {
            icon: 'home',
            text: 'Timeline',
            link: '/'
        },
        {
            icon: 'home',
            text: 'Activity',
            link: '/login'
        },
        {
            icon: 'home',
            text: 'Message',
            link: '/message'
        },
        {
            icon: 'home',
            text: 'Gallery',
            link: '/gallery'
        },
        {
            icon: 'home',
            text: 'Settings',
            link: '/user'
        },
        {
            icon: 'home',
            text: 'Groups',
            link: '/groups'
        },
        {
            icon: 'home',
            text: 'Logout',
            link: '/logout'
        },
    ];

    const element = (item,i) => (
        <div key={i} className="nav-item">
            <Link to={item.link} style={{ textDecoration: 'none'}}>
                <span className="navitem-text ssp-400">{item.text}</span>
            </Link>
        </div>
    )
    const showItems = () => (
        items.map((item, i) => {
            return element(item,i)
        })
    )

    return (
    <div className="navitems-container">
      {showItems()}
    </div>
  )
};

export default SidenavItems;