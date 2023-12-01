import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCaretDownFill, BsCalendar } from "react-icons/bs";
import { useParams } from "react-router";
import "./student.css"

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
    //   const saveToLocalStorage = (values) => {
    //     let updatedFormData = [...formData];
    //     if (editIndex !== null) {
    //       // If editIndex is not null, update the existing entry
    //       updatedFormData[editIndex] = values;
    //     } else {
    //       // If editIndex is null, add a new entry
    //       updatedFormData = [...updatedFormData, values];
    //     }

    //     localStorage.setItem("formData", JSON.stringify(updatedFormData));
    //     setFormData(updatedFormData);
    //     setEditIndex(null);

    //     // Reset the form
    //     formRef.current.resetForm();
    //   };

    // Populate form with data if editing an existing entry
    useEffect(() => {
        // Load saved form data from local storage on component mount
        const savedFormData = JSON.parse(localStorage.getItem("formData")) || [];
        setFormData(savedFormData)
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
        <>
            <div className="container student-bg-color my-5 p-4">
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
                        if (index) {
                            // Update the existing entry in the formData array
                            const updatedFormData = formData;
                            updatedFormData[index] = values;

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
                    }}>
                    {(formik) => (
                        <Form>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 h-25">
                                    {/* Profile Picture */}
                                    <label htmlFor="profilePicture" className="fw-bold form-label">
                                        <h5>Profile Picture</h5>
                                    </label>
                                    <input
                                        className="form-control"
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
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="row">
                                        {/* Basic Information */}
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="fName" className="form-label">
                                                <h5>First Name</h5>
                                            </label>
                                            <Field type="text" className="form-control" id="fName" name="fName" />
                                            <ErrorMessage name="fName" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="lName" className="form-label">
                                                <h5>Last Name</h5>
                                            </label>
                                            <Field type="text" className="form-control" id="lName" name="lName" />
                                            <ErrorMessage name="lName" component="div" className="text-danger" />
                                        </div>
                                        {/* Additional Information */}
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <label htmlFor="email" className="form-label mt-3">
                                                <h5>Email</h5>
                                            </label>
                                            <Field type="text" className="form-control" id="email" name="email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="class" className="form-label mt-3">
                                                <h5>Class</h5>
                                            </label>
                                            <Field type="text" className="form-control" id="class" name="class" />
                                            <ErrorMessage name="class" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="grade" className="form-label mt-3">
                                                <h5>Grade</h5>
                                            </label>
                                            <Field type="text" className="form-control" id="grade" name="grade" />
                                            <ErrorMessage name="grade" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="phone" className="form-label mt-3">
                                                <h5>Phone Number</h5>
                                            </label>
                                            <Field type="text" className="form-control" id="phone" name="phone" />
                                            <ErrorMessage name="phone" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="country" className="form-label mt-3">
                                                <h5>Country</h5>
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
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="birthdate" className="form-label mt-3">
                                                <h5>Birthdate</h5>
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
                                                <span className="d-flex align-items-center" style={{ position: "absolute", left: "180px" }}>
                                                    <BsCalendar />
                                                </span>
                                            </div>
                                            <ErrorMessage name="birthdate" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label className="form-label mt-3">
                                                <h5>Gender</h5>
                                            </label>
                                            <div role="group" aria-labelledby="my-radio-group" className="d-flex justify-content-around">
                                                <label className="text-center">
                                                    <Field type="radio" name="gender" value="male" />
                                                    <p>Male</p>
                                                </label>
                                                <label className="text-center">
                                                    <Field type="radio" name="gender" value="female" />
                                                    <p>Female</p>
                                                </label>
                                                <label className="text-center">
                                                    <Field type="radio" name="gender" value="other" />
                                                    <p>Other</p>
                                                </label>
                                            </div>
                                            <ErrorMessage name="gender" component="div" className="text-danger" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary w-25">
                                                <p>{index ? "Update" : "Submit"}</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div >
        </>
    );
};

export default FormComponent;
