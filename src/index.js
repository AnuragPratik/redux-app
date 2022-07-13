// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// console.log("Learning redux");

// level 1
import { legacy_createStore as createStore } from "redux";

const reducer = function (state, action) {
  if (action.type === "INC") {
    return state + action.payload;
  } else if (action.type === "DEC") {
    return state - action.payload;
  } else if (action.type === "MUL") {
    return state * action.payload;
  } else {
    return state;
  } 
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log(`Store changed - ${store.getState()}`); //165
});

store.dispatch({ type: "INC", payload: 5 });
store.dispatch({ type: "DEC", payload: 3 });
store.dispatch({ type: "INC", payload: 8 });
store.dispatch({ type: "MUL", payload: 15 });
store.dispatch({ type: "DIV", payload: 2 });
