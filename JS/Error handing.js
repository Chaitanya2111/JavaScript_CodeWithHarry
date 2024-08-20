
let a = "CR";
a = undefined;
if (a != undefined){
    throw new Error( 'this is not undefined')
}
else{
    console.log('this is defined');
}
   

try {
    // raut
    console.log("we are inside try block")
    // functionChaitanya();
} catch (error) {
    console,log(" are you okay? ") 
    // console.log(error); 
    // console.log(error.name); 
    console.log(error.nmessage); 
}finally{
    console.log("Finally we will run this");
}