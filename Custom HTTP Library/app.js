const http = new easyHTTP;
//Test for get request
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err,post)
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(post);
//     }
// });

//test for post
const data= {
    title: 'Custom Post',
    body: 'This is a post'
}

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post)
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(post);
//     }
// });


//test for put
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post)
// {
//     if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log(post);
//         } 
// });


//Test for delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err,post)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(post);
    }
});