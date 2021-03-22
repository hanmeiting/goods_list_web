import axios from "axios";
import qs from "qs";
import { message } from "antd";
import Cookies from "js-cookie";
const http = axios.create({
  baseURL: "/api",
  withCredentials: true,
  transformRequest: (data) => {
    return qs.stringify(data);
  },
});
http.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      message.error(res.data.message);
      return Promise.reject(res.data);
    }
    return res.data;
  },
  (err) => {
    message.error("服务器异常，请重试");
    return Promise.reject(err);
  }
);

export default http;
