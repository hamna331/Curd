import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Otp() {
  const formRef = React.useRef(null);

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .required('OTP is required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .length(4, 'Must be exactly 4 digits'),
  });

  return (
    <div className="container-fluid">
      <Formik
        innerRef={formRef}
        initialValues={{
          'phone no': "",
          otp: ["", "", "", ""], // Initialize OTP as an array with four empty strings
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form submitted! Values:", values);
          console.log(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            <div className="container  mt-1 ">
              {/* <h6 className="text-light d-flex justify-content-center mt-3">otp send in just sec</h6> */}
              {/* OTP Input Fields */}
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
                <Link className="col-lg-2 mt-3 col-md-6 col-sm-12 " to='/'>
                  <button type="submit" className="btn btn-primary w-100 ">
                    <p className="mt-2">Submit</p>
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Otp;
