// console.log(1);
// console.log(2);


// setTimeout(() =>{
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);

//HTTP request
//http requests gets data from another server, we make these request to API(application programme interface) endpoints

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", ()=>{
//     //console.log(request, request.readyState);

// if(request.readyState === 4 && request.status === 200){
//     console.log(request.responseText);
// } else if (request.readyState === 4){
//     console.log("could not fetch the data");
// }
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

//call back function

// const getTodos = (resource) =>{
//     return new Promise((resolve, reject) =>{
//         const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", ()=>{
//         //console.log(request, request.readyState);
        
//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//     } else if (request.readyState === 4){
//         reject("error getting resource");
//     }
//     });

//     request.open('GET', resource);
//     request.send();
//     });
// };

//chaining promise
// getTodos("todos.json").then(data=>{
//     console.log("promise 1 resolved:", data);
//     return getTodos("cody.json");
// }).then(data=>{
//     console.log("promise 2 resolved:", data);
//     return getTodos("kaycee.json");
// }).catch (err=>{
//     console.log("promise rejected:", err);
// });
// //promise examples

// const getSomething = () =>{

//     return new Promise((resolve, reject) =>{
//         resolve("some data");
//         reject("some error");
//     });
// };

// getSomething().then((data)=>{
//     console.log(data);
// }, (err)=>{
//     console.log(err);
// });

//another simple of way of writing Promise
// getSomething().then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// }); 



// getTodos("todos/todos.json", (err, data) =>{
//     console.log(data);
//     getTodos("todos/cody.json", (err, data) =>{
//         console.log(data);
//         getTodos("todos/kaycee.json", (err, data) =>{
//             console.log(data);
//         });
//     });
// });

// console.log(1);
// console.log(2);
// getTodos((err, data) =>{
//     console.log("callback fired!");
//     if (err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);
//console.log 3 and 4 does not wait for the callback function to be fired, before it executes
//due to Async JS


//fetch API
//making HTTP request with fetch API
// fetch("todos.json").then((response) =>{
//     console.log("resolved", response);
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("rejected", err);
// });
//with fetch API it only rejects when there is a network error.

//ASYNC and await
const getTodos = async () =>{

    const response = await fetch ("cody.json");
    const data = await response.json();
    return data;
};


console.log(1);
console.log(2);

getTodos()
.then(data => console.log("resolved:", data));//this is non blocking code
// async is not supported by older browsers like IE8
console.log(3);
console.log(4);
