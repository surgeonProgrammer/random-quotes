let point = document.querySelector('.point');
let heading = document.querySelector('.heading');
let next = document.querySelector('.next');

const points = [{
  point : 'JavaScript includes primitive and non-primitive data types. The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol. The non-primitive data type includes the object.',
  heading : 'JavaScript Data Types'
},{ 
  point : 'Operators in JavaScript are used to perform operations on variables and values. These include arithmetic operators (+, -, *, /), comparison operators (==, ===, !=, !==), logical operators (&&, ||, !), and more.',
  heading : 'JavaScript Operators'

},{ 
  point : 'Control structures such as if, else if, else, switch, and ternary operators are used to control the flow of execution based on different conditions in JavaScript programs',
  heading : 'Control Structures'

},{ 
  point : 'Loops like for, while, and do...while enable repeated execution of a block of code as long as a specified condition is true, facilitating tasks such as iterating over arrays or objects',
  heading : 'Loops'

},{ 
  point : 'Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They can be defined using function declarations or expressions, and can be invoked to execute the code within them',
  heading : 'Functions'

},{ 
  point : 'In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics',
  heading : 'Objects'

},{ 
  point : 'An array in JavaScript is a type of global object used to store data. Arrays can store multiple values in a single variable, which can condense and organize our code and can be accessed using indices',
  heading : 'Arrays'

},{ 
  point : 'JavaScript can respond to user interactions and other events through event handling. Events such as clicks, key presses, and form submissions can trigger functions, making web pages interactive',
  heading : 'Events and event handling'

},{ 
  point : 'The Document Object Model (DOM) represents the structure of a web page. JavaScript can manipulate the DOM to dynamically change the content, structure, and style of a web page by accessing and modifying HTML elements',
  heading : 'DOM Manipulation'

}
]

next.addEventListener('click', function(){
   let random = Math.floor(Math.random() * points.length);

   point.innerText = points[random]. point;
   heading.innerText = points[random]. heading;
})