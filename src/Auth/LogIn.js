import { React, useRef } from "react";
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
    // console.log("savedFormData");
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
    console.log("Form submitted! Values:", values); // This line logs the form values
    saveToLocalStorage(values);
    resetForm();
    setSubmitting(false);
  }}
      >
        {(formik) => (
          <Form>
          <div className="container bg-light mt-1 ">
            <div className="row  d-flex justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <label htmlFor="User Name" className="form-label mt-3">
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
              <div className="row  d-flex justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <label htmlFor="Password" className="form-label mt-3">
                  <h5>Password</h5>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="Password"
                  name="Password"
                />
                <ErrorMessage
                  name="Password"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Submit button inside the form */}
            <div className="row d-flex justify-content-center ">
              <Link className="col-lg-2 mt-3 col-md-6 col-sm-12" to="/otp">
                <button type="submit" className="btn btn-primary w-100 mb-2 ">
                  <p className="mt-3">Submit</p>
                </button>
              </Link>
              <Link className="col-lg-2 mt-3 col-md-6 col-sm-12" to="/resetpassword">
                <button type="submit" className="btn btn-primary w-100 mb-2 ">
                  <p className="mt-3">Forgot Password</p>
                </button>
              </Link>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default YourFormComponent;
