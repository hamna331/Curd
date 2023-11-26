import { React, useRef, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css"; // Import the CSS file
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  class: Yup.string().required("class is required"),
  grade: Yup.string().required("grade is required"),
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
  const deleteEntry = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormData(updatedFormData);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    const editedData = formData[index];
    console.log(editedData);
    const formRefCurrent = formRef.current;
    console.log(formRefCurrent);
    formRefCurrent.setFieldValue("fName", editedData.fName);
    formRefCurrent.setFieldValue("lName", editedData.lName);
    formRefCurrent.setFieldValue("email", editedData.email);
    formRefCurrent.setFieldValue("class", editedData.class);
    formRefCurrent.setFieldValue("grade", editedData.grade);
    formRefCurrent.setFieldValue("phone", editedData.phone);
    // formik.setValues(editedData);
    // Formik.setFieldValue('fName', editedData.fName);
    // Formik.setValues(editedData);
  };

  const filterNames = (name) => {
    if (searchQuery && name) {
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
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
          class: "",
          grade: "",
          birthdate: "",
          gender: "",
          profilePicture: "",
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
            {/* {formData.profilePicture && (
          <div className="row">
  <div className="col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="profilePicture" className="form-label">
      Profile Picture
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
          setFormData((prevData) => ({
            ...prevData,
            profilePicture: imageData,
          }));
        };
        <img
        src={formData.profilePicture}
        alt="Profile"
        style={{ width: "100%", height: "auto" }}
      />
      }}
    />
  </div>
</div>
)} */}
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
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="class" className="form-label">
                 
                  <h3> Class</h3>
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
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="grade" className="form-label">
                  
                  <h3> Grade</h3>
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



              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="country" className="form-label">
                  
                  <h3>Country</h3>
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="form-select"
                  append={
                    <label
                      htmlFor="country"
                      className="input-group-text bg-white border-start-0"
                    >
                      <BsFillCaretDownFill /> {/* Include the icon component */}
                    </label>
                  }
                >
                  <option value="">Select a country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="PK">Pakistan</option>
                  <option value="AT">Austria</option>
                  <option value="CN">China</option>
                  {/* Add more countries as needed */}
                </Field>
                <ErrorMessage
                  name="country"
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
              {/* <div className="col-lg-6 col-md-6 col-sm-12"> */}
              {/* You can add additional spacing or elements here if needed */}
              {/* </div> */}
              <div className="col-lg-6 col-md-6 col-sm-12">
                <button type="submit" className="btn btn-primary w-100  ">
                  <p>Submit</p>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <table id="scoreTable" className="table table-bordered mt-5">
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
                   {/* Use Link component for navigation */}
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
      </table>
    </div>
  );
};

export default YourFormComponent;
