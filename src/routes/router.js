import Vue from 'vue'
import Router from 'vue-router'
import { sessionFunc } from './index'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { name: 'home' },
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../mainLayouts/Auth'),
            redirect: { name: 'login' },
            meta: { requiresAuth: false },
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('../authorization/Login'),
                    meta: {
                        requiresAuth: false,
                        onlyWhenLoggedOut: true
                    },
                },
                {
                    path: '/login-company',
                    name: 'login-company',
                    component: () => import('../authorization/LoginCompany'),
                    meta: {
                        requiresAuth: false,
                        onlyWhenLoggedOut: true
                    },
                },
                {
                    path: '/signin',
                    name: 'signin',
                    component: () => import('../authorization/Signin'),
                    meta: {
                        requiresAuth: false,
                        onlyWhenLoggedOut: true
                    },
                }
            ]
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../mainLayouts/Main'),
            redirect: { name: 'interface-orgs' },
            meta: { requiresAuth: false },
            children: [
                {
                    path: '/search',
                    name: 'interface-orgs',
                    component: () => import('../view/InterfaceOrgsView'),
                    meta: { requiresAuth: false },
                },
                {
                    path: '/details-org/:id',
                    name: 'details-org',
                    component: () => import('../view/DetailsOrgView'),
                    meta: { requiresAuth: false },
                },
                {
                    path: '/category',
                    name: 'category',
                    component: () => import('../view/CategoryOrgsView'),
                    meta: { requiresAuth: false },
                },
                {
                    path: '/personal-area',
                    name: 'personal-area',
                    component: () => import('../view/PersonalAreaView'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/user-orgs',
                    name: 'user-orgs',
                    component: () => import('../view/UserOrgsView'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/add-org',
                    name: 'add-org',
                    component: () => import('../view/AddOrgView'),
                    meta: { requiresAuth: true },
                },
            ]
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../mainLayouts/Home'),
            meta: { requiresAuth: false }
        }
    ]
});

router.beforeEach(sessionFunc);

export default router