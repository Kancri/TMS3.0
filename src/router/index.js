import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue-Router升级导致的Uncaught (in promise)问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//     if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//     return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../page/loding.vue')
    },
    {
        path: '/loding',
        name: 'loding',
        component: () =>
            import ('../page/loding.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('../page/profile.vue')
    },
    {
        path: '/receive',
        name: 'receive',
        component: () =>
            import ('../page/receive.vue')
    },
    {
        path: '/mainpage/recmod.vue',
        name: 'recmod',
        component: () =>
            import ('../page/mainpage/recmod.vue')
    },
    {
        path: '/mainpage/picmod.vue',
        name: 'picmod',
        component: () =>
            import ('../page/mainpage/picmod.vue')
    },
    {
        path: '/mainpage/delmod.vue',
        name: 'delmod',
        component: () =>
            import ('../page/mainpage/delmod.vue')
    },

]

const router = new VueRouter({
    // mode:'hash',
    routes
})

export default router