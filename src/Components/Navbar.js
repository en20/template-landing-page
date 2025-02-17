/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: t('navbar.home'),
      icon: <HomeIcon />,
      id: "home"
    },
    {
      text: t('navbar.about'),
      icon: <InfoIcon />,
      id: "about"
    },
    {
      text: t('navbar.work'),
      icon: <CommentRoundedIcon />,
      id: "work"
    },
    {
      text: t('navbar.testimonials'),
      icon: <CommentRoundedIcon />,
      id: "testimonial"
    },
    {
      text: t('navbar.contact'),
      icon: <PhoneRoundedIcon />,
      id: "contact"
    }
  ];

  const handleClick = (id) => {
    setOpenMenu(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <h1>SOLTECH</h1>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a href="#" key={item.text} onClick={() => handleClick(item.id)}>
            {item.text}
          </a>
        ))}
        <LanguageSelector />
      </div>
      <div className="navbar-menu-container">
        <LanguageSelector />
        <MenuIcon onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleClick(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
