<template>
<div class="container d-flex justify-content-center p-3">
    這是前台頁面
    <RouterLink to="/">Home</RouterLink>|
    <RouterLink to="/about">About</RouterLink>|
    <RouterLink to="/products">產品列表頁面</RouterLink>|
    <RouterLink to="/cart">購物車頁面</RouterLink>|
    <RouterLink to="/admin/products">後臺產品列表</RouterLink>|
    <hr>
</div>
    <RouterView></RouterView>  
    
</template>

<script>
import { RouterView } from 'vue-router'
export default {
    components: {
        RouterView,
    }
}
</script>