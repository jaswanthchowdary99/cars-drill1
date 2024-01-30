const inventory = require("../inventoryinfo");
const problem4 = require("../problem/problem4");
const problem5 = require("../problem/problem5");

const carYear = problem4(inventory);
const oldcar = problem5(inventory,carYear);
const oldcarlength = oldcar.length;
console.log(oldcar);
console.log(oldcarlength);