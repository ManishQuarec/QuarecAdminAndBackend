import React, { useState } from "react";
import { Table, Card, CardTitle, CardBody, Col, Button } from "reactstrap";
import { constants as CONSTS } from "../../../components/constants/constants";
import EmptyView from "../../../components/Custom/EmptyView";
import AddBreakingNews from "./addBreakingNews";
import BreakingNew from "../../../assets/images/breaking-news.png";

const BreakingNews = () => {
  const [addBreakingnewsModal, setBreakingnewsModal] = useState(false);

  const handleShowNewsModal = () => {
    setBreakingnewsModal(true);
  };

  const handleCloseNewsModal = () => {
    setBreakingnewsModal(false);
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
                Breaking News
              </span>
              <Button
                type="submit"
                name="btn"
                onClick={handleShowNewsModal}
                style={{
                  margin: "20px 0px 10px 20px",
                }}
              >
                Add Breaking News
              </Button>
              {AddBreakingNews(addBreakingnewsModal, handleCloseNewsModal)}
            </CardTitle>
            <CardBody>
              <Table hover>
                <thead>
                  <tr className="text-center">
                    <th>Sr.NO</th>
                    <th>Tittle</th>
                    <th>Breaking News</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={19}>
                      <EmptyView
                        title={"Sorry!"}
                        discription={"No News Found"}
                        bgcolor={"white"}
                        src={BreakingNew}
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

export default BreakingNews;
