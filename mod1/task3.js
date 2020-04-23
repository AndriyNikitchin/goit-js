"use sctrict"

const var1 = 1;
const var2 = 0;
const var3 = true;

console.log(var1 > var2);
console.log(var1 == var3);
console.log(var1 === var3);
console.log(var1 != var3);
console.log(var2 != var3);
console.log(var1 > var2 == var3);
console.log(var1 > var2 > var3);

let val;
console.log(val);
console.log(typeof val);

val = "River"
console.log(isNaN(val));
console.log(typeof val);

val = "Mountin"
console.log(isNaN(val));
console.log(typeof val);

val = 232;
console.log(isNaN(val));
console.log(typeof val);

val = true;
console.log(isNaN(val));
console.log(typeof val);

val = null
console.log(isNaN(val));
console.log(typeof val);

const alfa = 0.2;
const beta = 0.4;
let result = (alfa * 10 + beta * 10) / 10;
console.log(result);

let tetra = "12px";
console.log(tetra);

tetra = 12 + "px"; 
console.log(tetra);

tetra = "13.34em";
console.log(tetra);

tetra = 13.34 + "em";
console.log(tetra);

console.log(Math.min(2,34,99,3,22,37,733,18));
console.log(Math.min(2,34,99,3,22,37,733,18));

let random;
random = (Math.random() * (19 - 3) + 3);
console.log(random);
console.log("ceil:", Math.ceil(random));
console.log("floor:",Math.floor(random));
console.log("round:",Math.round(random));
console.log("toFixed(2):",random.toFixed(2));
console.log("toFixed(1):",random.toFixed(1));
console.log("toFixed(0):",random.toFixed(0));