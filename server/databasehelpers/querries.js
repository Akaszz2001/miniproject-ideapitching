const existUser="select * from signup where email=?"
const newUser="INSERT INTO signup(id,name,email,password,isAdmin) VALUES(?,?,?,?,?)"
const checkUser="select * from signup where email=?"
const userData='select * from signup where id=?'
const uploadFile='INSERT INTO studentIdeas(studentName,studentId,department,topicTitle,topicDescription,id) VALUES(?,?,?,?,?,?)'
const requests='select * from studentIdeas'
const addReview='UPDATE studentIdeas SET Reviews=? WHERE orderNO=?'
const bringIdeas="select * from studentIdeas where id=?"
const deleteData='delete from studentIdeas where orderNO=?'
const idea='select * from studentideas where orderNO=?'
const updateIdeas='UPDATE studentideas SET studentName=?,studentId=?,department=?,topicTitle=?,topicDescription=? WHERE orderNO=?'
module.exports={existUser,newUser,checkUser,userData,uploadFile,requests,addReview,bringIdeas,deleteData,idea,updateIdeas}