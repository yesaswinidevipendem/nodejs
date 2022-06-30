var nd=require("needle")
var url = 'https://jsonplaceholder.typicode.com/todos/1'
nd.get(url,(error,response, body)=>{
    if(error)
        console.log(error)
    console.log(responce.statusCode)
    console.log(body)
})

