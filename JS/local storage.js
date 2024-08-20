console.log('This is tut 20');
let impArray = ['adrak', 'pyaz', 'bhindi'];

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));






/*   

1.Creating Entries:-
let key = 'Entry_1';
localStorage.setItem(key, 'Value');



2.Reading Entries:- 
let myItem = localStorage.getItem(key);



3.Updating Entries:- 
localStorage.setItem(key, 'New Value');



4.Deleting Entries:-
localStorage.removeItem(key);



5.Clearing Everything:- 
localStorage.clear();


6.Storing JSON Objects:- 
// Create item:
let myObj = { name: 'Harry', language: 'JavaScript' };
localStorage.setItem(key, JSON.stringify(myObj));
// Read item:
let item = JSON.parse(localStorage.getItem(key));

*/