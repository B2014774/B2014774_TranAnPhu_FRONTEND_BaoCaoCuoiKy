<script>
export default {
    props: {
        products: { type: Array, default: [] },
        // ActiveIndex: { type: Number, default: -1},
    },
    // emits: ["update:activeIndex"],
    // methods: {
    //     updateActiveIndex(index) {
    //         this.$emit("update:activeIndex", index);
    //     }
    // }
};
</script>

<template>
    <div class="" v-for="(product, index) in products">
        <div>
        <div class="info-left">
            <div class="img-container"><img :src="product.HinhHH.linkHinh" alt=""></div>
        </div>
        <div class="info-right">
            <dl>
                <dd></dd>
                <dd class="detailField">Mã mặt hàng:</dd>
                <dd class="detailValue">{{ product.MSHH }}</dd>
                <dd></dd>
                <dd class="detailField">Tên sách:</dd>
                <dd class="detailValue">{{ product.TenHH }}</dd>
                <dd></dd>
                <dd class="detailField">Mô tả:</dd>
                <dd class="detailValue">{{ product.MoTaHH }}</dd>
                <dd></dd>
                <dd class="detailField">Giá: </dd>
                <dd class="detailValue">{{ product.Gia}}</dd>
                <dd></dd>
                <dd class="detailField">Ghi chú</dd>
                <dd class="detailValue">{{ product.GhiChu }}</dd>
                <dd></dd>
            </dl>
        </div>
            <!-- <button @click="ActiveIndex = index">Chi tiết</button> -->
        </div>
        <hr/>
    </div>
</template>

<style scoped>
.info-left {
    padding-right: 40px;
}

.info-left .img-container {
    overflow: hidden;
    height: 180px;
    width: 120px;
}

.info-left img {
    width: 100px;
    display: block;
    top: 25%;
    left: 25%;
}

.info-left, .info-right{
    display: table-cell;
    vertical-align: top;
}

.info-right {
    font-size: 14px;
    width: 1000px;
}

.info-right {
    zoom: 1;
    overflow: hidden;
}

.info-right .dd {
    float: left;
    white-space: pre-line;
}

.detailField {
    width: 30%;
    display: inline-flex;
}

.detailValue {
    width: 70%;
    display: inline;
}

</style>