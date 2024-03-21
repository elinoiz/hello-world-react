// src/Header.js
import React from 'react';
import Button from './button';


const Header = ({ onMenuClick, onContentClick}) => {
  return (
    <header>
      <h1>My Website</h1>
      <div>
        <Button onClick={onMenuClick} label = "Menu"/>
        <Button onClick={onContentClick} label = "Content"/>

      </div>
    </header>
  );
};

export default Header;
