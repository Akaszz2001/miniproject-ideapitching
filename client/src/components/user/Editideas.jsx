import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { useLocation } from "react-router-dom";

function Editideas() {
    const [sName, setsName] = useState("");
    const [studId, setstudId] = useState("");
    const [dept, setDept] = useState("");
    const [topic,setTopic]=useState('')
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  const receivedData = location.state;
console.log(receivedData.name);

    const uploadData = () => {
        console.log(dept);
      Axios.post("http://localhost:5000/ideaSubmission", {
        stdName: sName,
        stdId: studId,
        stdDept:dept,
        topicHeader: topic,
        topicDesc: desc,
      })
        .then((result) => {
          if(result.data.Error){
            alert("Error in form submission ")
          }else if(result.data.Message){
            alert("Form submitted successfully")
            navigate("/");
          }
         
        })
        .catch((err) => {});
    };
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Idea submission Form</h1>
        <form className="bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-bold">
              Full Name:
            </label>
            <input
              type="text"
              value={receivedData.name}
              onChange={(e) => {
                setsName(e.target.value);
              }}
              id="fullName"
              name="fullName"
              required
              className="w-full border border-gray-300 rounded-md p-2"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="studentId" className="block font-bold">
              Student ID:
            </label>

            <input
              type="text"
              id="studentId"
              name="studentId"
              value={receivedData.studId}
              onChange={(e) => {
                setstudId(e.target.value);
              }}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="department" className="block font-bold">
              Department:
            </label>
            <select
              id="department"
              name="department"
              required
              value={receivedData.dept}
              onChange={(e)=>{
                setDept(e.target.value)
              }}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Department</option>
              <option  value="IT">IT</option>
              <option value="CS">CS</option>
              <option value="CS">EC</option>
              <option value="CS">ME</option>
            </select>
          </div>


          <div className="mb-4">
            <label htmlFor="topic" className="block font-bold">
                Title of topic
            </label>

            <input
              type="text"
              id="topic"
              value={receivedData.title}
              name="topic"
              onChange={(e) => {
                  setTopic(e.target.value);
              }}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            ></input>
          </div>


          <div className="mb-4">
            <label htmlFor="message" className="block font-bold">
              Describe your Idea :
            </label>
            <textarea
              id="message"
              name="message"
              value={receivedData.desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
               required
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>

          <button type="submit" onClick={uploadData} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default Editideas