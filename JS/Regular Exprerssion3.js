
// Character Sets 

const regex = /Ch[a-z]tanya/;
const str = "Chaitanya Bhai";



let result = regex.exec(str);
console.log(result);

if(regex.test(str)){
    console.log( ` The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log( ` The string ${str}  Does not matches the expression ${regex.source}`);

}