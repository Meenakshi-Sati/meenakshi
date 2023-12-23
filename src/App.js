import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './PRACTICE PROJECTS/Expense Tracker/Main';
import { ArrayProvider } from './PRACTICE PROJECTS/Expense Tracker/AppContext';
import Dashboard from './PRACTICE PROJECTS/Expense Tracker/Dashboard';
import CreateBudget from './PRACTICE PROJECTS/Expense Tracker/CreateBudget';
import BudgetOverview from './PRACTICE PROJECTS/Expense Tracker/BudgetOverview';
import JeopardyMain from './PRACTICE PROJECTS/Jeopardy Game/JeopardyMain';
import NewsMain from './PRACTICE PROJECTS/NewsApp/NewMain';
import { APIProvider } from './PRACTICE PROJECTS/NewsApp/APIContext';
import NewsDetail from './PRACTICE PROJECTS/NewsApp/NewsDetail';
import Expense from './PRACTICE PROJECTS/Expense Tracker/Expense';
import GroceryMain from './PRACTICE PROJECTS/Grocery Bud/GroceryMain';
import BudgetItem from './PRACTICE PROJECTS/Expense Tracker/BudgetItem';
import ExpensesList from './PRACTICE PROJECTS/Expense Tracker/ExpensesList';
import Nav from './PRACTICE PROJECTS/NewsApp/Navbar';

const App = () => {

  return (
    <div>
      <ToastContainer />
      <APIProvider>
        <Router>
          <Routes>
          <Route path="/general" element={<NewsDetail currentCategory="general"/>}/>
          <Route path="/business" element={<NewsDetail currentCategory="business"/>}/>

          </Routes>
        </Router>
      </APIProvider>
    </div>
  );
}

export default App;
