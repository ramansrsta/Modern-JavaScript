const http = new EasyHttp;

//GET USERS
// http.get('https://jsonplaceholder.typicode.com/posts')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//POST REQUEST
// const data = {
//     name : 'John Doe',
//     username : 'jhn',
//     email : 'john@gmail.com'
// }
// http.post('https://jsonplaceholder.typicode.com/posts',data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Put REQUEST
// const data = {
//     name : 'John Doe',
//     username : 'jhn',
//     email : 'john@gmail.com'
// }
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//delete users
http.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(data => console.log(data))
    .catch(err => console.log(err));

