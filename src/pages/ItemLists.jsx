import { List, Card } from "antd";
import "@/static/css/list.css";
import { useEffect, useState } from "react";
import { getItems } from "../store/actios/api";
import CardItem from "../commponents/CardItem";
function ItemLists(props) {
  let [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((res) => {
      const data = res.data.elements || [];
      setItems(data);
    });
  }, []);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={items}
      renderItem={(item) => {
        return <CardItem item={item} />;
      }}
    />
  );
}

export default ItemLists;
