import React from "react";
import { Card } from "antd";

const ItemList = ({ item }) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt={item.name} src={item.image} style={{ height: 250 }} />}
      >
        <Meta title={item.name} />
      </Card>
    </div>
  );
};

export default ItemList;
