const routers = [
    {
        path: '/',
        name:'index',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/contact_views/index.vue'], resolve)
    }
];
export default routers;