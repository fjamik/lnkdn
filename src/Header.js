import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HeaderOption from './HeaderOption'
import { useDispatch } from 'react-redux'

function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = () => {}

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt=''
        />
        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Job' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar='https://avatars3.githubusercontent.com/u/48258341?s=60&v=4'
          title='me'
          onClick={}
        />
      </div>
    </div>
  )
}

export default Header
