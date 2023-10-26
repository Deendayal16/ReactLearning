import React from 'react';
import ReactDOM from 'react-dom/client';
import TicketApp from './React-Ticketing-Crud-AppTask/TicketContainer';
import App from './MySelfTestingApp/TestingData';
import UseStateApp from './MySelfTestingApp/UseState';
import ImgApp from './React-Hands-on-Task1/ImgApp';
import InputApp from './React-Hands-on-Task2/InputApp';
import TextColourApp from './React-Hands-on-Task3/App';
import Task4App from './React-Hands-on-Task4/App';
import Task5App from './React-Hands-on-Task5/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TicketApp/>
    {/* <App/> */}
    {/* <UseStateApp/> */}
     {/* <ImgApp/> */}
     {/* <InputApp/> */}
     {/* <TextColourApp/> */}
     {/* <Task4App/> */}
     {/* <Task5App/> */}
  </React.StrictMode>
);