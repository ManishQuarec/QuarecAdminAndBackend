import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import CustomInput from "../../../components/Custom/TextInput/textinput";

const AddCategory = (addCategoryModal, handleCloseNewsModal) => {
  const addCategorySchema = Yup.object().shape({
    category_name: Yup.string().required("Please Enter Category Name"),
  });

  const handleSubmit = () => {
    console.log("----Call API here-----");
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={addCategoryModal}
        centered={true}
        className="responsive"
        
      >
        <ModalHeader toggle={handleCloseNewsModal}>Add News</ModalHeader>
        <ModalBody>
          <div>
            <Formik
              initialValues={{
                category_name: "",
              }}
              validationSchema={addCategorySchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange, setFieldValue }) => (
                <Form>
                  <h6 className="text-indigo-700 font-semibold">
                    Category Name
                  </h6>
                  <CustomInput
                    type="text"
                    placeholder="Enter Your Category"
                    name="category_name"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    style={{
                      borderWidth: 2,
                      borderColor: "#000000",
                    }}
                  />

                  <ModalFooter>
                    <Button type="submit" name="btn">
                      Create
                    </Button>
                    <Button
                      type="button"
                      name="btn"
                      color="danger"
                      onClick={handleCloseNewsModal}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default AddCategory;
