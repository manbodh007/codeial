const express = require('express');
const app = express();
const port = 8000;
app.use('/',require('./routers/index'));
//set view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(error){
    if(error){
        console.log(`error in running the server:${error}`);
        return;
    }else{
        console.log(`server is running on port:${port}`)
    }
})