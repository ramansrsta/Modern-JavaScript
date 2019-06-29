document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);

function getText()
{
    fetch('data.txt')
    .then(function(response)
    {
        return response.text();
    })
    .then(function(data)
    {
        document.getElementById('output').innerHTML = data;
    })
    .catch(err=>{document.getElementById('output').innerHTML = err;});
}

function getJson()
{
    fetch('posts.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(data)
    {
        console.log(data);
        let output = '';
        data.forEach(post => {
            output += 
            `
                <li> ${post.title}</li>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err=>{document.getElementById('output').innerHTML = err;});
}