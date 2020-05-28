const Users = require('../models/user')

module.exports.profile = function(req,res){
    return res.end('this is profile page');
}
module.exports.signIn = function(req,res){
    return res.render('sign_in',{
        title:"sign In Page"
    })
}
module.exports.signUp = function(req,res){
    return res.render('sign_up',{
        title:"sign Up Page"
    })
}
module.exports.create = function(req,res){
    console.log(req.body);
    if(req.body.password!= req.body.conform_password)
    return res.redirect('back');

    Users.findOne({email:req.body.email},function(error,user){
        if(error){
            console.log('error');
            return;
        }
        if(!user){
            Users.create(req.body,function(err,userdata){
                if(err)
                {
                    console.log("err");
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('/users/sign-up');
        }
    })
    
}