import React, { useState } from "react";
import { Table, Card, CardTitle, CardBody, Col, Button } from "reactstrap";
import { constants as CONSTS } from "../../../components/constants/constants";
import AddNews from "./addNews";
import EmptyView from "../../../components/Custom/EmptyView";
import NewsPaper from "../../../assets/images/newspaper.png";

const News = () => {
  const [addNewsModal, setAddNewsModal] = useState(false);

  const handleShowNewsModal = () => {
    setAddNewsModal(true);
  };

  const handleCloseNewsModal = () => {
    setAddNewsModal(false);
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
                Add News
              </Button>
              {AddNews(addNewsModal, handleCloseNewsModal)}
            </CardTitle>
            <CardBody>
              <Table hover>
                <thead>
                  <tr className="text-center">
                    <th>{CONSTS.SR_NO}</th>
                    <th>{CONSTS.TITLE}</th>
                    <th>{CONSTS.DESCRIPTION}</th>
                    <th>{CONSTS.CATEGORIES}</th>
                    <th>{CONSTS.SEARCH_CATEGORIES}</th>
                    <th>{CONSTS.TAGS}</th>
                    <th>{CONSTS.CREATED_DATE}</th>
                    <th>{CONSTS.ACTION}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={19}>
                      <EmptyView
                        title={"Sorry!"}
                        discription={"No News Found"}
                        bgcolor={"white"}
                        src={NewsPaper}
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

export default News;
