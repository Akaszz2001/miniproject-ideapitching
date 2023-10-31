import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useLocation } from "react-router-dom";

function Editideas() {
  const [sName, setsName] = useState("");
  const [studId, setstudId] = useState("");
  const [dept, setDept] = useState("");
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const [user, setUser] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000").then((res) => {
      if (res.data.admin === false) {
        console.log("home page user: " + res.data.userData);
        setUser(res.data.userData);
      } else if (res.data.admin === null) {
        console.log("no user");
        navigate("/login");
      }
    });
    Axios.get(`http://localhost:5000/ideaSubmission/editIdeas/${state}`).then(
      (res) => {
        setsName(res.data.studentName);
        setstudId(res.data.studentId);
        setDept(res.data.department);
        setTopic(res.data.topicTitle);
        setDesc(res.data.topicDescription);
      }
    );
  }, []);

  const uploadData = () => {
    Axios.put(`http://localhost:5000/ideaSubmission/editingIdeas/${state}`, {
      stdName: sName,
      stdId: studId,
      stdDept: dept,
      topicHeader: topic,
      topicDesc: desc,
    })
      .then((result) => {
        if (result.data.upload === true) {
          alert("Data edited sucuccessfully");
          navigate("/userIdeas");
        } else {
          alert(" not updated");
        }
      })
      .catch((err) => {
        alert("error ocurred....");
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar data={user} />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Idea submission Form</h1>
        <form className="bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-bold">
              Full Name:
            </label>
            <input
              value={sName}
              type="text"
              onChange={(e) => {
                setsName(e.target.value);
              }}
              id="fullName"
              name="fullName"
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
              value={studId}
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
              value={dept}
              onChange={(e) => {
                setDept(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Department</option>
              <option value="IT">INFORMATION TECHNOLOGY</option>
              <option value="CS">COMPUTER SCIENCE</option>
              <option value="EC">ELECTRONICS & COMMUNICATION</option>
              <option value="ME">MECHANICAL ENGINEERING</option>
              <option value="SF">FIRE AND SAFETY</option>
              <option value="EEE">ELECTRICAL AND ELECTRONIC ENGINEERING</option>
              <option value="CE">CIVIL ENGINEERING</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="topic" className="block font-bold">
              Title of topic
            </label>

            <input
              type="text"
              id="topic"
              value={topic}
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
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={uploadData}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editideas;
