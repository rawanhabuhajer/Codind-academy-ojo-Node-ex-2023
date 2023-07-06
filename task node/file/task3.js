//1
const fs = require('fs');
const http = require('http');
const server = http.createServer((req , res)=>{
    const path = req.url
    if (path === '/users'){
        if (req.method === 'Get'){
            fs.readFile('./users.json','utf-8', (err , data) =>{
                console.log(err);
                res.writeHead(200 , {'Content-type': 'application/json'})
                res.end(data)
            }
        )
        }
        else if (req.method === 'Post')
        {
       
        }
    res.writeHead(200 , {'Content-type' : 'text/plain'});
    res.end('Welcome to the Users endpoint')
    
    }
    else if (path === '/treniee'){
        
        fs.readFile( './treniee.html' , (err , data)=>{
            console.log(err);
            res.writeHead(200 , {'Content-Type':'text/html'})
            res.end(data)
        })
    }

    else{
       
        res.writeHead(404 , {'Content-type': 'text/plain'})
        res.end('the page not found')
    }

});
server.listen( 8080 , '127.0.0.1', ()=>{

})


