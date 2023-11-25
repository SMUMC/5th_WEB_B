
// 실습미션 2
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./mission1-frontcode/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// 실습 미션 1
// import React from "react";
// import ReactDOM from "react-dom/client";
// import store from "./mission1-frontcode/redux/store";
// import { Provider } from "react-redux";
// import App1 from "./App-mis1";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App1 />
//   </Provider>
// );