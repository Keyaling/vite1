<template>
<div class="container">
    <h1>這是單一產品頁面</h1>
    <h2>{{ product.title }}</h2>
    <img :src="product.imageUrl" class="img-fluid" alt="">
</div>
</template>

<script>
const {VITE_APP_URL, VITE_APP_PATH} = import.meta.env;
export default {
    data (){
        return{
            product:{},
        };
    },
    methods:{
        getProduct(){
            // console.log(this.$route.params);
            const{id}= this.$route.params;
            this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
            .then((res) =>{
                // console.log(res);
                this.product= res.data.product;
            }).catch((err) =>{
                alert(err.response.data.message);
            })
        }
    },
    mounted (){
        this.getProduct ();
    }
}
</script>