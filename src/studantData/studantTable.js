import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";

const TableComponent = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    console.log("Search query in TableComponent:", searchQuery);

    const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("==========>", savedFormData);
    setFormData(savedFormData);
  }, [setFormData]);

  if (!Array.isArray(formData)) {
    console.error("formData is not an array:", formData);
    return null;
  }

  const deleteEntry = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormData(updatedFormData);
  };

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);
  };

  const handleView = (index) => {
    navigate(`/student-card/${index}`);
  };

  const filteredData = formData.filter((data) => filterNames(data));
  console.log("hhhhhh",filteredData);

  function filterNames(data) {
    const currentSearchQuery = new URLSearchParams(location.search).get(
      "search"
    );

    if (currentSearchQuery) {
      const lowercaseQuery = currentSearchQuery.toLowerCase();
      return (
        (data.fName && data.fName.toLowerCase().includes(lowercaseQuery)) ||
        (data.lName && data.lName.toLowerCase().includes(lowercaseQuery)) ||
        (data.email && data.email.toLowerCase().includes(lowercaseQuery)) ||
        (data.class && data.class.toString().includes(currentSearchQuery))
        // Add more fields as needed
      );
    }

    return true; // If no search query, show all entries
  }

  return (
    <div className="container-fluid mt-5 ">
      <h2 className="text-center mb-4 fw-bold">Student Data Table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th className="text-center">sr.</th> */}
            <th className="text-center">profile</th>
            <th className="text-center">First Name</th>
            <th className="text-center">Last Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Class</th>
            <th className="text-center">Grade</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Birthdate</th>
            <th className="text-center">Gender</th>
            <th className="text-center">country</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              {/* <td className="text-center">{data.index+1}</td> */}
              <td className="text-center"> <img src={data.profilePicture} alt="Profile" style={{ width: '100px', height: '100px' }} /></td>
              <td className="text-center">{data.fName}</td>
              <td className="text-center">{data.lName}</td>
              <td className="text-center">{data.email}</td>
              <td className="text-center">{data.class}</td>
              <td className="text-center">{data.grade}</td>
              <td className="text-center">{data.phone}</td>
              <td className="text-center">
                {data.birthdate instanceof Date
                  ? data.birthdate.toLocaleDateString()
                  : data.birthdate}
              </td>
              <td className="text-center">{data.gender}</td>
              <td className="text-center">{data.country}</td>

              <td>
                <button
                  className="btn btn-warning m-1"
                  onClick={() => handleView(index)}
                >
                 <i className="them-color "> <GrView /></i>
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => deleteEntry(index)}
                >
                  <i className="them-color ">
                    <AiFillDelete />
                  </i>
                </button>
                <button
                  className="btn btn-warning m-1"
                  onClick={() => handleEdit(index)}
                >
                  <i className="them-color"><FaEdit/></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
