import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { Row, Col } from "antd";
import ItemList from "../components/ItemList";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllItems = async () => {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const { data } = await axios.get("/api/items/get-items");
        setItemsData(data);
        dispatch({
          type: "HIDE_LOADING",
        });
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
