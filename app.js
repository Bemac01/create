//Javascript codes 

// let text = "ASAP fortend";

// for (let i = 0; i <= text.length; i++) {
//     if (i[8] - 1 == true){
//         console.log(text[i]);
//     }
// }

// filtering ages with array 
let age = [16,17,14,15,19];

let filteredArray = age.filter(element => {
    return element >= 18
})

console.log(filteredArray)
