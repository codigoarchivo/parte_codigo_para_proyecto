// const arr = [1,2,3,4,5];
// const newarr = arr.filter(el => el % 2 === 0);
// console.log(newarr);

// const fruits = ['apple','banana','grapes','mango','orange'];
// const items = (arr, query) => {
//     return arr.filter(el => el.toLowerCase().indexOf(query) !== -1);
// }
// console.log(items(fruits, 'ap'));
// console.log(items(fruits, 'an'));

let localidad = [
    {
        "Id": 1,
        "Ciudad": "New York",
        "Tipo": "Casa",
        "Precio": 300
    },
    {
        "Id": 2,
        "Ciudad": "Orlando",
        "Tipo": "Casa de Campo",
        "Precio": 700
    },
    {
        "Id": 3,
        "Ciudad": "Los Angeles",
        "Tipo": "Casa de Campo",
        "Precio": 360
    },
    {
        "Id": 4,
        "Ciudad": "Los Angeles",
        "Tipo": "Casa de Campo",
        "Precio": 160
    },
    {
        "Id": 5,
        "Ciudad": "Orlando",
        "Tipo": "Casa",
        "Precio": 459
    }
]

const filtrar = localidad.filter(local => {
    // return local.Ciudad.toLowerCase() === 'new york'
    // return local.Ciudad.toLowerCase() === 'orlando'
    // return local.Id > 3
    return local.Precio > 200 && local.Precio < 400
})
console.log(filtrar);