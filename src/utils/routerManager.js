const stringFormat = (str, ...args) => {
  if (typeof str !== "string")
    throw new Error("Expected first argument to be a string");
  return str.replace(/{(\d+)}/g, (match, index) =>
    typeof args[index] === "undefined" ? match : args[index]
  );
};

const combineUrl = (pageUrl, url) => {
  const pageUrlArray = pageUrl.split("/").filter((i) => i);
  return pageUrlArray.length > 0 ? `/${pageUrlArray.join("/")}${url}` : url;
};

/**
 * 页面内路由，用于管理页面内操作路由设置
 * @param routes    路由数据，required
 *      Array[{
 *          url:    string required，路由匹配，通常用于 react-route path 匹配
 *          title:  string required，路由名，通常用于面包屑展示
 *          format: string，路由跳转URL
 *      }]
 * @param pagePath  页面URL
 * @return Routes
 *      Array[{
 *          url:    function，@return @param.pageUrl + @param.url
 *          title:  string，@param.title
 *          format: function，@return @param.pageUrl + (@param.format || @param.url)
 *      }]
 *
 * @example
 const routes = new Routes({
        query: {
            url: '/',
            title: '采购订单列表'
        },
        detail: {
            url: '/:id/detail',
            title: '订单详情',
            format: '/{0}/detail'
        },
    }, '/saleOrder');

 routes.query.title      // 采购订单列表
 routes.query.url()      // '/saleOrder'
 routes.query.format()   // '/saleOrder'

 routes.detail.title                 // 订单详情
 routes.detail.url()                 // '/saleOrder/:id/detail'
 routes.detail.format('order_id_1')  // '/saleOrder/order_id_1/detail'

 * @description 支持路由层级
 *  eg. /:id -> /:id/detail
 *      /:id -> /:id/edit
 *      /:id -> /:id/detail -> /:id/detail/:detailId -> /:id/detail/:d_id/edit
 */
export class Routes {
  constructor(routes, pagePath) {
      console.log('routes:',routes)
    Object.defineProperty(this, "pageUrl", {
      value: pagePath || "/",
      writable: true,
      enumerable: false,
    });
    Object.getOwnPropertyNames(routes).forEach((key) => {
      this[key] = {
        title: routes[key].title,
        exact: routes[key].exact,
        url: () => combineUrl(this.pageUrl, routes[key].url),
        format: (...args) =>
          combineUrl(
            this.pageUrl,
            routes[key].format
              ? stringFormat(routes[key].format, ...args)
              : routes[key].url
          ),
        component: () => {
          return routes[key].component;
        },
      };
    });
  }

  setPageUrl(url) {
    this.pageUrl = url;
  }
}

const privateRoutes = {};

class RouteManager {
  // 在 bootstraper 方法内调用
  setRoutes({ namespace, routes }) {
    privateRoutes[namespace || "/"] = routes;
  }

  // 使用 Hash 路由模式时，通过解析 window.location 得到与 react-router 一致的 location
  getLocation() {
    const locationSplitArray = window.location.hash.split("?");
    const location = {
      pathname: locationSplitArray[0]
        ? locationSplitArray[0].replace("#", "")
        : "/",
      search: locationSplitArray[1] ? `?${locationSplitArray[1]}` : "",
    };
    return location;
  }

  // 获取路由信息，不包含 menuPath 中的内容
  getPagePath({ namespace, location = this.getLocation(), routes }) {
    if (!routes) routes = privateRoutes[namespace || "/"];
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const urlArray = [];
    pathSnippets.forEach((item, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      let flag = true; // 表示是否需要进行正则表达式校验
      // 字符串相等校验
      for (const key in routes) {
        const title = routes[key].title;
        if (routes[key].url() === url && title) {
          urlArray.push({
            url,
            title,
          });
          flag = false; // 字符串匹配成功，无需正则表达式校验
        }
      }
      // 正则表达式匹配
      if (flag)
        for (const key in routes) {
          /*eslint-disable no-useless-escape */
          const pattern = new RegExp(
            `^${routes[key].url().replace(/:\w+/g, "([_. @&a-zA-Z0-9-]+)")}$`
          );
          const title = routes[key].title;
          if (pattern.test(url) && title)
            urlArray.push({
              url,
              title,
            });
        }
    });
    return urlArray;
  }

  // 获取父级页面 url，是节点入口页则返回 '/'
  getParentUrl(options) {
    const paths = this.getPagePath(options || {});
    return paths.length >= 2 ? paths[paths.length - 2].url : "/";
  }
}

const routeManager = new RouteManager();

export default routeManager;
