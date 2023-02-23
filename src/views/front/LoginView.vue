<template>
<div class="container d-flex flex-column">
    <h2>這是登入畫面</h2>
        <form id="form" class="form-signin col-6 m-auto" @submit.prevent="login">
        <!-- 在form上加入v-on事件，就不一定要按下送出表單的按鈕，才能傳送資料，按下enter案件也可傳送表單 -->
            <div class="form-floating mb-3">
                <input type="email" v-model="user.username"  class="form-control" id="email"
                placeholder="name@example.com" required autofocus>
                <!-- v-model雙向綁定，輸入什麼內容，即會渲染什麼內容 -->
                <label for="username">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" v-model="user.password" class="form-control" id="password"
                placeholder="Password" required>
                <!-- v-model雙向綁定，輸入什麼內容，即會渲染什麼內容 -->
                <label for="password">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" id="submit">
            登入
            </button>
        </form>
</div>
</template>

<script>
const {VITE_APP_URL} = import.meta.env;
export default{
    //資料
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    //方法
    methods: {
        login() {
            this.$http.post(`${VITE_APP_URL}/admin/signin`, this.user)
                .then((res) => {
                    const { token, expired } = res.data;//物件解構
                    // console.log(token, expired);
                    //登入成功時，寫入 cookie token
                    document.cookie = `etToken=${token}; expires=${new Date(expired)};`;// expires 設置有效時間
                    this.$router.push('/admin/products');
                }).catch((err) => {
                    alert(err.response.data.message);
                    // console.dir(err);
            });
        },
    },
}
</script>