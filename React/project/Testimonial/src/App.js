import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";


function App(){

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 text-center">
      
        <h1 className="text-4xl font-bold"> Our Testimonials </h1>
        <Testimonials reviews = {reviews}/>

    </div>

)}

export default App;
