//modules

const names = require('./firstModule-4');
const sayHi = require('./2module-5');

// console.log(names);

sayHi("vamsi");
sayHi(names.john);
sayHi(names.peter);

// require('./mindGrenade')