import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

export default function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="logo" />
            
        </div>
        <div className="header__middle">
            <SearchIcon />
            <input type="text" placeholder='Search mail'  />
            <TuneIcon />
        </div>

        <div className="header__right"></div>
    </div>
  )
}
