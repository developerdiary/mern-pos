import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { DeleteOutlined } from "@ant-design/icons";
import { Table } from "antd";

const Itempage = () => {
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (id, record) => <DeleteOutlined style={{ cursor: "pointer" }} />,
    },
  ];

  return (
    <DefaultLayout>
      <h1>Item List</h1>
      <Table columns={columns} dataSource={itemsData} />
    </DefaultLayout>
  );
};

export default Itempage;
