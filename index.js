const express = require('express');
const app = express();
const port = 8000;


app.listen(port,function(error){
    if(error){
        console.log(`error in running the server:${error}`);
        return;
    }else{
        console.log(`server is running on port:${port}`)
    }
})