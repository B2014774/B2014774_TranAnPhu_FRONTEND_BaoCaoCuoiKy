<template>
    <ProductList 
        :products="product"
        @submit:product="addDetailProduct"
    />
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import DetailOrderService from "@/services/detailOrder.service";
import ProductService from "@/services/product.service";

export default {
    data() {
        return {
            product: [],
            detailOrder: {},
        }
    },

    components: {
        ProductList,
    },

    methods: {
        async retrieveProducts() {
            try {
                this.product = await ProductService.getAll();
            } catch (error) {
                console.log();
            }
        },

        async addDetailProduct(data) {
            try{
                let GiaDH = data.product.Gia * data.counter;
                this.detailOrder = {
                    MSHH: data.product.MSHH,
                    SoLuong: data.counter,
                    GiaDatHang: GiaDH,
                }
                await DetailOrderService.add(this.detailOrder);
            } catch (error) {
                console.log();
            }
        },

        refreshList() {
            this.retrieveProducts();
        }
    },

    mounted() {
        this.refreshList();
    }
}
</script>