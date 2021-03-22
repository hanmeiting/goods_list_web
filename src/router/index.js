import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ItemListsPage from "../pages/ItemLists";
import AddItemPage from "../pages/AddItem";
import MessagePage from "../pages/Message";

// 注释
const router = [
  {
    name: "列表",
    path: ["/:type", "/home/:type?"],
    exact: true,
    strict: true,
    render: (props) => {
      return <ItemListsPage {...props}> </ItemListsPage>;
    },
  },
  {
    name: "登录",
    path: "/page/login",
    exact: true,
    strict: true,
    render: (props) => {
      return <LoginPage {...props}> </LoginPage>;
    },
  },
  {
    name: "注册",
    path: "/page/register",
    exact: true,
    strict: true,
    render: (props) => {
      return <RegisterPage {...props}> </RegisterPage>;
    },
  },
  {
    name: "添加",
    path: "/page/addItem",
    exact: true,
    strict: true,
    render: (props) => {
      return <AddItemPage {...props}> </AddItemPage>;
    },
  },
  {
    name: "提示",
    path: "/page/message",
    exact: true,
    strict: true,
    render: (props) => {
      return <MessagePage {...props}> </MessagePage>;
    },
  },
];

export default router;
