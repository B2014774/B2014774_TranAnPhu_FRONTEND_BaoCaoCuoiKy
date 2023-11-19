<template>
    <ProductList 
        :products="product"
    />
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/services/product.service";

export default {
    data() {
        return {
            product: [],
        }
    },

    components: {
        ProductList,
    },

    methods: {
        async retrieveProducts() {
            try {
                this.product = await ProductService.getAll();
                console.log(this.product);
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