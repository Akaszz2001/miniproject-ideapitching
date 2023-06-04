const existUser="select * from signup where email=?"
const newUser="INSERT INTO signup(id,name,email,password,isAdmin) VALUES(?,?,?,?,?)"
const checkUser="select * from signup where email=?"
module.exports=[existUser,newUser,checkUser]