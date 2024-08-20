 let regular = / Chaitanya/;  //This is regular expression in JS.

console.log(regular);
console.log(regular.source);



// Function to match expression


let reg = /sonu/g  // g means global index they search same word in string 
 reg = /sonu/i //i means case insensitive
let a = "hii i am engineer and my name is soNu  and sonu "
let result = reg.exec(a); //  1.exec() - This function will return an array for match or null for no match 
console.log(result); 
console.log(result.input); 
console.log(result.index); 

// result = reg.exec(a);
// console.log(result);


// result = reg.exec(a);
// console.log(result);

   

// 2. test()  :- returns true or false

let re = /engineer/;
let b = "hii i am engineer and my name is soNu  and sonu "
 
let result1 = re.test(b);
console.log(result1);




//  3 match() :- it will return an array of reults or null
// let result2 = reg1.match(c)  ...this is wrong 
let reg2 = /name/
let c = "hii i am engineer and my name is soNu  and sonu "

let result2 = c.match(reg2);
console.log(result2);



// 4. search()  :- returns index of first match else -1.


let reg3 = /name/
let d = "hii i am engineer and my name is soNu  and sonu "

let result3 = d.search(reg2);
console.log(result3);



// 5. replace() :-  returns new replaced string with all the replacement 


let reg4 = /sonu/g
let e = "hii i am engineer and my name is sonu  and sonu "

let result4 = e.replace(reg4 ,'CHAITANYA');
console.log(result4);
