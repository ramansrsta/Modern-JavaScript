// // // // ////Window functions 

// // // // // //Alert 
// // // // // //window.alert('Hellow World');

// // // // // //Prompt
// // // // // // const input = prompt();
// // // // // // alert(input);

// // // // // // //confirm
// // // // // // if(confirm('Are you sure'))
// // // // // // {
// // // // // //     console.log('yes');

// // // // // // }
// // // // // // else
// // // // // // {
// // // // // //     console.log('no');
// // // // // // }

// // // // // let val;

// // // // // //outer height and widht
// // // // // val = window.outerHeight;
// // // // // val = window.outerWidth;

// // // // // //inner height and widht
// // // // // val = window.innerHeight;
// // // // // val = window.innerWidth;

// // // // // //scroll points

// // // // // val = window.scrollY;
// // // // // val = window.scrollX;

// // // // // //Location Object
// // // // // val = window.location;
// // // // // val = window.location.href;
// // // // // val = window.location.search; //gets data from URL for get and post requests

// // // // // //property of location can be used for different process lik
// // // // // window.location.href = "https://google.com";

// // // // // //for reloading
// // // // // window.location.reload();

// // // // // //for getting history
// // // // // window.history.go(-1); //lets us go to the previous website opened and on changing the value of number we can go to another and another page

// // // // // window.navigator; //



// // // // // console.log(val);


// // // // let val;
// // // // val = document;
// // // // val = document.all;
// // // // val = document.all[1];
// // // // val = document.all.length;
// // // // val = document.body;
// // // // val = document.doctype;
// // // // val = document.domain;


// // // // val = document.forms;
// // // // val = document.forms[0];
// // // // val = document.forms[0].id;
// // // // val = document.forms[0].method;
// // // // val = document.forms[0].action;

// // // // val = document.links;
// // // // val = document.links[0];
// // // // val = document.links[0].className;
// // // // val = document.links[0].classList;


// // // // console.log(val);


// // // //document.getElementById()

// // // console.log(document.getElementById('task-title'));

// // // //get things from the element
// // // console.log(document.getElementById('task-title').id);4


// // // let variable = document.getElementById('task-title');

// // // //change styling
// // // document.getElementById('task-title').style.background = 'cyan';
// // // document.getElementById('task-title').style.padding = '5px';

// // // //changing content
// // // document.getElementById('task-title').textContent = 'Sigmund';

// // // document.getElementById('task-title').innerText = 'Fraud';

// // // //variables can be used for effectiveness
// // // variable.innerHTML = '<span style="color:red">Task List</span>';


// // // //query selector
// // // document.querySelector('#task-title'); //selecting by id

// // // document.querySelector('.card-title'); //selecting by class
// // // document.querySelector('h5'); //selecting by element


// // // document.querySelector('li').style.color = 'red';


// // // document.querySelector('li:last-child').style.color = 'red';

// // // document.querySelector('li:nth-child(3)').style.color = 'green';
// // // document.querySelector('li:nth-child(4)').innerText = 'World';


// // //DOM Multiple Selectors
// // //document.getElementsByClassName;

// // let items = document.getElementsByClassName('collection-item');
// // console.log(items);  
// // console.log(items[0]);//can be treated as array

// // items[0].style.color = "green";


// // document.querySelector('.clear-tasks').addEventListener('click',function(e)
// // {
// //     console.log('Hellow World');
// //   //e.preventDefault(); //if prevent default is kept that the href will be disfunctional
// // });


// document.querySelector('.clear-tasks').addEventListener('click',onclick);

// function onclick(e)
// {
//     // console.log('Clicked');
//     let val;
//     val = e;

//     //event target element
//     val = e.target;
//     val = e.target.className;
//     val = e.target.classList;

//     e.target.innerText = 'Hello';

//     //event type
//     val = e.type;

//     //Time stamp
//     val = e.timeStamp;

//     console.log(val);
// }

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
// clearBtn.addEventListener('click',runEvent);

//Double Click
// clearBtn.addEventListener('dblclick',runEvent);

//mouseup
// clearBtn.addEventListener('mouseup',runEvent);


//mousedown
// clearBtn.addEventListener('mousedown',runEvent);

//mouseenter
// card.addEventListener('mouseenter',runEvent);

//mouseleave
// card.addEventListener('mouseleave',runEvent);

//mouseover
// card.addEventListener('mouseover',runEvent);

//mouseout
//card.addEventListener('mouseout',runEvent);

// //mousemove
// card.addEventListener('mousemove',runEvent);


// //Event handler
// function runEvent(e)
// {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `Mouse X = ${e.offsetX}  Mouse Y = ${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// }

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
taskInput.value = ' ';

// form.addEventListener('submit',runEvent);

//keydown
// taskInput.addEventListener('keydown',runEvent);

//keyup
// taskInput.addEventListener('keyup',runEvent);



//keypress
// taskInput.addEventListener('keypress',runEvent);



//focus
// taskInput.addEventListener('focus',runEvent);


//blur
// taskInput.addEventListener('blur',runEvent);


//cut
// taskInput.addEventListener('cut',runEvent);


//paste
// taskInput.addEventListener('paste',runEvent);


//Input
// taskInput.addEventListener('input',runEvent);





// function runEvent(e)
// {
//     console.log(`EVENT TYPE: ${e.type}`);
//     console.log(e.target.value);
//     // console.log(taskInput.value);

//     // taskInput.value = ' ';
//     // e.preventDefault();


// }




