const express = require("express");
const Login = require("../databasehelpers/loginHelper/lHelper");


const router = express.Router();

router.post("/", (req, res, next) => {
  const uEmail = req.body.email;
  const uPwd = req.body.password;
  Login(uEmail, uPwd).then((result) => {
    if (result[1] == false) {
      return res.json({ Login: false });
    } else if (result[1] == true) {
      let userdata = result[0];
        console.log("login side "+userdata.isAdmin);
      req.session.user = userdata.name;
      req.session.userId = userdata.id;
      req.session.Admin=userdata.isAdmin;
      req.session.loggedIn = true;
        if(req.session.Admin===1){
          var sts=true
        }else{
            sts=false
        }
      req.session.save();
      return res.json({ Login: true, username: req.session.user,adminStatus:sts});
    } else if (result[0] == uEmail) {
      return res.json({ Message: "email not exists" });
    }
  });
});

module.exports = router;
