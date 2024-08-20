let mybtn = document.getElementById("mybtn");


 let content = document.getElementById("content");

//  function getData(){
//      console.log("Started getData")
//      url = "sonu.txt";
//      fetch(url).then((responce)=>{
//      console.log("inside first then")

//          return responce.text();
//      }).then((data)=>{
//      console.log("inside second then")

//          console.log(data)
//      })
     
//  }


function getData(){
    // console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((responce)=>{
    // console.log("inside first then")

        return responce.json();
    }).then((data)=>{
    // console.log("inside second then")

        console.log(data)
    })
    
}




function postData(){

    
    url = "http://dummy.restapiexample.com/api/v1/create";
     data = '{"name":"vhddsh354","salary":"123","age":"23"}'
    params ={
        method : 'post',
        headers : {
           'Content-Type ': 'application/json' 
        },
        body : data   
    }
    fetch(url ,params).then((responce=> responce.json())
    .then(data=>console.log(data )
   

        
    
    


//  console.log("before running getData")
//  getData();
//  console.log("After running getData")

postData()





