import React, { useEffect, useState } from "react";
import { List, Card } from "antd";
import phone from "@/static/items/default.jpg";

export default function CardItem(props) {
  let [item, setItem] = useState({});
  function defaultImg(src) {
    // 当图片不存在时候使用默认图片
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = function () {
        resolve(src);
      };
      img.onerror = function () {
        resolve(phone);
      };
    });
  }
  useEffect(() => {
    let list = props.item;
    defaultImg(list.cover).then((res) => {
      list.cover = res;
      setItem(list);
    });
  }, []);
  return (
    <List.Item>
      <Card className="list-card">
        <img className="goodsImg" src={item.cover} alt="手机" />
        <h5 style={{ height: "54px" }}>{item.name}</h5>
        <p className="price">￥{item.price}</p>
      </Card>
    </List.Item>
  );
}
