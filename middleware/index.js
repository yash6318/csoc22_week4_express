var middlewareObj={};
//middleware object to check if logged in
middlewareObj.isLoggedIn=function(req,res,next){
	/*
    TODO: Write function to check if user is logged in.
    If user is logged in: Redirect to next page
    else, redirect to login page
    */
    if(req.isAuthenticated()){
        next();
    }
    else {
        res.redirect("/login");
    }
}

module.exports=middlewareObj;