import React, { useEffect, useState } from "react";
import Axios from "axios";
import Mentornavbar from "../../Navbar/Mentornavbar";
import { useNavigate } from "react-router-dom";
function Requests() {
  const navigate = useNavigate();
  const [datass, setDatass] = useState([]);
  const [user, setUser] = useState("");

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



  useEffect(() => {
    Axios.get("http://localhost:5000/mentor/requests")
      .then((response) => {
        // Update the component state with the fetched data
        setDatass(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function directPage(id) {
    navigate("/review", { state: { data: id } });
  }
  return (
    <div>
      <Mentornavbar data={user} />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Seven Column Table</h1>
        <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
<tr className="bg-gray-200">
  <th className="border border-gray-300 p-2">STUDENT NAME</th>
  <th className="border border-gray-300 p-2">STUDENT ID</th>
  <th className="border border-gray-300 p-2">
    DEPARTMENT OF STUDENT
  </th>
  <th className="border border-gray-300 p-2">TOPIC TITLE</th>
  <th className="border border-gray-300 p-2">TOPIC DESCRIPTION</th>
  <th className="border border-gray-300 p-2">USER ID</th>
  <th className="border border-gray-300 p-2">ADD REVIEW</th>
</tr>
</thead>
          <tbody>
            {datass.map((row) => (
              <tr className="bg-white" key={row.id}>
                <td className="border border-gray-300 p-2">{row.studentName}</td>
                <td className="border border-gray-300 p-2">{row.studentId}</td>
                <td className="border border-gray-300 p-2">{row.department}</td>
                <td className="border border-gray-300 p-2">{row.topicTitle}</td>
                <td className="border border-gray-300 p-2">{row.topicDescription}</td>
                <td className="border border-gray-300 p-2">{row.id}</td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => directPage(row.id)}>ADD REVIEW</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Requests;
<thead>
<tr className="bg-gray-200">
  <th className="border border-gray-300 p-2">STUDENT NAME</th>
  <th className="border border-gray-300 p-2">STUDENT ID</th>
  <th className="border border-gray-300 p-2">
    DEPARTMENT OF STUDENT
  </th>
  <th className="border border-gray-300 p-2">TOPIC TITLE</th>
  <th className="border border-gray-300 p-2">TOPIC DESCRIPTION</th>
  <th className="border border-gray-300 p-2">USER ID</th>
  <th className="border border-gray-300 p-2">ADD REVIEW</th>
</tr>
</thead>