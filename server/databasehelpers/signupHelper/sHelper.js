const Promise = require("promise");
const bcrypt = require("bcrypt");
const conn = require("../dbConnection/connection");
const randomBytes = require("randombytes");
const saltRounds = 5;
  const {existUser,newUser} = require("../querries");


const signup = (name, email, pass) => {
  var signupFlag;
  return new Promise(async (resolve, reject) => {
    conn.query(existUser, [email], async (err, res, fields) => {
    if (err) {
        throw err;
      } else {
        if (res[0] == null) {
          const uId = randomBytes(16).toString("hex");
          const hPass = await bcrypt.hash(pass, saltRounds);
          conn.query(newUser,[uId, name, email, hPass, false], (err, res) => {
            if (err) {
              return err;
            } else {
              signupFlag = true;
              resolve(signupFlag);
            }
          });
        } else if (res[0].email == email) {
          signupFlag = false;
          resolve(signupFlag);
        }
      }
    });
  });
};



module.exports = signup;
