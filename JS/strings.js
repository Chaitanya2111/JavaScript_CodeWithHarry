console.log("we are at Strrings Methods");
const name = 'Chaitanya';
const greeting = 'Good Night';
console.log(greeting + ' ' + name);



let html;
html = "<h1> this is heading </h1>" + "<p> this is my para </p>";

html = html.concat('this', 'str2');

// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());



// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;






// charAt(c): It returns the character at the “c” position within the string.
var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i



// concat(p1, p2): Combines one or more strings and returns the concatenated string. Remember that the original string is not modified.
var str1 = "JavaScript"
var str2 = str1.concat(" is", "awesome")
console.log(str2);
//Output: JavaScript is awesome



// indexOf(substr, [start_from]): This method Searches and returns the index number of the searched character within the string. If not found, it will return -1 . “Start_from” is an optional argument specifying the position within string to begin the search. Default is 0.

//indexOf(char/substring)
var str1 = "Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1



var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));
//output: 11

var text = "programming"
var mystr = text.slice(0, 4)
console.log(mystr)
//Output:- "prog"


var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces




//substring(from, [to])
var myString = 'javascript Programming';
myString = myString.substring(0, 10);
console.log(myString)
//output: javascript



//toLowerCase()
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript



//toUpperCase()
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT



var str = "Welcome to programming World!!";
var pos = str.search("programming");



var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
// Output: Banana



let simple = `This is an example of
                     Template literal`;


let firstName = 'Code With',
    lastName = 'Harry';
let greeting = `Welcome to ${firstName} ${lastName}`;
console.log(greeting);
                     //Welcome to Code With Harry