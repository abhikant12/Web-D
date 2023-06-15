const inputSlider = document.querySelector("[data-lengthSlider]");                         /* this will fetch all the data from index.html */
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';



let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");                                      //  default value of slider is 10 and indicator color is white 


function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"      
}

function setIndicator(color){                                     
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}


inputSlider.addEventListener('input', (e) => {                        //this event manage slider and display_slider number;
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {                            // copybuttom event function;
    if(passwordDisplay.value) copyContent();
         
})

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);               // it work as  navigator.clipboard.writeText() return promise
        copyMsg.innerText = "copied";                                            // and promise is of two type (resolved , reject) so if return resolved
    }                                                                           //  then print copied other wise faild and here await means if await line run
    catch(e) {                                                                  // successfully then below line will run or we can also use then like 
        copyMsg.innerText = "Failed";                         //  navigator.clipboard.writeText(passwordDisplay.value).then( () => {copyMsg.innerText = "copied";} , () => { copyMsg.innerText = "Failed"; });
    }
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}


function getRndInteger(min, max) {                                        //Math.random() give random number b/w (0 to 1) included float value so we multiplyed
    return Math.floor(Math.random() * (max - min)) + min;                //by (max - min) now it give number b/w (0 to (max - min)) and then find floor value of that
}                                                                        // number so it is integer and then plus min so it give num b/w (min , max);

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    return symbols.charAt(getRndInteger(0, symbols.length));
}

function calcStrength() {                                        //it calculate strength and display it via color;
    
    let u = false , l = false , n = false , s = false , cnt = 0;
    if(uppercaseCheck.checked) { u = true;  cnt++; }
    if(lowercaseCheck.checked) { l = true;  cnt++; }
    if(numbersCheck.checked)  { n = true;  cnt++; }
    if(symbolsCheck.checked) { s = true;  cnt++; }
  
    if((s && l && n && u) && passwordLength >= 8) setIndicator("green"); 
    else if( cnt >= 3 && passwordLength >= 6) setIndicator("blue");
    else if((u || l || n) && s && passwordLength >= 6) setIndicator("#ff0");
    else setIndicator("#f00");
}

function shufflePassword(array) {                                                //Fisher Yates Method
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i));                               // find a random number j b/w (0 to (i))
        const temp = array[i];                                                   //swap number at i index and j index
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

 
allCheckBox.forEach((checkbox) => {                                           //we apply addeventlistener on all checkbox means if anycheck mark changes
    checkbox.addEventListener('change', () => {                              // this event will be happaned;

        checkCount = 0;                                                     // in this event we count all checkmark and compare with passwordlength
        allCheckBox.forEach((checkbox) => {
              if(checkbox.checked) checkCount++; 
        });
       
        if(passwordLength < checkCount ) {
            passwordLength = checkCount;
            handleSlider();
        }
  });
})
 
 


generateBtn.addEventListener('click', () => {
    
    if(checkCount == 0) return ;                                            //none of the checkbox are selected

    if(passwordLength < checkCount){                                        //let checkmark is 3 and pass_len = 2 so 3 type of char will not store in 2 len password
        passwordLength = checkCount;                                       // so we update password_length and slider by checkmark number;
        handleSlider();
    }

    password = "";                                                          //remove old password

    let funcArr = [];
    if(uppercaseCheck.checked) funcArr.push(generateUpperCase);            //we Make an array and push all checked checkbox;
    if(lowercaseCheck.checked) funcArr.push(generateLowerCase);
    if(numbersCheck.checked) funcArr.push(generateRandomNumber);
    if(symbolsCheck.checked) funcArr.push(generateSymbol);
        
    for(let i=0; i<funcArr.length; i++){                                  //add one symbol of all checked checkbox
        password += funcArr[i]();                                         // like funcArr[0]() ==  generateUpperCase()
    }
    
    for(let i = 0; i < (passwordLength-funcArr.length); i++) {                  // remaining addition is random;
        password += funcArr[getRndInteger(0 , funcArr.length)]();
    }

    password = shufflePassword(Array.from(password));                  
    passwordDisplay.value = password;
    calcStrength();
});