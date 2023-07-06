const fs = require('fs');
const readline = require('readline');


if (fs.existsSync('../docs/output.txt')){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question('Do you want to overWrite?', (answer)=>{

  if (answer ==='yes'){
      fs.writeFile('../docs/output.txt' , 'hello rawan' , err =>{
        console.log(err);
      });
  }
  else {
   console.log('the operation was cancelled');
  
  }
      
})}
else {
  console.log('the file already exist');
}



fs.appendFile('../docs/output.txt' , '\n good morning' , err =>{
  console.log(err);
})
fs.unlink('../docs/input.txt' , err=>{
  console.log(err);
})
