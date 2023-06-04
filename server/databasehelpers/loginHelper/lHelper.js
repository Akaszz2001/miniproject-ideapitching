const Promise = require("promise");

const conn = require("../dbConnection/connection");
const [checkUser] = require("../querries");
const bcrypt = require("bcrypt");

function Login(email, pwd) {
  return new Promise((resolve, reject) => {
    conn.query(checkUser, [email], (err, result, fields) => {
      if (result[0] == null) {
      resolve([email])
      } else {
        const hashPwd = result[0].password;
        bcrypt.compare(pwd, hashPwd, (err, res) => {
          if (err) {
            throw err;
          } else {
            console.log("user data server side:"+result[0].email);
            resolve([result[0].name,res])
          }
        });
      }

     
      
    });
  });
}

module.exports = Login;

// conn.query(checkUser, [email],(err, res, fields) =>{
//   if (res[0] == null) {
//     console.log("email not found");
//   } else {
//     const hashPwd = res[0].password;
//   bcrypt.compare(pwd, hashPwd,(err, res)=>{
//       if (err) {
//        throw err
//     }
//       else {
//       console.log(res);

//       }
//      return res
//     });

//   }

// });
