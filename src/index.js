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

// level 2 - npm i redux-logger --save-dev
// import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import logger from "redux-logger"; //appollo, thung, saga

// const reducer = function (state, action) {
//   if (action.type === "INC") {
//     return state + action.payload;
//   } else if (action.type === "DEC") {
//     return state - action.payload;
//   } else if (action.type === "MUL") {
//     return state * action.payload;
//   } else {
//     return state;
//   }
// };

// const middleware = applyMiddleware(logger);

// const store = createStore(reducer, 1, middleware);

// store.subscribe(() => {
//   console.log(`Store changed - ${store.getState()}`); //165
// });

// store.dispatch({ type: "INC", payload: 5 });
// store.dispatch({ type: "DEC", payload: 3 });
// store.dispatch({ type: "INC", payload: 8 });
// store.dispatch({ type: "MUL", payload: 15 });
// store.dispatch({ type: "DIV", payload: 2 });

// level 3 - combine reducers, dev tools - npm i redux-devtools-extension --save-dev
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return (state = { ...state, name: action.payload }); //{user:{name:"Adam"}}
    case "CHANGE_AGE":
      return (state = { ...state, age: action.payload }); //{user:{name:"Adam", age:50}}
    default:
      return state;
  }
};
const tweetsReducer = (state = [], action) => {
  return state;
};
const allReducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(logger))
);

store.dispatch({ type: "CHANGE_NAME", payload: "Adam" });
store.dispatch({ type: "CHANGE_AGE", payload: 50 });
store.dispatch({ type: "CHANGE_NAME", payload: "Brock" });
