import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";



const StudentCard = ({ data }) => {
 
  const location = useLocation();
  const { studentData } = location.state || {};
 

  useEffect(() => {
    console.log("StudentData in StudentCard:", studentData);
  }, [studentData]);

  if (!studentData) {
    // Handle the case where there is no studentData
    return <div>No data available.</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Card</h2>
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-4">
              <img
                src={studentData.profilePicture || "default-profile-picture.jpg"}
                alt="Profile"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <Card.Title>
                {studentData.fName} {studentData.lName}
              </Card.Title>
              <Card.Text>
                <strong>Email:</strong> {studentData.email}
              </Card.Text>
              <Card.Text>
                <strong>Class:</strong> {studentData.class}
              </Card.Text>
              <Card.Text>
                <strong>Grade:</strong> {studentData.grade}
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> {studentData.phone}
              </Card.Text>
              <Card.Text>
                <strong>Birthdate:</strong>{" "}
                {studentData.birthdate instanceof Date
                  ? studentData.birthdate.toLocaleDateString()
                  : studentData.birthdate}
              </Card.Text>
              <Card.Text>
                <strong>Gender:</strong> {studentData.gender}
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentCard;
