import Home from "./views/Home";

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Bar = { template: "<div>bar</div>" };
const UserProfile = { template: "<div>UserProfile</div>" };
const UserPosts = { template: "<div>UserPosts</div>" };
const User = {
  template: `
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
`,
};

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: "/home", component: Home, name: "1" },
  { path: "/bar", component: Bar },
  {
    path: "/user/:id/",
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: "profile",
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: "posts",
        component: UserPosts,
      },
    ],
  },
];

export default routes;
