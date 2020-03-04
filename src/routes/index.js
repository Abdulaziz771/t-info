export function  sessionFunc(to, from, next) {
    const isPublic = to.matched.some(record => record.meta.requiresAuth);
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
    const loggedIn = !!JSON.parse(localStorage.getItem('auth'));

    if (isPublic && !loggedIn) {
        return next({
            path:'/login',
            query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
        });
    }
    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
        return next('/home')
    }

    next();
}

export function  goBack(to, from, next) {
    next();
}