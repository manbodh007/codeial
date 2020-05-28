const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wep_app_dev');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in db connection'));
db.once('open',function(){
    console.log("database is connected successfuly");
})