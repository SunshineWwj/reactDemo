export const menus = [
  {
    title: "目录一",
    pinyin: "submenu1",
    key: "s1",
    icon: "AppleOutlined",
    items: [
      {
        title: "Hooks",
        pinyin: "shouye",
        key: "dm1",
        url: "/hooks",  //浏览器中显示的路由
      },
      {
        title: "评分",
        pinyin: "pingfen",
        key: "dm2",
        url: "/rate",
      },
    ],
  },
  {
    title: "目录二",
    pinyin: "submenu2",
    key: "s2",
    icon: "WindowsOutlined",
    items: [
      {
        title: "rexux",
        pinyin: "redux",
        key: "rx1",
        url: "/reactRedux",
      },
    ],
  },
  {
    title: "表格",
    pinyin: "biaoge",
    key: "s3",
    icon: "WindowsOutlined",
    items: [
      {
        title: "表格测试",
        pinyin: "biaogeceshi",
        key: "dm6",
        url: "/tableQuery",
      },
      {
        title: "refs学习",
        pinyin: "refs",
        key: "dm7",
        url: "/refs",
      },
    ],
  },
];
