import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ProSidebar, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';

import React, {useState} from 'react';
import MainContainer from './components/MainContainer';
import Navigation from './components/Navigation';

const App = () => {


  // Pour changer le sens de la flèche
  const [angle, setAngle] = useState(true);
  const changeIcon = () => {
    setAngle(!angle);
  };

  let icon;
  if(angle){
    icon = <FaAngleRight/>;
  } else {
    icon = <FaAngleLeft/>;
  }

  return (
    <Router>
      <div className="App">
        <header>
          <ProSidebar>
            <SidebarHeader>
              <div className="header">
                <div onClick={changeIcon}>{icon}</div>
                <h1>Breaking Bad</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
                <Navigation/>
            </SidebarContent>
          </ProSidebar>
        </header>
        <div>
          <MainContainer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
