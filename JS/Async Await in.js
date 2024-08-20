async function sonu() {
    // console.log("inside sonu function")
    
  const response = await fetch ('https://api.github.com/users') ; 
    // console.log("before response")
    const users = await response.json();
    // console.log('users resolved')
    return users; 
    // return "sonu"; 
}
// console.log("before calling sonu")
let a = sonu();
// console.log("after calling sonu")
console.log(a);
a.then(users => console.log(users))
// console.log("last line of js file") 