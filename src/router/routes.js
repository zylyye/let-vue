import menuConfig from "@/router/menuConfig"

// 登录页面路由
const loginRoute = {
    name: 'login',
    path: '/login',
    component: () => import('@/pages/Login/index.vue')
}

// 404页面路由
const notFoundRoute = {
    name: 'not-found',
    path: '/*',
    component: () => import('@/pages/NotFound/index.vue')
}

let mainRoutes = []


const routeScanner = (menuItems, parentPath) => {
    menuItems.forEach(item => {
        const { name, path, component } = item
        if (!path.startsWith('/')) {
            parentPath += '/'
        }
        const realPath = parentPath + path;
        mainRoutes.push({
            name,
            path: realPath,
            component,
        });
        if (item.children && item.children.length > 0) {
            routeScanner(item.children, realPath)
        }
    })
}


// 根据菜单扫描配置路由
routeScanner(menuConfig, '')

let routes = [
    loginRoute,
    {
        path: '/',
        component: () => import('@/components/AppContainer'),
        children: mainRoutes
    }
]

// 添加404页面路由
mainRoutes.push(notFoundRoute)

export default routes
