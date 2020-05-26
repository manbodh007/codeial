const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.static('assets'));
//set view engine
app.set('view engine','ejs');
app.set('views','./views');
// setup script and style from sub pages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routers/index'));
 


app.listen(port,function(error){
    if(error){
        console.log(`error in running the server:${error}`);
        return;
    }else{
        console.log(`server is running on port:${port}`)
    }
})