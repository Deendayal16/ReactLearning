import React from 'react';
import ReactDOM from 'react-dom/client';
import TicketApp from './React-Ticket-CRUD-Task/TicketContainer';
import App from './MySelfTestingApp/TestingData';
import UseStateApp from './MySelfTestingApp/UseState';
import ImgApp from './React-Hands-on-Task1/ImgApp';
import InputApp from './React-Hands-on-Task2/InputApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <TicketApp/>
    {/* <App/> */}
    {/* <UseStateApp/> */}
     {/* <ImgApp/> */}
     {/* <InputApp/> */}
  </React.StrictMode>
);