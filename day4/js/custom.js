//
// function users(name){
//     console.log('hello', name);
// }
//
// users('ram');

// let user = ['ram', 'sita', 'gita', 123];
//
// for (let x = 0; x < user.length; x++) {
//     console.log(user[x])
// }

// let num = user[user.length - 1];
// console.log(num);
// console.log(user.length)
// console.log(user[1])


// let users = [
//     ['ram', 'sita', 'gita', 'hari'],
//     ['gopal', 'sunita', 'sophia', 'kalpana'],
//     ['laxmi', 'rahul', 'abc', 'xyz']
// ]
//
// for (let x = 0; x < users.length; x++) {
//     for (let y = 0; y < users[x].length; y++) {
//         console.log(users[x][y]);
//     }
// }

// let user = ['ram', 'sita', 'gita', 'hari'];
// console.log(user)
// let nm = user.splice(1,2);
// console.log(nm)
// let nm =user.unshift('hari')
// console.log(nm)
// let index = user.indexOf('sita');
// console.log(index);


// console.log(user)
// user.forEach((name,index) => {
//     console.log(name,index);
// })
// user.forEach(function (name, index,array) {
//     console.log(index, name,array)
// })

// forEach() and Map()


// user.push('sophia')
//
// console.log(user)

// let names = new Array('ram','sita');
// console.log(names)
// console.log(typeof (names))


// let users = {
//     name: 'ram',
//     age: 23,
//     phone: 98787,
//     address: [
//         'Kathmandu'
//     ]
// }

// console.log(users.address[0]);
// console.log(users.name);
// console.log(users)
// console.log(typeof users)


let users = [
    {name: 'ram', age: 23, address: 'us', phone: 987987},
    {name: 'sita', age: 23, address: 'pokhara', phone: 987987},
    {name: 'hari', age: 23, address: 'kathmandu', phone: 987987},
]

console.log(typeof users);



let outPut = "";

users.forEach((user, index) => {
    outPut += "<tr>";
    outPut += `<td>${++index}</td>`;
    outPut += `<td>${user.name.toString()}</td>`;
    outPut += `<td>${user.age}</td>`;
    outPut += `<td>${user.address}</td>`;
    outPut += `<td>${user.phone}</td>`;
    outPut += `<td>
            <button>Edit</button>
            <button>Delete</button>
            </td>`;
    outPut += "</tr>";
});

document.getElementById('usersList').innerHTML = outPut;


// console.log(users[2].name)

// let users = new Set(['ram', 'sita', 'ram']);
// users.add('sophia')
// console.log(users)
// console.log(users.has('sophia'));