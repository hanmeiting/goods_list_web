import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "@/static/images/logo.png";
import { getCategroies } from "../store/actios/api";
import { useEffect, useState } from "react";
const { Header, Content } = Layout;
const menus = [
  { id: 1, name: "手机" },
  { id: 2, name: "电脑" },
  { id: 3, name: "电视" },
];

function LayoutCom(props) {
  let [menus, setMenus] = useState([]);

  useEffect(() => {
    // 生命周期：只在初始化时候执行
    getCategroies().then((res) => {
      setMenus(res.data || []);
    });
  }, []);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="operate">
          <Link className="operate-link" to="/home">
            <span>个人中心</span>
          </Link>
          <Link className="operate-link" to="/page/addItem">
            <span>添加商品</span>
          </Link>
          <Link className="operate-link" to="/page/login">
            <span>登录</span>
          </Link>
          <Link className="operate-link" to="/page/register">
            <span>注册</span>
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {menus.map((menu) => {
            return <Menu.Item key={menu.id}>{menu.name}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "20px 50px" }}>{props.children}</Content>
    </Layout>
  );
}

export default LayoutCom;
