function logger(req,res,next){
    console.log('custom middleware for logging...');
    next();
};

module.exports=logger;