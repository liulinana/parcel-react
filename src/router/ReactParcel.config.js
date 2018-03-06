import DynamicRoute from "./DynamicRoute";
// 渲染页面

export const routes = [
    {
        path: '/ReactParcel1',
        component: DynamicRoute(() => import("../page/ReactParcel1.jsx")),
},
{
    path: '/ReactParcel2',
        component: DynamicRoute(() => import("../page/ReactParcel2.jsx")),
},

]

