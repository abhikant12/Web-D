
/*
document.addEventListener('click', function(){
    console.log('I have clicked on the docuemnt');
});
document.removeEventListener('click',  function(){               // removeEventListener doest not work because function is not same;
    console.log('I have clicked on the docuemnt');
});

function eventFunction() {
    console.log('I have clicked on the docuemnt');
}
document.addEventListener('click', eventFunction);
document.removeEventListener('click', eventFunction);             // NOW work because function is same;  to check comment above code part;
 


const content = document.querySelector('#wrapper');
content.addEventListener('click', function(babbar) {                //when we click on wrapper field (para span) then this even occur
    console.log(babbar);
})



let links = document.querySelectorAll('a');                   //all three anchor tag (a) are stored in links like [a , a , a]
let thirdLink = links[2];                                     // index 2 links are store in thirdlink;

thirdLink.addEventListener('click', function(event) {        //when we click on thirdlink then this event occur;
    event.preventDefault();                                  //when we click on facebook then facebook does not open;
    console.log('maza aaya, accha laga');
});



let myDiv = document.createElement('div');      

for(let i=1; i<=100; i++){                                      //it create 100 paragraph like (This is para 1)
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;
    myDiv.appendChild(newElement);                             //all paragraph append in the div
}
document.body.appendChild(myDiv);                              //mydiv is appended in the  body of document;

function paraStatus(event) { 
    console.log('abhikant ' + event.target.textContent);         //in parastatus jis target par click karenge uska content print hoga;
}
myDiv.addEventListener('click', paraStatus);                    //when we click on mydiv then parastatus even occur;

 

let element = document.querySelector('#wrapper');                     //to check  comment first wrapper in index.html
element.addEventListener('click', function(event) {                   // when we click on span word then this even occur not on para;
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});

 
*/
 
  


/*

const t1 = performance.now();                                      //t1 store current time of performance;
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;
    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this took " + (t2-t1) + " ms");                      // This will give how much it take to run above code;
 

  
const t3 = performance.now();                                      //optimising a bit 
let myDiv = document.createElement('div');
for(let i=1; i<=100; i++) {
    let element = document.createElement('p');
    element.textContent = 'This is Para ' + i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("this took " + (t4-t3) + " ms");
 

const t5 = performance.now();                                      //more optimizing;
let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);                            // 1 Reflow, 1 Repaint
const t6 = performance.now();
console.log("this took " + (t6-t5) + " ms");
 

*/



/*
JavaScript is an asynchronous and concurrent programming language that offers a lot of flexibility. It’s single-threaded like sync, 
but also non-blocking like async.

Although it’s synchronous by nature, JavaScript benefits from asynchronous code. Long-running JavaScript functions can make the user 
interface (UI) or server unresponsive until the function has returned, resulting in a less-than-stellar user experience. However,
there are some instances where users can benefit from blocking programming; for example, when making an online payment.

The beauty of JavaScript is that it offers the best of both worlds: Single-thread and multi-thread, blocking and non-blocking.
With this flexibility, programmers can write code in a single programming language instead of two—one for synchronous operations and 
another for asynchronous operations.

Asynchronous is a non-blocking architecture, so the execution of one task isn’t dependent on another. Tasks can run simultaneously. 
Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it. Each 
task requires an answer before moving on to the next iteration.
*/

/*
setTimeout(function(){                                //asynchronous code  , output :-  first,second , third
    console.log('third');
},3000)

function sync() {
    console.log('first');
}
sync();
console.log('second');
*/

/*
let meraPromise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('I am insde Promise1');
        }, 5000);
        //resolve(1234567890);
        reject(new Error('Bhaisahab Error aaaye hai'))
});
meraPromise1.then((value) => { console.log(value)}, (error) => { console.log("Recieved an Error")});   // commnet it to see its working;


let meraPromise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('I am insde Promise2');
    }, 3000);
    //resolve(2233);
    //reject(new Error('Bhaisahab Error aaaye hai'))
});
console.log('Pehla');
*/

 /*
let waadaa1 = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        console.log('setimeout1 started');                             //it print after 2 sec;
    },2000);
    resolve(true);
})

let output = waadaa1.then(() => {
    let waadaa2 = new Promise(function(resolve, reject) {
        setTimeout(()=> {
            console.log('setimeout2 started');                            //it print after 3 sec;
        },3000);
        resolve("waada 2 resolved");
    })
    return waadaa2;
})
output.then((value) => console.log(value));                        // output return resolve or reject ;

*/

/*
async function abcd() {                                       // it return promise "kya hua tera";                    
    return "kya hua tera";
}

async function utility() {                                     //this async function means both promise run parallely      

      let delhiMausam = new Promise((resolve, reject) => {
          setTimeout(()=>{
              resolve("Delhi me bhot garmi hai");
          },5000);
      });

      let hydMausam = new Promise((resolve, reject) => {
          setTimeout(()=>{
              resolve("Hyderabad is Cool");
          },6000);
      });

      let dM =  delhiMausam;                                   //if we want to make sync then attach await keyword like  let dM = await delhiMausam; 
      let hM =  hydMausam;

      return [dM, hM];
 }

//await keyword is used when we want to  run that line after excution of above code;
async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');                 // it fetch the content;
    let output = await content.json();                                                         // converted into json(javascript object notation)
    console.log(content);
}
utility();


 */

/*
async function helper() {

    let options = {                                                   //these are data;
        method: 'POST',
        body: JSON.stringify({
          title: 'Babbar',
          body: 'Tagdi Body ',
          userId: 1998,
          weight: 90,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);          //we are sending the data at this url;
    let response = content.json();
    return response;
}

async function utility() {
    let ans = await helper();
    console.log(ans);
}
utility();
 
function init() {                                                     // closer function  , when there is closer nested function then data pass in reference;
    let name = "Mozilla";  
    function displayName() {                                         // displayName() is the inner function, that forms the closure
      console.log(name);                                             // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();
  
*/


 







 


 