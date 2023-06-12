
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




 







 


 