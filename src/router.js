import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { name: 'auth' }
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('./mainLayouts/Auth'),
            redirect: { name: 'login' },
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('./authorization/Login')
                },
                {
                    path: '/login-company',
                    name: 'login-company',
                    component: () => import('./authorization/LoginCompany')
                },
                {
                    path: '/signin',
                    name: 'signin',
                    component: () => import('./authorization/Signin')
                }
            ]
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./mainLayouts/Main'),
            redirect: { name: 'interface-orgs' },
            children: [
                {
                    path: '/search',
                    name: 'interface-orgs',
                    component: () => import('./view/InterfaceOrgsView')
                },
                {
                    path: '/details-org/:id',
                    name: 'details-org',
                    component: () => import('./view/DetailsOrgView')
                },
                {
                    path: '/category',
                    name: 'category',
                    component: () => import('./view/CategoryOrgsView')
                },
                {
                    path: '/personal-area',
                    name: 'personal-area',
                    component: () => import('./view/PersonalAreaView')
                },
                {
                    path: '/user-orgs',
                    name: 'user-orgs',
                    component: () => import('./view/UserOrgsView')
                },
                {
                    path: '/add-org',
                    name: 'add-org',
                    component: () => import('./view/AddOrgView')
                },
            ]
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./mainLayouts/Home'),
        }
    ]
});