import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";



const StudentCard = () => {
  
const location = useLocation();
  const studentData = location.state || location.pathname.split("/")[2];

 

useEffect(() => {
  console.log("Location in StudentCard:", location);
  console.log("StudentData in StudentCard:", studentData);
}, [location, studentData]);
  

  if (!studentData) {
    // Handle the case where there is no studentData
    return <div>No data available.</div>;
  }

  const displayData = studentData

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Card</h2>
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-4">
              <img
                src={displayData.profilePicture || "default-profile-picture.jpg"}
                alt="Profile"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <Card.Title>
                {displayData.fName} {displayData.lName}
              </Card.Title>
              <Card.Text>
                <strong>Email:</strong> {displayData.email}
              </Card.Text>
              <Card.Text>
                <strong>Class:</strong> {displayData.class}
              </Card.Text>
              <Card.Text>
                <strong>Grade:</strong> {displayData.grade}
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> {displayData.phone}
              </Card.Text>
              <Card.Text>
                <strong>Birthdate:</strong>{" "}
                {displayData.birthdate instanceof Date
                  ? displayData.birthdate.toLocaleDateString()
                  : displayData.birthdate}
              </Card.Text>
              <Card.Text>
                <strong>Gender:</strong> {displayData.gender}
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentCard;
