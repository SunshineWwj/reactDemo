import React from "react";
import HomeHooks from "../homeHooks";
import Rate from "../rate";
import ReactRedux from "../ReactRedux";
import { Routes } from "./routerManager";
import TableQuery from "../TableQuery";
import RefsDemo from '../RefsDemo'
const routes = new Routes({
  hooks: {
    url: "/hooks", 
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
  refs: {
    url: "/refs",
    title: "ref学习",
    component: RefsDemo,
  },
});
const routeKeys = Object.keys(routes);
console.log('routeKeys:',routeKeys)
const routeValue = Object.values(routes);
routeValue.forEach((c, i) => {
  c.goPath = `/${routeKeys[i]}`;
});
console.log(routeValue);
export default routeValue;
