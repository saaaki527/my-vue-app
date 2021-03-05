import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import AddFood from "../views/AddFood.vue"
import Memo from "../views/Memo.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-food",
    name: "AddFood",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddFood,
  },
  {
    path: "/memo",
    name: "Memo",
    component: Memo,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
