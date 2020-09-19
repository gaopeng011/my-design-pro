import Home from "./views/Home";

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Bar = { template: "<div>bar</div>" };
const User = {
  template:
    "<div>User {{ $route.params.id }} Pass {{ $route.params.pass }}</div>",
};

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: "/home", component: Home, name: "1" },
  { path: "/bar", component: Bar },
  { path: "/user/:id/pass/:pass", component: User },
];

export default routes;
