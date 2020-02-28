import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Money from '@/views/money.vue'
import Labels from '@/views/labels.vue'
import Statistics from '@/views/statistics.vue'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/money'
    },
    {
        path:'/money',
        component:Money
    },
    {
        path:'/labels',
        component: Labels

    },
    {
        path:'/statistics',
        component: Statistics

    },
    {
        path: '*',
        component: NotFound
    }

    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    routes
});

export default router;
