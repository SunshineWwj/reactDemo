import React from "react";
import HomeHooks from "../homeHooks";
import Rate from "../rate";
import ReactRedux from "../ReactRedux";
import { Routes } from "./routerManager";
import TableQuery from "../TableQuery";
const routes = new Routes({
  home: {
    url: "/homeHooks",
    title: "主页",
    component: HomeHooks,
  },
  rate: {
    url: "/rate",
    title: "评分",
    component: Rate,
  },
  reactRedux: {
    url: "/reactRedux",
    title: "redux learn",
    component: ReactRedux,
  },
  tableQuery: {
    url: "/tableQuery",
    title: "表格",
    component: TableQuery,
  },
});
const routeKeys = Object.keys(routes);
const routeValue = Object.values(routes);
routeValue.forEach((c, i) => {
  c.goPath = `/${routeKeys[i]}`;
});
console.log(routeValue);
export default routeValue;
