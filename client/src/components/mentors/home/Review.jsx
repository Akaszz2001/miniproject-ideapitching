import React ,{useState,useEffect}from 'react'
import Mentornavbar from '../../Navbar/Mentornavbar'
import { useLocation ,useNavigate} from 'react-router-dom';
import Axios from 'axios'
function Review() {
    const [review,setReview]=useState('')
    const location=useLocation()
    const datas=location.state?.data
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:5000").then((res) => {
        if (res.data.admin === true) {
          console.log("home page user: " + res.data.userData);
          setUser(res.data.userData);
        } else if (res.data.admin === null) {
          console.log("no user");
          navigate("/login");
        }
      });
    });
 console.log(datas);
        const upload=()=>{
            
          
          Axios.post("http://localhost:5000/mentor/review",{
                    menReview:review,
                    studId:datas,
              }).then(res=>{
                if(res.data.Message===true)
                alert("Review addedd sucucessfully")
            else{
                alert("not added review")
            }
              }).catch(err=>{
                alert("some error ocured in adding")
              })
        }
     
  return (
    <div>
<Mentornavbar data={user}/>
<div>
   
    <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-2/3 h-1/4 p-4 bg-white rounded-lg shadow-md relative">
      <textarea class="w-full h-full resize-none border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Type your text here..."
          onChange={(e)=>{
            setReview(e.target.value)
        }} 
      ></textarea>
      <button class="absolute bottom-0 right-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={upload}
      >
        <i class="fas fa-paper-plane"></i> 
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Review