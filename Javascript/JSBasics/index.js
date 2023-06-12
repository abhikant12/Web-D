
/*
let lastName = 'Babbar' ;                           //this  is  string 
let firstName = new String('Love');                 //this is object  to check -> typeof firstName;  or typeof lastName;


let message = `Hello ${lastName},                   //if we want to display the msg as written use backtick symbol (` `)

Thanks for the Opportunity

Regards,
Babbar`;
console.log(message);
let words = message.split(' ');                    // split on the basis of ' '
console.log(words);

let msg = 'My name is abhikant kumar';
let w = msg.split(' ');
console.log(w);
*/


/*
let date = new Date();                             // date is current date;
let date2 = new Date('June 20 1998 07:15');
let date3 = new Date(1998, 11, 20, 7);
date3.setFullYear(1947);
console.log(date3);
*/


/*
let numbers = [1,4,5,7];
console.log(numbers);

console.log(numbers);
console.log(numbers.indexOf(9));                   //output is -1

if(numbers.indexOf(4) != -1)                      //we want to check if a number exist in an array
    console.log("present");

console.log(numbers.includes(7));                 //output is true
console.log(numbers.indexOf(4, 2) );              //output is -1

numbers.push(99);                       //insert at end;
numbers.unshift(99);                   // insert at beginning
numbers.splice(2 , 0 , "abhi");        // insert abhi at index 2 and delete 0 element at ind 2;
console.log(numbers);

let courses = [                         //arry of object :- first obj is {no:1, naam:'Love'},  and 2nd is {no:2, naam:'Rahul'}
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];
console.log(courses);
console.log(courses.includes( {no:1, naam:'Love'} ) );         //output false because in array of object (references) we use call back function

let ans = courses.find(function(res){                          //function(res) means in function courses each object is denoted as res now return 
            return res.naam === 'Love';                       // those object whose naam is 'Love'  so return res.naam === 'Love';
});
console.log(ans);

// for removing an element 
//end -> numbers.pop()   ,   beginning -> numbers.shift   ,   middle ->  numbers.splice(2 , 1)

// To empty an array
//numbers = []; (not work in reference/object)     or    numbers.length = 0;    or   numbers.splice(0,numbers.length);

//To concatenate two array num1 and num2 :-   let combined = num1.concat(num2);

// Sort  :-  numbers.sort();    ,   Reverse :-  numbers.reverse();

let numbers = [10,20,30,40,50];
const joined = numbers.join(',');
console.log(joined);

let num = [1,2,-1,-4];
let filtered =  num.filter(value => value >= 0);
console.log(filtered);

let items = numbers.map(value => 'student_no' + value);         //ouput :- ['student_no10', 'student_no20', 'student_no30', 'student_no40', 'student_no50']
console.log(items);

let number = [1,2,-6,-9];
let item = number.filter(value => value >= 0).map(value => 'abhi' + value);
console.log(item);                                                               //['abhi1', 'abhi2']

*/
 


/*

let rectangle = {                            // object create ,  object always pass by reference;
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};


function createRectangle(len, bre){                       //factory function 

    const rectangle = {
        length: len,
        breadth:bre ,

        draw() {
            console.log('drawing rectangle');
        }
     };
    return rectangle;
}

let rectangleObj1 = createRectangle(5, 4);
let rectangle2 = createRectangle(2,3);
let rectangle3 = createRectangle(7,9);


//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents


function Rectangle(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw= function() {
        console.log('drawing');
    }
}

let rectangleObject = new Rectangle(4,6);                   //object creation using constrcutor function
 
  
rectangleObject.color = 'yellow';                          //creating element in rectangleOject  object
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);
  

let a = {value: 10};
let b = a;
a.value++;
console.log(a.value);                //ouput :- a.value = 11  and b.value = 11;
console.log(b.value);                 
 

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop 
for(let key in rectangle ) {                    //keys are reflected through key variable and values are reflected through rectangle[key]
    console.log(key,rectangle[key]);             //ouput :- lenght 2  /n breadth 3
}
  

if('length' in rectangle) {                        // ouput :- present;
    console.log('Present');
}
else {
    console.log('Absent');
}
 


//object - colone #1
let src = {
    a:10,
    b:20,
    c:30
};
let dest = {};
for(let key in src) {
    dest[key] = src[key];
}
console.log(dest);                  //ouput :- {a: 10, b: 20, c: 30}
src.a++;
console.log(dest);                //ouput :- {a: 10, b: 20, c: 30}


//Object Cloning #2
let src = {
    a:10,
    b:20,
    c:30
};
let src2 = { value: 25};
let dest = Object.assign({}, src, src2); 

console.log(dest);                           // output :- {a: 10, b: 20, c: 30, value: 25}
src.a++;
console.log(dest);                             // output :- {a: 10, b: 20, c: 30, value: 25}
 
 
//Object Cloning #3
let src = {
    a: 10,
    b:20,
    c:30,
    d:99,
    e:942
};

let dest = {...src};
console.log(dest);                           // output :- {a: 10, b: 20, c: 30, d: 99, e: 942}

*/


 
/*
function run(){                                  //function declaration
    console.log('running');
}
run();
 
let stand = function walk() {                    //Named function assignment
    console.log('walking1');
};
stand();

let stand2 = function() {                     //Anonymous function assignment
    console.log('walking2');
};
stand2();

let x = 1;
x = 'a';
console.log(x);                       // output a;


function sum() {
    let total = 0;
    for(let value of arguments) 
        total = total + value;
    return total;
}
console.log(sum(1,2));
console.log(sum(1));
console.log(sum());
console.log(sum(1,2,3,4,5));

function sum(num, value, ...args) {             //Rest Operator    
    console.log(args);
}
sum(1,2,3,4,5,6);                             //output :- [3 , 4, 5,6]  and num = 1 and value = 2;

function interest(p,r=6,y=9){             //Default Parameters
    return p*r*y/100;
}
console.log(interest(10));

let person = {
    fName : 'Abhikant',
    lName : 'Kumar',
    get fullName() {                                                      // getter -> access properties
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {                                               // setter -> change or mutate properties
        if(typeof value !== String) {
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
console.log(person);
console.log(person.fullName);
try {
    person.fullName = true;
}
catch (e) {
    alert(e);
}
console.log(person.fullName);

{
    var a = 5;
}
console.log(a);

function walk() {
    var a = 5;
}
console.log(a);

for(var i = 0; i<10; i++) {            
}
console.log(i);                          //Var is global  so output is :- 10;
 
let a = [10,5,4,25];
a.sort(function(a,b) {                        //sorting 
    return a-b;
});
console.log(a);


let arr = [-1,-2,-3,-4];
let total = 0;
for(let value of arr) 
    total = total + value;

console.log(total);                                      //output :- -10;   

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue , 0);              //accumulator initially value is 0 

console.log("PRINTING TOTAL SUM:")
console.log(totalSum);                                 //output :- -10;


*/ 
 
 


 
 