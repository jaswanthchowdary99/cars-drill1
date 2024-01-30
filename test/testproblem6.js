const inventory = require("../inventoryinfo");
const problem6 = require("../problem/problem6");

const resultBMWAndAudi = problem6(inventory);
console.log(JSON.stringify(resultBMWAndAudi));