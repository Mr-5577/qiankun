// 引入所需的依赖文件
import * as React from "react";
import { useRoutes } from "react-router-dom";
// 引入所需要路由的页面
import Home from "../views/home";
import Test from "../views/test";
import App from "../App";
const rootRouter = [
  {
    path: "/",
    element: <Home></Home>,
    children: [{ path: "/App", element: <App /> }],
  },
  {
    path: "/ReactTest",
    element: <Test />,
  },
];

const Router = () => {
  const routers = useRoutes(rootRouter);
  return routers;
};

export default Router;
