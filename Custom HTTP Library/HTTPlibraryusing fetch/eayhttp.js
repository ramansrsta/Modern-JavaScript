/*
*@author: Raman Shrestha
*@Version : 2.0
*@date: 29 June 2019
*
*/

class EasyHttp
{
    //Make http get request
    get(url)
    {
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });      
    }

    //Make Post Request
    post(url,data)
    {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });      
    }

    put(url,data)
    {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });      
    }

    delete(url)
    {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method : 'DELETE',
                headers : {
                    'content-type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => resolve('User Deleted'))
            .catch(err => reject(err));
        });     
    } 
}