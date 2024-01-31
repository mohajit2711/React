// // PROMISE
// const event = new Promise((resolve, reject) => {
//     var name = "Padre";
//     if(name == "Pedro") {
//         resolve(name)
//     } else {
//         reject("Name was not Pedro, name was: " + name);
//     }
// })

// // then() for resolved, catch() for rejected
// event.
//     then((name) => {
//         console.log(name);
//     }).catch((err) => {
//         console.log(err);
//     }).finally(() => {
//         console.log("PROMISE FINISHED")
//     })


const axios = require("axios"); 

const data = axios.get("https://cat-fact.herokuapp.com/facts");
data.then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Promise Resolved")
})
console.log(data);