// 1)Following is the example of for loop:
for(var i=1; i<=5; i++) {
    console.log(i);
    }



    //2) The for… in Loop:-
     // An object with some properties 
var person = {name: "Harry", language: "JavaScript", age: 20};
// Loop through all the properties in the object  
for(var i in person) {  
console.log( i + " = " + person[i]); 
}



//3) The forEach Loop:-
const  alpha = ['a', 'b', 'c'];
for (let i = 0; i < alpha.length; i++) {
console.log(alpha[i]);
}



// 4:-while loop:-
let i = 1, n = 100;
while (i <= n) {
    console.log(i);
    i += 1;
}



// 5:-do...while loop:-
let i = 1;
let n =100;
do {
    console.log(i);
    i++;
} while(i <= n);



// 6:-Breaking a Loop:-
for (let i = 0; i < 100; i++) {
    console.log(i);
       if (i == 90) {
           break;
       }
   }



//   7:- Skipping an Iteration:-
let i = 10;
for (let x = 1; x <=i; x++) {
    if (x == 5) {
        continue;
    }}



    console.log("We are at tutorial 9");
    // console.log(1)
    // console.log(2)
    // console.log(3)
    
    // General Loops: for, while, do-while
    // let a =34;
    // a +=1;
    // a++;
    // console.log(a);
    // for(let i=0; i<100;i++){
    //     console.log(i);
    // }
    
    // let j = 110;
    // while (j < 10) {
    //   console.log(j + 1);
    //   j += 1;
    // }
    
    // let k = 0;
    // do {
    //     if(k===5){
    //         k +=1;
    //         continue;
    //     }
    //   console.log(k + 1);
    //   k +=1;
    // } while (k < 10);
    
    let arr = [2,5,6,4,2,3];
    
    // for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     console.log(element)
    // }
    
    arr.forEach(function(element, index, array){
        console.log(element, index, array);
    });
    
    // let obj = {
    //     name: "Rohan Das",
    //     age: 78,
    //     type: "Dangerous Programmer",
    //     os: "Ubuntu"
    // }
    // for(let key in obj){
    //     console.log(`The ${key} of object is ${obj[key]}`)
    // }
    
    console.log('done');         
    

