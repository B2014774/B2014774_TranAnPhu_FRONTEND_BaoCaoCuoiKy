import { createWebHistory, createRouter } from "vue-router";

import Library from "@/views/Library.vue"
const routes = [
    //Trang thư viện
    {
        path: "/",
        name: "library",
        component: Library,
    },

    // //Trang giới thiệu
    // {
    //     path: "/introduction",
    //     name: "library.introduction",
    //     component: Introduction,
    // },

    // //Trang thống kê
    // {
    //     path: "/dataChart",
    //     name: "library.chart",
    //     component: DataChart,
    // },

    // //Trang thêm sách
    // {
    //     path: "/addBook",
    //     name: "library.add",
    //     component: AddBook,
    // },

    // //Trang chỉnh sửa thông tin sách
    // {
    //     path: "/editBook/:id",
    //     name: "library.edit",
    //     component: () => import('../views/BookEdit.vue'),
    //     props: true
    // },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;