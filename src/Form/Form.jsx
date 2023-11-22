import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css"; // Import the CSS file

const validationSchema = Yup.object().shape({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  class: Yup.string().required("class is required"),
  grade: Yup.string().required("grade is required"),
  phone: Yup.string().required(" phone number is required"),
});

const YourFormComponent = () => {
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(savedFormData);
  }, []);

  const saveToLocalStorage = (data) => {
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    const newData = [...savedFormData, data];
    localStorage.setItem("formData", JSON.stringify(newData));
    setFormData(newData);
  };
  const deleteEntry = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormData(updatedFormData);
  };
  
  



  return (
    <div className="container-fluid bg-light">
      <h2 className="text-center">Registration</h2>

      <Formik
        initialValues={{
          fName: "",
          lName: "",
          phone: "",
          email: "",
          class: "",
          grade: "",
          // Add other fields here
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Temporary logging to check if onSubmit is triggered
          console.log("Form submitted! Values:", values);
          saveToLocalStorage(values); // Save values to local storage
          // Handle form submission, e.g., API calls, etc.
          console.log(values);
          resetForm(); // Reset form after submission
          setSubmitting(false);
        }}
        
        
      >
        {(formik) => (
          <Form>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label" htmlFor="fName">
                  First Name
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="fName"
                  name="fName"
                />
                <ErrorMessage
                  name="fName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label" htmlFor="lName">
                  Last Name
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="lName"
                  name="lName"
                />
                <ErrorMessage
                  name="lName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label className="form-label" htmlFor="email">
                    E-mail{" "}
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <br />
                <br />
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label className="form-label" htmlFor="class">
                    class
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="class"
                    name="class"
                  />
                  <ErrorMessage
                    name="class"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label className="form-label" htmlFor="grade">
                    grade{" "}
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="grade"
                    name="grade"
                  />
                  <ErrorMessage
                    name="grade"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label className="form-label" htmlFor="phone">
                    phone number{" "}
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>{" "}
            </div>

            {/* Submit button inside the form */}
            <div className=" d-flex justify-content-center align-item-center">
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
      <table id="scoreTable" className="table table-bordered mt-5">
      <thead className="thead-dark ">
  <tr> 
    
    <th scope="col" className="text-center">First name</th>
    <th scope="col"  className="text-center">Last name</th>
    <th scope="col"  className="text-center">Email</th>
    <th scope="col"  className="text-center">Class</th>
    <th scope="col"  className="text-center">Grade</th>
    <th scope="col"  className="text-center">Ph:no</th>
    <th scope="col"  className="text-center">Action</th>
  </tr>
</thead>

        <tbody id="tableBody">
          {formData.map((data, index) => (
            <tr key={index}>
            
              <td  className="text-center">{data.fName}</td>
              <td  className="text-center">{data.lName}</td>
              <td  className="text-center">{data.email}</td>
              <td  className="text-center">{data.class}</td>
              <td className="text-center">{data.grade}</td>
              <td  className="text-center">{data.phone}</td>
              <td  className="text-center">
                <button className="btn btn-primary" onClick={() => deleteEntry(index)}>   Delete  </button>
                <button className="btn btn-primary" >  Edit  </button>
              </td>

              {/* Add other table data cells for each field */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourFormComponent;
