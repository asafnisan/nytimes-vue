import Vue from 'vue';
import VueRouter from 'vue-router';
import CategoryList from '../components/CategoryList.vue';
import BestSellersList from '../components/BestSellersList.vue';
import ItemDetail from '../components/ItemDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/category-list',
            component: CategoryList,
        },
        {
            path: '/best-sellers/dynamic-category',
            component: BestSellersList,
        },
        {
            path: '/item-detail/dynamic-id',
            component: ItemDetail,
        }
    ]
})

export default router;