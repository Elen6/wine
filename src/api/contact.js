export const sendMessege = (data) =>  {
   const response=  fetch("http://localhost:5000/contact", {
        method: 'POST', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
        
    })
    .then(res=>res.json()).then(res=>console.log(res))
}