const Users = require('../models/user')

module.exports.profile = function(req,res){
   if(req.cookies.user_id){
       Users.findById(req.cookies.user_id,function(error,user){
           if(user){
               return res.render('profile');
           }else{
               return res.redirect('/sign-in');
           }
       })
   }else
   return res.redirect('/users/sign-in');
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
                return res.redirect('/sign-in');
            })
        }else{
            return res.redirect('/sign-up');
        }
    })
    
}
module.exports.createSession = function(req,res){
    
    //find user
    Users.findOne({email:req.body.email},function(error,user){
        if(error){
            console.log('error in user found');
            return;
        }
        //if user is found
        if(user){
         //check password is maching or not
         if(user.password==req.body.password){
             res.cookie('user_id',user.id);
             return res.redirect('/users/profile');
         }else{
             return res.redirect('/users/sign-in');
         }
        }else{
            return res.redirect('/users/sign-up');
        }
    })
}