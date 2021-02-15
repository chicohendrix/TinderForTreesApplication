import React from 'react';
import "./Header.css"
import SettingsIcon from '@material-ui/icons/Settings';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';


function Header() {
  return (
    <div className="header">
      <IconButton>
       <SettingsIcon className="header__icon" fontSize="large" />   
      </IconButton>
      
      <img
      className= "header__logo" 
      src= "https://raw.githubusercontent.com/hcdd-340-spring-2021/Assignment-2-Treender-Starter/main/App/Images/treender-logo.png" alt="Treender logo"/>
      <IconButton>
        <ForumIcon className="header__icon"  fontSize="large" />  
      </IconButton>  
    </div>
  );
}

export default Header;
