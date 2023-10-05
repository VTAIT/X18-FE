import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import BootstrapModal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { TableDetailModalModel } from "../modelUI/TableDetailModal";

export const TableDetailModal = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    fullName: "",
    gender: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string(),
    gender: Yup.string(),
    phone: Yup.string().required("Phone is required"),
  });
  function onSubmit(fields, { setStatus, setSubmitting, resetForm }) {
    // if (isAddMode) {
    //   createCustomer(fields, setSubmitting, resetForm);
    //   onUpdateCustomer();
    // } else {
    //   updateCustomer(fields, setSubmitting);
    //   onUpdateCustomer();
    // }
  }

  //   async function createCustomer(fields, setSubmitting, resetForm) {
  //     resetForm();
  //     const newCustomer = {
  //       ...fields,
  //       kiot_id: user.kiot_id,
  //       username: user.username,
  //       gender: fields.gender === "male" ? 1 : fields.gender === "female" ? 2 : 3,
  //     };
  //     setLoading(true);
  //     await customerAPI
  //       .create(newCustomer)
  //       .then(() => {
  //         onUpdateCustomer({
  //           status: 1,
  //           message: "Customer is added successfully!",
  //         });
  //         handleClose();
  //       })
  //       .catch((error) => {
  //         setSubmitting(false);
  //         setLoading(false);
  //         onUpdateCustomer({ status: 0, message: error.response.data.error });
  //         handleClose();
  //         console.log(error.response.data.error);
  //       })
  //       .finally(setLoading(false));
  //   }

  return (
    <BootstrapModal show={show} onHide={handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Thông tin bàn</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting, setFieldValue }) => {
            return (
              <Form>
                {TableDetailModalModel.map((item) => (
                  <div key={item.fieldName} className="form-group col">
                    <label className="fs-4 ">{item.label}</label>
                    <Field
                      name={item.fieldName}
                      type={item.type ? item.type : "text"}
                      placeholder={`Enter ${item.label}`}
                      className={
                        "form-control my-3" +
                        (errors[item.fieldName] && touched[item.fieldName]
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name={item.fieldName}
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                ))}

                <div className="form-group text-center">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="btn btn-secondary me-2"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting && (
                      <span className="spinner-border spinner-border-sm mr-1"></span>
                    )}
                    Save
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </BootstrapModal.Body>
      {/* <BootstrapModal.Footer></BootstrapModal.Footer> */}
    </BootstrapModal>
  );
};
