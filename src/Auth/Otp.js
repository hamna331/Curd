import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Otp() {

  const validationSchema = Yup.object().shape({
    otp: Yup.array()
      .of(Yup.string().matches(/^[0-9]$/, "Must be a digit").required("Required"))
      .min(4, "Must contain 4 digits")
      .max(4, "Must contain 4 digits"),
  });

  return (
    <div className="container-fluid">
      <Formik
        initialValues={{
          otp: ["", "", "", ""], 
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form submitted! Values:", values);
          resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <div className="container mt-1">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <label htmlFor="otp" className="form-label mt-3">
                    <h5>Enter OTP:</h5>
                  </label>
                  <div className="d-flex justify-content-between">
                    {formik.values.otp.map((digit, index) => (
                      <Field
                        key={index}
                        type="text"
                        className="form-control w-100"
                        id={`otp${index}`}
                        name={`otp[${index}]`}
                        maxLength={1} // Limit input to single character
                        onChange={(e) => {
                          const { value } = e.target;
                          const otpValues = [...formik.values.otp];
                          otpValues[index] = value;
                          formik.setFieldValue("otp", otpValues);
                        }}
                      />
                    ))}
                  </div>
                  <ErrorMessage
                    name="otp"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              {/* Submit button inside the form */}
              <div className="row d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-25 mt-3">
                  <p className="mt-2">Submit</p>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Otp;
