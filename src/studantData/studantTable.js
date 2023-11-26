import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const TableComponent = ({ formData, setFormData, searchQuery }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("==========>",savedFormData);
    setFormData(savedFormData);
  }, [setFormData]);

  if (!Array.isArray(formData)) {
    console.error('formData is not an array:', formData);
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

  const filterNames = (name) => {
    if (searchQuery && name) {
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Data Table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">First Name</th>
            <th className="text-center">Last Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Class</th>
            <th className="text-center">Grade</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Birthdate</th>
            <th className="text-center">Gender</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData
            .filter((data) => filterNames(data.fName))
            .map((data, index) => (
              <tr key={index}>
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
                <td className="text-center">
                  <Link to={`/student-card/${index}`} className="btn btn-primary me-2">
                    View
                  </Link>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => deleteEntry(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
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
