// src/Menu.js
import React from 'react';

const Menu = ({ onTabChange }) => {
  const labWorks = ["Lab 1", "Lab 2", "Lab 3"]; // список лабораторных работ

  return (
    <nav>
      <ul>
        {labWorks.map((lab, index) => (
          <li key={index}>{lab}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
