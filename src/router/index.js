import { createWebHistory, createRouter } from "vue-router";
import LastPosts from "../components/LastPosts.vue";
import Page from "../components/Page.vue";
import Form from "../components/Form.vue";
import Blog from "../components/Blog.vue";
import ErrorComponent from "../components/ErrorComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LastPosts,
  },
  {
    path: "/home",
    name: "Home",
    component: LastPosts,
  },
  {
    path: "/posts",
    name: "Posts",
    component: LastPosts,
  },
  {
    path: "/page/:id?",
    name: "page",
    component: Page,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;