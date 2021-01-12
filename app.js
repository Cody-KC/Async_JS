console.log(1);
console.log(2);


setTimeout(() =>{
    console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);

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

const getTodos = (callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", ()=>{
        //console.log(request, request.readyState);

    if(request.readyState === 4 && request.status === 200){
        callback(undefined, request.responseText);
    } else if (request.readyState === 4){
        callback("could not fetch data", undefined);
    }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

getTodos((err, data) =>{
    //console.log("callback fired!");
    console.log(err, data);
});