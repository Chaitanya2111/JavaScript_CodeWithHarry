let regular = /  Bappa/;
let str = " Ganpati Bappa Morya";

let result = regular.exec(str);
console.log(result);

if(regular.test(str)){
    console.log(`${str} Pudhchya Varshi lavkar Ya ${regular.source}`);
}
else{
    console.log(`${str} Mangal Murti Morya ${regular.source}`);

}




// Lets look into some metacharacter symbols


 let reg = /^Mangal/  // ^ means expression will match if string starts with 
  let str1 = "Mangal Murti Morya";

  let result1 = regular.exec(str1);
console.log(result1);

if(reg.test(str1)){
    console.log(`${str1} The string matches the expression ${reg.source}`);
}
else{
    console.log(`${str1} The string does matches the expression ${reg.source}`);

}







let reg1 = /Mangal$/  // $ at the end of the string means 'string ends with'
reg1 = /Manga.l/   // marches any one character
reg1 = /Manga*l/   // marches any 0 0r more character
let str2 = "Mangal Murti Morya";

  let result2 = regular.exec(str2);
console.log(result2);

if(reg.test(str2)){
    console.log(`${str2} The string matches the expression ${reg1.source}`);
}
else{
    console.log(`${str2} The string does matches the expression ${reg1.source}`);

}
