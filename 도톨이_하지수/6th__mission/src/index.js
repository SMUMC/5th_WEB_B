import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import reportWebVitals from "./reportWebVitals";
// index.js와 store 연결
// Provider가 App을 감싸고, store라는 파라미터를 전달해주어야함. (안하면 하위 컴포넌트에 전달되지 않음.)
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
