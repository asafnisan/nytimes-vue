import Vue from 'vue';
import VueRouter from 'vue-router';
import CategoryList from '../components/CategoryList.vue';
import BestSellersList from '../components/BestSellersList.vue';
import ItemDetail from '../components/ItemDetail.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/category-list',
            component: CategoryList,
        },
        {
            path: '/best-sellers/:categoryName',
            component: BestSellersList,
            props: true,
        },
        {
            path: '/best-sellers/:categoryName/:dynamicId',
            component: ItemDetail,
            props: true,
        },
        {
            path: '/',
            redirect: '/category-list',
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})

export default router;