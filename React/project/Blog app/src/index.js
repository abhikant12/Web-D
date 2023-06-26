import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> 
    <AppContextProvider>                 {/* Now due this , App is the children of AppContext NOW children access all the data of Context without passing by props (globally)*/}
      <App />
    </AppContextProvider>
  </BrowserRouter>
    
  
);
