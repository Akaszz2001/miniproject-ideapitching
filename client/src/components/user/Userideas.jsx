import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Userideas() {
  const [ideas, setIdeas] = useState([]);
  const navigate = useNavigate();
  const [dataTosend, setDataTosend] = useState({});
  const [user, setUser] = useState("");
  const [uid, setUid] = useState("");
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
  });
  const deletedata = (id) => {
    Axios.delete(`http://localhost:5000/ideaSubmission/${id}`)
      .then((res) => {
        if (res.data.del === true) {
          alert("deleted successfully");
          refresh();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refresh = () => {
    Axios.get("http://localhost:5000/ideaSubmission/ideas")
      .then((response) => {
        setIdeas(response.data);
        setDataTosend({
          name: response.data.studentName,
          studId: response.data.studentId,
          dept: response.data.department,
          title: response.data.topicTitle,
          desc: response.data.topicDescription,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const updateData = () => {
    navigate("/editIdea", { state: dataTosend });
  };

  return (
    <div>
      <Navbar data={user} />
      <div className="p-4">
        <button onClick={refresh}>Refresh</button>

        <h1 className="text-2xl font-bold mb-4">My Ideas</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Topic Name</th>
              <th className="border border-gray-300 p-2">Concept</th>
              <th className="border border-gray-300 p-2">Review From Mentor</th>
              <th className="border border-gray-300 p-2">Delete</th>
              <th className="border border-gray-300 p-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {ideas.length > 0 ? (
              ideas.map((row) => (
                <tr className="bg-white" key={row.id}>
                  <td className="border border-gray-300 p-2">
                    {row.studentName}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {row.topicTitle}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {row.topicDescription}
                  </td>
                  <td className="border border-gray-300 p-2">{row.Reviews}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded "
                      onClick={() => {
                        deletedata(row.studentName);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Userideas;
