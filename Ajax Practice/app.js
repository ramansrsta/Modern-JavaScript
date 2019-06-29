/* Working with text data*/

document.getElementById('button').addEventListener('click',loadData);

function loadData()
{
    //creating a xhr object
    const xhr = new XMLHttpRequest();

    //opening the file
    xhr.open('GET','data.txt',true);

    //on load
    xhr.onload = function()
    {
        if(this.status === 200)
        {
            console.log(this.responseText);
        }
    };
    xhr.send();
}


/*Working with JSON data*/
document.getElementById('button1').addEventListener('click',getCustomer);
document.getElementById('button2').addEventListener('click',getCustomers);
document.getElementById('button3').addEventListener('click',getData);

function getCustomer()
{
    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.json',true);

    xhr.onload = function()
    {
        if(this.status === 200)
        {
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li> Name: ${customer.name} </li>
                <li> Age: ${customer.age} </li>
                <li> Address: ${customer.address} </li>
            </ul>`;

            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

function getCustomers()
{
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customers.json',true);

    xhr.onload = function()
    {
        if(this.status === 200)
        {
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach((customer) => {
                output += `
                <ul>
                    <li> Name: ${customer.name} </li>
                    <li> Age: ${customer.age} </li>
                    <li> Address: ${customer.address} </li>
                </ul>`;
            });
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}

function getData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','http://api.icndb.com/jokes/random/5',true);

    xhr.onload = function()
    {
        if(this.status === 200)
        {
            const jokes = JSON.parse(this.responseText);
            let output = '';
         
            if(jokes.type === 'success')
            {
                jokes.value.forEach(jokey => {
                    output += `
                    <ul>
                        <li> Name: ${jokey.joke} </li>
                    </ul>`;
                });
            }
            else
            {
                output += `
                <ul>
                    <li> Error </li>
                </ul>`;
            }
          
            document.getElementById('external').innerHTML = output;
        }
    }
    xhr.send();
}