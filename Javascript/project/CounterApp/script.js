const countValue = document.getElementById('counter');               //it access the current value of number (b/w plus and minus sign)

function increment(){
    let value = parseInt(countValue.innerText);                // get the value from UI
    value = value + 1;                                          //Update the value
    countValue.innerText = value;                               //set the value onto UI
};


function decrement(){
        let value = parseInt(countValue.innerText);               // get the value from UI
        value = value - 1;                                        //Update the value
        countValue.innerText = value;                            //set the value onto UI
};