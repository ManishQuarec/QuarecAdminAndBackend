import React, { useState } from "react";
import { Table, Card, CardTitle, CardBody, Col, Button } from "reactstrap";
import { constants as CONSTS } from "../../../components/constants/constants";
import AddCategory from "./addCategory"
import EmptyView from "../../../components/Custom/EmptyView";
import Category from "../../../assets/images/categories.png";

const Categories = () => {
  const [addCategoryModal, setAddCategoryModal] = useState(false);

  const handleShowNewsModal = () => {
    setAddCategoryModal(true);
  };

  const handleCloseNewsModal = () => {
    setAddCategoryModal(false);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Col lg={12}>
          <Card>
            <CardTitle
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span
                style={{
                  padding: "20px 0px 10px 20px",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                News
              </span>
              <Button
                type="submit"
                name="btn"
                onClick={handleShowNewsModal}
                style={{
                  margin: "20px 0px 10px 20px",
                }}
              >
                Add Categories
              </Button>
              {AddCategory(addCategoryModal, handleCloseNewsModal)}
            </CardTitle>
            <CardBody>
              <Table hover>
                <thead>
                  <tr className="text-center">
                    <th>{CONSTS.SR_NO}</th>
                    <th>{CONSTS.CATEGORY_NAME}</th>
                    <th>{CONSTS.CREATED_DATE}</th>
                    <th>{CONSTS.ACTION}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={19}>
                      <EmptyView
                        title={"Sorry!"}
                        discription={"No Categories Found"}
                        bgcolor={"white"}
                        src={Category}
                      ></EmptyView>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default Categories;
