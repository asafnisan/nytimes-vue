import Vue from 'vue';
import VueRouter from 'vue-router';
import CategoryList from '../components/CategoryList.vue';
import CategoryListItem from '../components/CategoryListItem.vue';
import Hello from '../components/Hello.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/category-list',
            component: CategoryList,
        },
        {
            path: '/hello',
            component: Hello
        }
    ]
})

export default router;