 import React from 'react';
 import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
 } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
 const App = () => {
   return (
     <div>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<Root/>} />
            <Route path="/login" exact element={<Login/>} />
            <Route path="/signup" exact element={<Signup/>} />
            <Route path="/home" exact element={<Home/>} />
            <Route path="/income" exact element={<Income/>} />
            <Route path="/expense" exact element={<Expense/>} />
          </Routes>
        </BrowserRouter>
     </div>
   )
 }
 
 export default App;

const Root = ()=>{
//check if token exist in local storage
const isAuthenticated = !!localStorage.getItem("token");
//redirect to dashboard if it is authenticated otherwise navigate to login page
return isAuthenticated ? (
  <Navigate to = "/dashboard"/>
) : (
  <Navigate to = "/login"/>
)
}

 