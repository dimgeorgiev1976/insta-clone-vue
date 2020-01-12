import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/wall',
            component: () => import('@/pages/Wall.vue')
        },
        {
            path: '/post/:id',
            component: () => import('@/components/Post.vue')
        },
        {
            path: '/post/:id/edit',
            component: () => import('@/pages/PostEditor.vue')
        },
        {
            path: '*',
            redirect: '/wall'
        }
    ]
})