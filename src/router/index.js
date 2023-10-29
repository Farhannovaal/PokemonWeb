import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue"
import NewsView from "../views/NewsView.vue"
// import FavoriteView from "../views/Favorite.vue"
import AboutView from "../views/AboutView.vue"
import IndexView from "../views/Welcome.vue"
const routes = [
  { path: '/', component: IndexView },
  { path: '/dashboard', component: DashboardView },
  { path: '/news', component: NewsView },
  { path: '/about', component: AboutView }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
