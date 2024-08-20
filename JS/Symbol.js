// Symbols

const syml = Symbol("my identifier");
const syml2 = Symbol("my identifier");
// console.log( 'symbol is',  syml);
// console.log('Type of symbol is', typeof symbl);

console.log(syml===syml2);



const a = "this is";
const b = "this is";

console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);




const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');


myObj ={};
myObj[k1]= "sonu";
myObj[k2]= "monu";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);

console.log(myObj.k2) // !! ALERT !! can not do this to get monu because it is same as a myObj['k2 ]





//   Symbols are ignored in for in loop

for (key in myObj){
    console.log(key,myObj[key])
}


console.log 