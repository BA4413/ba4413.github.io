import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path:"/",
        alias: "/index",
        component: () => import("@/page/index/index.vue")
    },
    {
        path:"/article",
        component: () => import("@/page/article/article.vue")
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router