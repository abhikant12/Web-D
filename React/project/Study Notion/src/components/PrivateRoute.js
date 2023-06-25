import React from 'react'
import {Navigate} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

function PrivateRoute ({isLoggedIn, children}) {                             
     
  if(isLoggedIn)  return children;
  else return <Navigate to="/login"/>
    
}

export default PrivateRoute

/*
here if isLoggedIn == true then we can go to Dashboard but if isLoggedIn == false then we cannot go to Dashboard 
so for this we create this function ,  if isLoggedIn == false then we return <Navigate to="/login"/>

but if isLoggedIn == false then Dashboard button is not visible here we are talking about
if we search like this  "http://localhost:3000/login" then we can go to login page so
if we are not login then after searching "http://localhost:3000/Dashboard" we should not go to dashboard that way
we create a privateRoute function or component so result of this like is <Navigate to="/login"/>
*/  