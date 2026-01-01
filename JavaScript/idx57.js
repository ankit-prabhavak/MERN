// async wait and api fetch


// async function getData(){

//     setTimeout(()=>{
//         console.log("Fetching Data....")
//     },2000);

// }

// let output = getData();

// console.log(output);  // Promise { <pending> }  -- because it is async function

// await ka concept laya gaya promises ko hadle me rakhne ke liye
// await sirf async function ke andar hi use ho sakta hai

/// await - ?


// fetch API 
/*
async function getData(){

      // get request -- async operation
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    //   let response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      
      // parse json -- async operation
      let data = await response.json();


      // sync operation
      console.log("Data Fetched", data);  
}


getData();
*/

/*
scenario:

prepare url / api end point / sync operation

fetch data from api / network call --- > async operation
parse data / async operation

...we use await to make sure that we have the data before we operate on it.... 

display data / sync operation

*/

/*
kahani: for await keyword
-------------------------
Olymics Relay Race:
-------------------
1. Ek runner ko dusre runner ko baton pass karna hai
2. Jab tak pehla runner baton pass nahi karta, dusra runner race start nahi kar sakta
3. Jab tak dusra runner baton pass nahi karta, teesra runner race start nahi kar sakta
4. Jab tak teesra runner baton pass nahi karta, chotha runner race start nahi kar sakta
5. Jab tak chotha runner finish line cross nahi karta, race complete nahi hoti

Is kahani me:
- Runners represent asynchronous operations (like fetching data from an API).
- Baton passing represents the "await" keyword, ensuring that one operation completes before the next begins    
- The finish line represents the final completion of all operations.

*/


// fetch API with post request

const myHeader = new Headers();
myHeader.append("Content-Type", "application/json");

const myRequest = new Request('https://dummyjson.com/posts/add', {
    method: 'POST',
    body: JSON.stringify({ 
        title: 'I am in love with JavaScript!',
        userId: 5,
        /* other post data*/
    
    }),
    headers: myHeader
});

async function getData(){

    // get request -- async operation
    const response = await fetch("https://dummyjson.com/posts");
    // parse json -- async operation
    const data = await response.json();

    // sync operation
    console.log("Get Data Response", data);

}

async function postData(){
    // get request -- async operation
    const response = await fetch(myRequest);

    // parse json -- async operation
    const data = await response.json();

    // sync operation
    console.log("Post Data Response", data);  

}

async function processRequests() {
      await postData();
      await getData();
}

processRequests();



