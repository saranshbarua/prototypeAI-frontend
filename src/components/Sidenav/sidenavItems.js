import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper, faUser, faHandshake, faEnvelope, faImage, faWrench, faUsers, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faNewspaper, faUser, faHandshake, faEnvelope, faImage, faWrench, faUsers, faPowerOff);

const SidenavItems = (props) => {

    const items = [
        {
            icon: 'newspaper',
            text: 'Timeline',
            link: '/'
        },
        {
            icon: 'handshake',
            text: 'Requests',
            link: '/requests'
        },
        {
            icon: 'envelope',
            text: 'Network',
            link: '/network'
        },
        {
            icon: 'user',
            text: 'Profile',
            link: `/profile/${props.loggedIn}`
        },
        {
            icon: 'wrench',
            text: 'Settings',
            link: '/user/profile'
        },
        {
            icon: 'users',
            text: 'Groups',
            link: '/user/groups'
        },
        {
            icon: 'power-off',
            text: 'Logout',
            link: '/logout'
        },
    ];

    const element = (item,i) => (
        <Link key={i} to={item.link} style={{ textDecoration: 'none', color: '#b0bec5'}}>
            <div className="nav-item">
                    <div className="nav-item-icon">
                        <FontAwesomeIcon 
                            icon={item.icon}
                        />
                    </div>
                    <div className="nav-item-text">
                        <span className="navitem-text ssp-400">{item.text}</span>
                    </div>
            </div>
        </Link>
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
