import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './components/count'
import Control from './components/Control'

const App = () => {
    return (
        <div className="App">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Count/>
            <Control/>
        </div>
    );
}

export default App;



