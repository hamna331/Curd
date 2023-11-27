import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCaretDownFill, BsCalendar } from "react-icons/bs";
import { useParams } from "react-router";

// Validation schema for form fields
const validationSchema = Yup.object().shape({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  class: Yup.string().required("Class is required"),
  grade: Yup.string().required("Grade is required"),
  phone: Yup.string().required("Phone number is required"),
});

const FormComponent = ({ formData, setFormData }) => {
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();
  const formRef = useRef();
  const { index } = useParams();

  // Save form data to local storage and update state
  const saveToLocalStorage = (values) => {
    let updatedFormData = [...formData];
    if (editIndex !== null) {
      // If editIndex is not null, update the existing entry
      updatedFormData[editIndex] = values;
    } else {
      // If editIndex is null, add a new entry
      updatedFormData = [...updatedFormData, values];
    }

    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormData(updatedFormData);
    setEditIndex(null);

    // Reset the form
    formRef.current.resetForm();
  };

  // Populate form with data if editing an existing entry
  useEffect(() => {
    // Load saved form data from local storage on component mount
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(savedFormData);

    // If an index is provided in the URL params, populate the form with the corresponding data
    if (index !== undefined && savedFormData[index]) {
      const editedData = savedFormData[index];
     
      const formattedBirthdate = editedData.birthdate ? new Date(editedData.birthdate) : null;

      formRef.current.setValues({
        ...editedData,
        birthdate: formattedBirthdate,
      });
    }
  }, [setFormData, index]);

  return (
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
        // Check if editIndex is not null, indicating that we are editing an existing entry
        if (editIndex !== null) {
          // Update the existing entry in the formData array
          const updatedFormData = [...formData];
          updatedFormData[editIndex] = values;

          // Update localStorage and state
          localStorage.setItem("formData", JSON.stringify(updatedFormData));
          setFormData(updatedFormData);
          setEditIndex(null); // Reset editIndex

          console.log("Entry updated!");
        } else {
          // If editIndex is null, add a new entry to the formData array
          const updatedFormData = [...formData, values];

          // Update localStorage and state
          localStorage.setItem("formData", JSON.stringify(updatedFormData));
          setFormData(updatedFormData);

          console.log("New entry added!");
        }

        resetForm();
        setSubmitting(false);

        // After form submission, navigate to the table component
        navigate("/table");
      }}
    >
      {(formik) => (
        <Form>
          {/* Profile Picture */}
          <div className="row profile">
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <label htmlFor="profilePicture" className="fw-bold">
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

          {/* Basic Information */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="fName" className="form-label">
                <h3>First Name</h3>
              </label>
              <Field type="text" className="form-control" id="fName" name="fName" />
              <ErrorMessage name="fName" component="div" className="text-danger" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="lName" className="form-label">
                <h3>Last Name</h3>
              </label>
              <Field type="text" className="form-control" id="lName" name="lName" />
              <ErrorMessage name="lName" component="div" className="text-danger" />
            </div>
          </div>

          {/* Additional Information */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="email" className="form-label">
                <h3>Email</h3>
              </label>
              <Field type="text" className="form-control" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="class" className="form-label">
                <h3>Class</h3>
              </label>
              <Field type="text" className="form-control" id="class" name="class" />
              <ErrorMessage name="class" component="div" className="text-danger" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="grade" className="form-label">
                <h3>Grade</h3>
              </label>
              <Field type="text" className="form-control" id="grade" name="grade" />
              <ErrorMessage name="grade" component="div" className="text-danger" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="phone" className="form-label">
                <h3>Phone Number</h3>
              </label>
              <Field type="text" className="form-control" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>
          </div>

          {/* Date of Birth and Country */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 w-100">
              <label htmlFor="birthdate" className="form-label">
                <h3>Birthdate</h3>
              </label>
              <div className="input-group" style={{ display: "flex", alignItems: "center" }}>
                <DatePicker
                  id="birthdate"
                  name="birthdate"
                  selected={formik.values.birthdate}
                  onChange={(date) => formik.setFieldValue("birthdate", date)}
                  dateFormat="MM/dd/yyyy"
                  className="form-control"
                  customInput={<input className="form-control" />}
                />
                <span className="d-flex align-items-center mb-2 " style={{ position: "absolute", left: "180px" }}>
                  <BsCalendar />
                </span>
              </div>
              <ErrorMessage name="birthdate" component="div" className="text-danger" />
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
                  <label htmlFor="country" className="input-group-text bg-white border-start-0">
                    <BsFillCaretDownFill />
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
              <ErrorMessage name="country" component="div" className="text-danger" />
            </div>
          </div>

          {/* Gender */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 w-100">
              <label className="form-label">
                <h3>Gender</h3>
              </label>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="gender" value="male" />
                  <p>Male</p>
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" className="ms-5" />
                  <p>Female</p>
                </label>
                <label>
                  <Field type="radio" name="gender" value="other" className="ms-5" />
                  <p>Other</p>
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="text-danger" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <button type="submit" className="btn btn-primary w-100">
                <p>{editIndex !== null ? "Update" : "Submit"}</p>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
