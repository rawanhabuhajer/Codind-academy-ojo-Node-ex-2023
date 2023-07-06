 1
console.log('hello world');

// 3
function timerInterval (){
    console.log('hello world');
}
setInterval(timerInterval, 2000);

// 4
function timeOut (){
    console.log('hello world');
}
setTimeout(timeOut, 2000);

// 5
console.warn("Warning:Something went wrong");

// TASK 2 MODULS 
// 1
const fs = require('fs');
 fs.readFile('../docs/output.txt' , 'utf-8' , (err , data)=>{
    console.log(err);
    console.log(data);
});

// 2
fs.writeFile('../docs/newFile.txt' , 'This is a text written by using write module', (err)=>{
    console.log(err);
});

3

const http = require('http');
const localServer = '127.0.0.1';
const port = 8080;

const server = http.createServer((req ,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('hello world');
    res.end();
});
server.listen(port , localServer , ()=>{

});

4

const http = require('http');
const fs = require('fs');

const localServer2 = '127.0.0.1';
const port2 = 8080;

const server2 = http.createServer((req , res)=>{
   const path = req.url;
   if(path === './file.html'){
    fs.readFile('./file.html' , 'utf-8', (err, data)=>{
        console.log(err);
        res.writeHead(200 , {'Content-type': 'text/plain'});
        res.end(data);
    })
   }
   else {
    res.writeHead(404 , {'Content-type': 'text/plain'});
        res.end('page didnt foun');
   }
});
server2.listen(port2 , localServer2 , ()=>{

});

5 
const path = require('path') ;
const path1 = '/path/to/file1';
const path2 = '/path/to/file2';

const joinPath = path.join(path1 , path2);
console.log(joinPath);

6
 const url = require('url');
 const link = 'http://www.example.com:8080/path?query=value#fragment';
 const component = url.parse(link, true);

 console.log(component.host);
 console.log(component.pathname);
 console.log(component.search);
 console.log(component.query);

7 
const os = require('os');
const homeDirectory = os.homedir();
console.log(homeDirectory);

8
const crypto = require('crypto');
const randomNumber = crypto.randomInt (0 , 5000);
console.log(randomNumber);

9
 const crypto = require('crypto');
 const hash =  'hello world';
  
 const hashCrypto = crypto.createHash('sha256' , hash).digest('hex');
 
 console.log(hashCrypto);

10

const querystring = require('querystring');
const q = querystring.parse('name=value&key=value2');
console.log(q);

11 
const {excute} = require('child_process');
const { error } = require('console');
const { stdout, stderr } = require('process');
excute('dir | find /c /v ""' ,( error , stdout , stderr) =>{
    console.log(err);
    console.log(`stdout: directory number = ${stdout}`)
})

//12
// const cluster = require('cluster');
// if (cluster.isWorker) {
//   console.log('multiple processes running');
// } 

//14 
// var dns = require('dns');
// var google = dns.lookup('www.google.com', (err, addresses, family) => {
//   console.log(addresses);
// });

//15
// const localServer = '127.0.0.1';
// const port = 8080;

// const net = require('net');
// const server = net.createServer((req , res)=>{

// });
// server.listen(port , localServer ,()=>{
// });

//16
// const net = require ('net');
// const client = new net.Socket();
// client.connect();
// client.write('hello');