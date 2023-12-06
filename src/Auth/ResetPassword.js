import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  UserName: Yup.string().required("User Name is required"),
  Password: Yup.string().required("Password is required"),
});

const YourFormComponent = ({ searchQuery }) => {
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formRef = useRef();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(savedFormData);
    console.log("setFormData")
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
          UserName: "",
          Password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form submitted! Values:", values); // Display form values in console
          saveToLocalStorage(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            <div className="container bg-light mt-2">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label htmlFor="UserName" className="form-label mt-3">
                    <h5>User Name</h5>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="UserName"
                    name="UserName"
                  />
                  <ErrorMessage
                    name="UserName"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label htmlFor="NewPassword" className="form-label mt-3">
                    <h5>New Password</h5>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="NewPassword"
                    name="NewPassword"
                  />
                  <ErrorMessage
                    name="NewPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label htmlFor="ConfirmPassword" className="form-label mt-3">
                    <h5>Confirm Password</h5>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                  />
                  <ErrorMessage
                    name="ConfirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              {/* Submit button inside the form */}
              <div className="row d-flex justify-content-center ">
                <div className="col-lg-2 mt-3 col-md-6 col-sm-12">
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    <p className="mt-3">Submit</p>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default YourFormComponent;
