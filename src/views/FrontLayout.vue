<template>
<div class="container p-3 text-center">
    <h2>這是「前台」頁面</h2>
    <div>
    <RouterLink to="/">Home</RouterLink>|
    <RouterLink to="/about">About</RouterLink>|
    <RouterLink to="/products">產品列表頁面</RouterLink>|
    <RouterLink to="/cart">購物車頁面</RouterLink>|
    <RouterLink to="/admin/products">後臺產品列表</RouterLink>|
    <hr>
    </div>
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