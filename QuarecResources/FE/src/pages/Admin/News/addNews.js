import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import CustomInput from "../../../components/Custom/TextInput/textinput";

const AddNews = (addNewsModal, handleCloseNewsModal) => {
  const addnewsSchema = Yup.object().shape({
    title: Yup.string().required("Please Enter News Title"),
    description: Yup.string().required("Please Enter News Description"),
    subcategory: Yup.string().required("Please Enter News Search Category"),
  });
  const [newsCategory, setNewsCategory] = useState("");
  const [newsCategoryError, setNewsCategoryError] = useState("");

  const Options = [
    { label: "International", value: "international" },
    { label: "India", value: "india" },
    { label: "Politics", value: "politics" },
    { label: "Sports", value: "sports" },
    { label: "Business", value: "business" },
    { label: "Crime", value: "crime" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Education", value: "education" },
    { label: "Technology", value: "technology" },
    { label: "Life Style", value: "life-style" },
    { label: "Dharm Darshan", value: "dharm-darshan" },
    { label: "Ajab Gajab", value: "ajab-gajab" },
  ];

  const handleUrlSelectChange = (item) => {
    setNewsCategory(item);
    setNewsCategoryError("");
  };

  const handleSubmit = () => {
    console.log("----Call API here-----");
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={addNewsModal}
        centered={true}
        style={{ maxWidth: "65%", width: "50%" }}
      >
        <ModalHeader toggle={handleCloseNewsModal}>Add News</ModalHeader>
        <ModalBody>
          <div>
            <Formik
              initialValues={{
                title: "",
                description: "",
                categories: "",
                subcategory: "",
                tags: [],
              }}
              validationSchema={addnewsSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange, setFieldValue }) => (
                <Form>
                  <h6 className="text-indigo-700 font-semibold"> News Title</h6>
                  <CustomInput
                    type="text"
                    placeholder="Enter Your News Title"
                    name="title"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    style={{
                      borderWidth: 2,
                      borderColor: "#000000",
                    }}
                  />

                  <h6 className="text-indigo-700 font-semibold text-xl">
                    Description
                  </h6>
                  <CustomInput
                    type="textarea"
                    placeholder="Type Your Description Here..."
                    name="description"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    style={{
                      borderWidth: 2,
                      borderColor: "#000000",
                      height: "200px",
                    }}
                  />
                  <Row>
                    <Col>
                      <h6 className="text-indigo-700 font-semibold text-xl">
                        Select Main Category
                      </h6>
                      <Input
                        type="select"
                        // placeholder="Enter your Email I’d"
                        name="subject"
                        values={values}
                        handleChange={(e) => {
                          handleChange(e);
                          handleUrlSelectChange(e.target.value);
                        }}
                        touched={touched}
                        errors={errors}
                        className="mb-4"
                        style={{
                          borderWidth: 2,
                          borderColor: "#000000",
                        }}
                      >
                        <option value="">None</option>
                        {Options &&
                          Options.map((option, i) => {
                            return (
                              <option key={i} value={option.value}>
                                {option.label}
                              </option>
                            );
                          })}
                      </Input>
                    </Col>

                    <Col>
                      <h6 className="text-indigo-700 font-semibold text-xl">
                        Enter Search Category
                      </h6>
                      <CustomInput
                        type="text"
                        placeholder="Enter Your Search Category"
                        name="subcategory"
                        values={values}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        style={{
                          borderWidth: 2,
                          borderColor: "#000000",
                        }}
                      />
                    </Col>
                  </Row>

                  <h6 className="text-indigo-700 font-semibold text-xl">
                    Tags
                  </h6>
                  <TagsInput
                    name="tags"
                    placeholder="Enter News related Tags"
                    value={values.tags}
                    maxTags={10}
                    minTags={2}
                    onChange={(tags) => {
                      setFieldValue("tags", tags);
                    }}
                    style={{
                      borderWidth: 2,
                      borderColor: "#000000",
                    }}
                  ></TagsInput>

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

export default AddNews;
