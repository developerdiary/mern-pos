import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { Row, Col } from "antd";
import ItemList from "../components/ItemList";

const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await axios.get("/api/items/get-items");
        setItemsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);

  const listItems = itemsData.map((item) => (
    <Col xs={24} lg={6} md={12} sm={6} key={Math.random()}>
      <ItemList item={item} />
    </Col>
  ));

  return (
    <DefaultLayout>
      <Row>{listItems}</Row>
    </DefaultLayout>
  );
};

export default Homepage;
