import React, { useState } from 'react';
import {FaBars}from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import './Nav.css';
import SubMenu from "./SubMenu";
import { IconContext } from 'react-icons';

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar  ? 'nav-menu ': 'nav-menu active' } >{/* */}
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiOutlineClose onClick={showSidebar}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} />
                // <li key={index} 
                // className={item.cName}>
                //   <Link to={item.path}>
                //     <span>{item.icon} {item.title}</span>
                //   </Link>
                // </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Nav;
