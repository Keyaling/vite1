<template>
    <div class="container">
    這是購物車頁面
    <div class="text-end">
                <button class="btn btn-outline-danger" @click="deleteAllCarts()" type="button">清空購物車</button>
            </div>

            <table class="table align-middle">
                <thead>
                <tr>
                    <th style="width: 100px"></th>
                    <th style="width: 200px">品名</th>
                    <th style="width: 150px">數量/單位</th>
                    <th style="width: 150px">單價</th>
                </tr>
                </thead>
                <tbody>
                <template v-if="cart.carts">
                    <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCartItem(item)" :disabled="item.id === loadingItem">
                        <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                        x
                        </button>
                    </td>
                    <td>
                        {{ item.product.title }}
                        <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                        </div>
                    </td>
                    <td>
                        <div class="input-group input-group-sm">
                            <select name="" id="" class="form-control" v-model="item.qty"  :disabled="item.id === loadingItem"
                            @change="updateCartItem(item)">
                                <option :value="i" v-for="i in 20" :key="i + '12345678'">{{i}}</option>
                            </select>
                        </div>
                    </td>
                    <td class="text-end">
                        <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                        {{ item.final_total }}
                    </td>
                    </tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="3" class="text-end">總計</td>
                    <td class="text-end">{{ cart.total  }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                    <td colspan="3" class="text-end text-success">折扣價</td>
                    <td class="text-end text-success">{{ cart.final_total }}</td>
                </tr>
                </tfoot>
            </table>
    </div>
</template>

<script>

const {VITE_APP_URL, VITE_APP_PATH} = import.meta.env;

export default {
    data() {
        return{
            products:[],
            productId:'',
            cart:{},
            loadingItem:'',//存id
        }
    },
    methods:{
        getCarts() {
            this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
                .then(res => {
                    //console.log('購物車:', res.data.data);
                    this.cart = res.data.data;
                })
        },
        updateCartItem(item) {//這裡有兩個id:一個是購物車的id；另一個是產品本身的id
            const data = {
                    product_id: item.product.id,//此為產品的id
                    qty: item.qty,
            };
            // console.log(data, item.id)
            this.loadingItem = item.id;
            this.$http.put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, {data})//這裡的id的是購物車裡的id
                .then(res => {
                    //console.log('更新購物車:', res.data.data);
                    this.getCarts();
                    let loader = this.$loading.show();
                        // simulate AJAX
                    setTimeout(() => {
                            loader.hide()
                    }, 500)                     
                    this.loadingItem = '';
                })            
        },
        deleteCartItem(item) {
            this.loadingItem = item.id;
            this.$http.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
                .then(res => {
                    let loader = this.$loading.show();
                        // simulate AJAX
                    setTimeout(() => {
                            loader.hide()
                    }, 500)                   
                    //console.log('刪除購物車:', res.data.data);
                    this.loadingItem = '';
                    this.getCarts();
                })            
        },
        deleteAllCarts() {
            this.$http.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
                .then(res => {
                    let loader = this.$loading.show();
                        // simulate AJAX
                    setTimeout(() => {
                            loader.hide()
                    }, 500)
                    //console.log('清空購物車:', res.data.data);
                    this.loadingItem = '';
                    this.getCarts();
                })            
        },
    },
    mounted() {
        this.getCarts();
    }

}
</script>