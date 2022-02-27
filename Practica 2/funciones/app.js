// function greet() {
//   console.log(`Hello`);
// }
const greet = () => {
  console.log(`Hello`);
};
greet(); //invoke

//

// functions as parameters
// function logGreeting(fn) {
//   fn();
// }
// si ocupamos 2 argumentos usamos el ()
// const logGreeting = (fn) => {
//   fn();
// };
const logGreeting = (fn) => {
  fn();
};

logGreeting(greet);
// estamos pasando la función greet como
// parámetro e invocandola con el nombre del argumento fn

//

// // function expression
// let greetMe = function () {
//   console.log(`Hello from the function expression`);
// };
const greetMe = () => console.log(`Hello from the function expression`);
greetMe();

// logGreeting(greetMe);
// // functions are first class, pass it as a parameter
