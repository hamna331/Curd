import { React, useRef, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required(" phone number is required"),
  gender: Yup.string().required(" gender number is required"),
});

const YourFormComponent = ({ searchQuery }) => {
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formRef = useRef();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(savedFormData);
    console.log("formData")
  }, []);

  const saveToLocalStorage = (data = false) => {
    let updatedFormData = [...formData];
    if (editIndex !== null) {
      updatedFormData[editIndex] = data;
    } else {
      updatedFormData = [...updatedFormData, data];
    }

    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormData(updatedFormData);
    setEditIndex(null);
  };

  return (

    
    <div className="container-fluid bg-light">
    
      <Formik
        innerRef={formRef}
        initialValues={{
          fName: "",
          lName: "",
          phone: "",
          email: "",
          birthdate: "",
          gender: "",
          profilePicture: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form submitted! Values:", values);
          saveToLocalStorage(values);
          console.log(values);
          resetForm(); 
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
           
            <div className="row profile">
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                <label htmlFor="profilePicture " className="fw-bold">
                 <h3>Profile Picture</h3> 
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      const imageData = e.target.result;
                      formik.setFieldValue("profilePicture", imageData);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
                {formik.values.profilePicture && (
                  <img
                    className="d-flex justify-content-start"
                    src={formik.values.profilePicture}
                    alt="Profile"
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
              </div>
              <div className="col-lg-9 col-md-6 col-sm-12" />

            </div>


            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="fName" className="form-label">
                  <h3>First Name</h3>
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
                <label htmlFor="lName" className="form-label">
                  <h3>Last Name</h3>
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
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="email" className="form-label">
                  
                  <h3>E-mail</h3>
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
        
            </div>

            <div className="row">
            
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="phone" className="form-label">
                  
                  <h3> Phone Number</h3>
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
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 w-100">
                <label htmlFor="birthdate" className="form-label">
                  
                  <h3>Birthdate</h3>
                </label>
                <div className="input-group" style={{ display: 'flex', alignItems: 'center' }}>
                  <DatePicker
                    id="birthdate"
                    name="birthdate"
                    selected={formik.values.birthdate}
                    onChange={(date) => formik.setFieldValue("birthdate", date)}
                    dateFormat="MM/dd/yyyy"
                    className="form-control"
                    customInput={<input className="form-control" />}
                  />
                  <span className="d-flex align-items-center mb-2 " style={{ position: 'absolute', left: '180px' }}>
                    <BsCalendar /> {/* Include the icon component */}
                  </span>
                </div>
                <ErrorMessage
                  name="birthdate"
                  component="div"
                  className="text-danger"
                />
              </div>           
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 w-100 ">
                  <label className="form-label"><p>Gender</p></label>
                  <div role="group" aria-labelledby="my-radio-group">
                    <label>
                      <Field type="radio" name="gender" value="male" />
                      <p>Male</p>
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        className="ms-5"
                      />
                      <p>Female</p>
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="other"
                        className="ms-5"
                      />
                      <p>Other</p>
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
            </div>

            {/* Submit button inside the form */}
            <div className="row justify-content-center ">
              <Link className="col-lg-6 col-md-6 col-sm-12" to='/login'>
                <button type="submit" className="btn btn-primary w-100  ">
                  <p>Submit</p>
                </button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      {/* <table id="scoreTable" className="table table-bordered mt-5">
        <thead className="thead-dark ">
          <tr>
            <th scope="col" className="text-center">
              <p>First name</p>
            </th>
            <th scope="col" className="text-center">
              
              <p>Last name</p>
            </th>
            <th scope="col" className="text-center">
              <p>Email</p>
            </th>
            <th scope="col" className="text-center">
             
              <p> Class</p>
            </th>
            <th scope="col" className="text-center">
             
              <p> Grade</p>
            </th>
            <th scope="col" className="text-center">
             
              <p> Ph:no</p>
            </th>
            <th scope="col" className="text-center">
             
              <p>Date</p>
            </th>
            <th scope="col" className="text-center">
              <p>gender</p>
            </th>
            <th scope="col" className="text-center">
              
              <p>Action</p>
            </th>
          </tr>
        </thead>

        <tbody id="tableBody">
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
                <td>{data.birthdate instanceof Date
                  ? data.birthdate.toLocaleDateString()
                  : data.birthdate}
                  </td>
                
                <td className="text-center">{data.gender}</td>
                <td className="text-center">
                   <Link to={`/student-detail/${index}`} className="btn btn-primary">
                    <p>View</p>
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteEntry(index)}
                  >
                    {" "}
                   <p> Delete{" "}</p>
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                    {" "}
                    <p>Edit{" "}</p>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default YourFormComponent;
