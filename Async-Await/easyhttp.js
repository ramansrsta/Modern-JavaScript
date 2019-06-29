/*
*@author: Raman Shrestha
*@Version : 2.0
*@date: 29 June 2019
*
*/

class EasyHttp
{
    //Make http get request
    async get(url)
    {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make Post Request
    async post(url,data)
    {
            const response = await fetch(url, {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
        const resData = await response.json();
        return resData;      
    }

    async put(url,data)
    {
        
            const re = await fetch(url, {
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })

            const reData = await re.json();
            return reData;
            
    }

    async delete(url)
    {
        
           const res = await fetch(url, {
                method : 'DELETE',
                headers : {
                    'content-type' : 'application/json'
                }
            }) 

            const huData = await 'User Deleted';
            return huData;
    } 
}