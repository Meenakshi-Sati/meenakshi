import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wordle from './PRACTICE PROJECTS/Wordle/Wordle';
import Main from './PRACTICE PROJECTS/Expense Tracker/Main';
import { ToastContainer } from 'react-toastify';
import Error from './PRACTICE PROJECTS/Expense Tracker/Error';
import CreateBudget from './PRACTICE PROJECTS/Expense Tracker/CreateBudget';

const App = () => {
    return (
        <div>
           <Wordle/>
        </div>
    );
}

export default App;
