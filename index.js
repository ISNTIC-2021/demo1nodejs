const myExpress = require('express');
const app = myExpress();


app.get('/',function(req,res){
    res.send('Hello from express')
});

app.listen(3000,function(){
    console.log('Server is running');
});