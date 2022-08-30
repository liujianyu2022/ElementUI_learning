import VueRouter from "vue-router"
import Vue from "vue"

import Home from "@/views/Home/Home"
import Analysis1 from "@/views/Analysis1/Analysis1"
import Analysis2 from "@/views/Analysis2/Analysis2"

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:"/",
            component: Home
        },
        {
            path:"/Analysis1",
            component: Analysis1
        },
        {
            path:"/Analysis2",
            component: Analysis2
        },
    ]
})

export default router