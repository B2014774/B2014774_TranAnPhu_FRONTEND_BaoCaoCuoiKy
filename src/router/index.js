import { createWebHistory, createRouter } from "vue-router";

import ContactBook from "@/views/ContactBook.vue"
import Staff from "@/views/Staff.vue"
import Product from "@/views/Product.vue"
import AddContact from "@/views/ContactAdd.vue"
const routes = [
    //Trang thư viện
    {
        path: "/",
        name: "contact",
        component: ContactBook,
    },

    //Trang thêm khách hàng
    {
        path: "/addContact",
        name: "contact.add",
        component: AddContact,
    },

    //Trang chỉnh sửa thông tin sách
    {
        path: "/staff",
        name: "staff",
        component: Staff,
    },

    //Trang chỉnh sửa thông tin sách
    {
        path: "/product",
        name: "product",
        component: Product,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;