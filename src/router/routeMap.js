export default [
    {
        path: '/home',
        name: '首页',
        icon: 'el-icon-house',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/basic-tables',
        name: '基础表格',
        icon: 'el-icon-notebook-2',
        children: [
            {
                path: 'simple-table',
                name: '简单表格',
                icon: 'el-icon-tableware'
            },
            {
                path: 'page-table',
                name: '分页表格',
                icon: 'el-icon-tableware'
            },
            {
                path: 'filter-table',
                name: '检索表格',
                icon: 'el-icon-tableware'
            },
        ]
    },
    {
        path: '/tables',
        name: '基础表格1',
        icon: 'el-icon-notebook-2',
        children: [
            {
                path: 'simple-table1',
                name: '简单表格1',
                icon: 'el-icon-tableware'
            },
            {
                path: 'page-table1',
                name: '分页表格1',
                icon: 'el-icon-tableware'
            },
            {
                path: 'filter-table1',
                name: '检索表格1',
                icon: 'el-icon-tableware'
            },
        ]
    },
    {
        path: '/about',
        name: '关于',
        icon: 'el-icon-chat-line-square',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
]
