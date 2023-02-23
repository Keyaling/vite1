<template>
<div class="container d-flex justify-content-center p-3">
    這是後台頁面
    <RouterLink to="/admin/products">後臺產品列表</RouterLink>|
    <RouterLink to="/admin/orders">後臺訂單列表</RouterLink>|
    <RouterLink to="/">回前台頁面</RouterLink>|
    <a href="#" @click.prevent="logout">登出頁面</a>
    <hr>
</div> 
    <RouterView></RouterView>

</template>

<script>
const {VITE_APP_URL} = import.meta.env;
import { RouterView } from 'vue-router';
export default {
    components: {
        RouterView,
    },
    methods:{
        logout (){
            // 將cookie清掉
            document.cookie = `etToken=; expires=${new Date()};`;
            this.$router.push('/login');          
        },
        checkLogin() {
            // 取出 Token
            const token =  document.cookie.replace(/(?:(?:^|.*;\s*)etToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            this.$http.defaults.headers.common['Authorization'] = token;

            this.$http.post(`${VITE_APP_URL}/api/user/check`)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    alert(err.response.data.message);
                //     // console.dir(err);
                //     //登入失敗即立刻回到登入頁面
                    this.$router.push('/login'); 
                })
            },
    },
    mounted() {
        //打開頁面後立即啟動checkLogin()此方法
        this.checkLogin();
    },
}
</script>