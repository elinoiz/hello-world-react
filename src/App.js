// src/App.js
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import Content from './content';

const App = () => {
  //Создаем состояние selectedTab для отслеживания выбранной вкладки
  const [selectedTab, setSelectedTab] = useState('Menu'); // состояние для отслеживания выбранной вкладки

  // Функции для изменения выбранной вкладки
  const handleMenuClick = () => {
    setSelectedTab('Menu');
  };

  const handleContentClick = () => {
    setSelectedTab('Content');
  };

  const labContent = "This is the content of Lab 1."; // содержимое лабораторной работы

  return (
    <div className="app-container">
      <Header 
        onMenuClick={handleMenuClick} 
        onContentClick={handleContentClick} 
      />
            
      {selectedTab === 'Menu' && <Menu />}
      {selectedTab === 'Content' && <Content labContent={labContent} />}
      <Footer />
    </div>
  );
};

export default App;
