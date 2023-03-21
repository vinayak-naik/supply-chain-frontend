import React, { useState } from 'react'
import style from './header.module.css'
import logo from '../../assets/img/logo.png';
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Menu as MenuIcon } from "@mui/icons-material";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const HeaderComponent = (props) => {
    const {showDrawer, setShowDrawer, isAuthenticated}=props
    const [anchorElUser, setAnchorElUser] = useState(null);
  
 
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      
        setAnchorElUser(null);
      };
  return (
    <div className={style.container}>
        <div className={style.logoContainer}>
        {/* <AdbIcon fontSize='large'  className={style.logoIcon}/> */}
        <img  className={style.logo}  src={logo}/>
        <div className={style.appName}>
        Hyperledger Supply Chain Management
    </div>
        </div>
        <div className={style.endBox}>
        {isAuthenticated && <div className={style.profileIcon}>
        <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={()=>setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
        </div>}
        <div className={style.hamburgerMenu}>
      <IconButton
        onClick={()=>setShowDrawer(!showDrawer)}
        sx={{ color: "white" }}
        aria-label="delete"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </div>
    </div>
    </div>
  )
}

