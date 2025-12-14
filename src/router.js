import { createRouter, createWebHistory } from 'vue-router';
import BlockAcceil from './components/BlockAcceil.vue';
import APropos from './components/APropos.vue';
import ProjetP from './components/ProjetP.vue';
import ContactMe from './components/ContactMe.vue';

const routes = [
    {
        path: '/',
        name: 'BlockAcceil',
        component: BlockAcceil
    },
    {
        path: '/apropos',
        name: 'APropos',
        component: APropos
    },
    {
        path: '/projetp',
        name: 'ProjetP',
        component: ProjetP
    },
    {
        path: '/contactme',
        name: 'ContactMe',
        component: ContactMe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

