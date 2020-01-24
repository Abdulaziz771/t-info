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
            path: '/home',
            name: 'home',
            component: () => import('./mainLayouts/Home'),
        }
    ]
});