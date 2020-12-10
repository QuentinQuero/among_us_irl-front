import Vue from 'vue';
import Router from 'vue-router'
import LoginPage from "@/components/unloggedModules/Pages/LoginPage";
import SignUpPage from "@/components/unloggedModules/Pages/SignUpPage";
import HomePage from "@/components/homeModule/Pages/HomePage";
import online from "@/layouts/online";
import offline from "@/layouts/offline";
import AdminPage from "@/components/adminModule/Pages/AdminPage";
Vue.use(Router);

// Define all routes
let router = new Router ({
   mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            meta: {
                layout: offline,
                guest: true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpPage,
            meta: {
                layout: offline,
                guest: true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage,
            meta: {
                layout: online,
                requiresAuth: true
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminPage,
            meta: {
                layout: online,
                requiresAuth: true,
                is_admin: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (sessionStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            if(to.matched.some(record => record.meta.is_admin)) {
                if (sessionStorage.getItem('userRole') === 'admin') {
                    next();
                } else {
                    next({name: 'home'});
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(sessionStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'home'})
        }
    }else {
        next()
    }
})

export default router;



