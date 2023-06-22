import { useState } from "react";

function Counter(){

    const [number, setNumber] = useState(0);             // here number is state and setNumber is setter function , setter fun always written in camelCase;

    function handleClick(e){
        e.stopPropagation();                               // it is used to stop propagation means when we click on button then other parent Click function don't called;
       
       setNumber(number => number+1);
    }

    return(
        <div>
        <h1 style = {{color:'white'}}> {number} </h1>
        <button onClick = {handleClick}> Add </button>
        </div>
    )

}

export default Counter;