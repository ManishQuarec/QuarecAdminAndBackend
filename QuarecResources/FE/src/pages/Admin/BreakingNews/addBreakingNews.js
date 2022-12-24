import React, {useRef, useState} from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../components/Custom/TextInput/textinput";
import { red } from "@material-ui/core/colors";
import axios from 'axios';

const AddBreakingNews = (addBreakingnewsModal, handleCloseNewsModal) => {

  const tittle = useRef();
  const Discription = useRef();
  const [Data, setData]=useState();

  console.log(Data);
  const addbreakingNewsSchema = Yup.object().shape({
    breaking_news: Yup.string().required("Please Enter Breaking News"),
    tittle:Yup.string().required("Please Enter Tittle"),
  });

const SubmitData = () => {
  axios.post('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response.json()))
  // console.log(axios.isCancel('something'));


}

  return (
    <React.Fragment>
      <Modal
        isOpen={addBreakingnewsModal}
        centered={true}
        // style={{ maxWidth: "65%", width: "50%" }}
      >
        <ModalHeader toggle={handleCloseNewsModal}>
          Add Breaking-News
        </ModalHeader>
        <ModalBody>
          <div>
            <Formik
              initialValues={{  
                breaking_news: "",
                tittle:""

              }}
              onSubmit={async values => {
              
              setData(values);
              }}
             


              validationSchema={addbreakingNewsSchema}
            >


              {({ errors, touched, values, handleChange, setFieldValue }) => (
                <Form >
                  <h6 className="text-indigo-700 font-semibold">
                    Tittle
                  </h6>
                  <CustomInput
                    type="text"
                    placeholder="Tittle"
                    name="tittle"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    style={{
                      borderWidth: 2,
                      borderColor: red,
                      //  "#000000",
                    }}
                  />
                  <h6 className="text-indigo-700 font-semibold">
                    Breaking News
                  </h6>
                  <CustomInput
                    type="text"
                    placeholder="Enter Your Breaking News"
                    name="breaking_news"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    style={{
                      borderWidth: 2,
                      borderColor: red,
                      //  "#000000",
                    }}
                  />
                  <ModalFooter>
                    <Button type="submit" name="btn" onClick={SubmitData}>
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
export default AddBreakingNews;
