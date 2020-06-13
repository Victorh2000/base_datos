const User = require('../models').User;

module.exports = function(req,res,next){
  //res.json(req.session.userId);
  console.log(req.session.userId);
  if(!req.session.userId) return next();
  
  User.findByPk(req.session.userId).then(user=>{
    if (user){
      req.user = user;
      //res.json(req.user)
      

      next();
    }
  })
}