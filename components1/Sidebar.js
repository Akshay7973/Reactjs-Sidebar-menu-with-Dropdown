import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {IoIosPaper }from 'react-icons/io';
import {FcServices} from 'react-icons/fc'
import {RiArrowUpSFill,RiArrowDownSFill} from 'react-icons/ri'
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text',
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIosPaper />,
    cName: 'nav-text',
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav:[{
      title:"Reports1",
      path: '/reports/report1',
      icon: <IoIosPaper />,
    }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaCartPlus />,
    cName: 'nav-text',
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mens',
        path: '/products/mens',
        icon: <FaCartPlus />
      },
      {
        title: 'Womens',
        path: '/products/womens',
        icon: <FaCartPlus />
      },
    ]
  },
  {
    title: 'Services',
    path: '/services',
    icon: <FcServices />,
    cName: 'nav-text'

  },
];
