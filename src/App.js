import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Navigation from "./containers/NavigationContainer"
import Router from './Router'
import store from './redux/store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation/>
        <Router/> 
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
