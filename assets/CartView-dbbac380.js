import{_ as y,o as n,c as d,b as p,a as t,F as x,f as m,g as c,t as i,h as C,v as I}from"./index-6fa89d4a.js";const{VITE_APP_URL:r,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"et-case",VITE_TEXT:"這是產品的環境",BASE_URL:"/vite1/",MODE:"production",DEV:!1,PROD:!0},b={data(){return{products:[],productId:"",cart:{},loadingItem:""}},methods:{getCarts(){this.$http.get(`${r}/api/${h}/cart`).then(e=>{this.cart=e.data.data})},updateCartItem(e){const a={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${r}/api/${h}/cart/${e.id}`,{data:a}).then(u=>{this.getCarts();let g=this.$loading.show();setTimeout(()=>{g.hide()},500),this.loadingItem=""})},deleteCartItem(e){this.loadingItem=e.id,this.$http.delete(`${r}/api/${h}/cart/${e.id}`).then(a=>{let u=this.$loading.show();setTimeout(()=>{u.hide()},500),this.loadingItem="",this.getCarts()})},deleteAllCarts(){this.$http.delete(`${r}/api/${h}/carts`).then(e=>{let a=this.$loading.show();setTimeout(()=>{a.hide()},500),this.loadingItem="",this.getCarts()})}},mounted(){this.getCarts()}},v={class:"container"},f={class:"text-end"},T={class:"table align-middle"},V=t("thead",null,[t("tr",null,[t("th",{style:{width:"100px"}}),t("th",{style:{width:"200px"}},"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{style:{width:"150px"}},"單價")])],-1),k=["onClick","disabled"],P={key:0,class:"text-success"},$={class:"input-group input-group-sm"},E=["onUpdate:modelValue","disabled","onChange"],w=["value"],A={class:"text-end"},D={key:0,class:"text-success"},U=t("td",{colspan:"3",class:"text-end"},"總計",-1),q={class:"text-end"},B={key:0},L=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),R={class:"text-end text-success"};function N(e,a,u,g,o,_){return n(),d("div",v,[p(" 這是購物車頁面 "),t("div",f,[t("button",{class:"btn btn-outline-danger",onClick:a[0]||(a[0]=s=>_.deleteAllCarts()),type:"button"},"清空購物車")]),t("table",T,[V,t("tbody",null,[o.cart.carts?(n(!0),d(x,{key:0},m(o.cart.carts,s=>(n(),d("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:l=>_.deleteCartItem(s),disabled:s.id===o.loadingItem}," x ",8,k)]),t("td",null,[p(i(s.product.title)+" ",1),s.coupon?(n(),d("div",P," 已套用優惠券 ")):c("",!0)]),t("td",null,[t("div",$,[C(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":l=>s.qty=l,disabled:s.id===o.loadingItem,onChange:l=>_.updateCartItem(s)},[(n(),d(x,null,m(20,l=>t("option",{value:l,key:l+"12345678"},i(l),9,w)),64))],40,E),[[I,s.qty]])])]),t("td",A,[o.cart.final_total!==o.cart.total?(n(),d("small",D,"折扣價：")):c("",!0),p(" "+i(s.final_total),1)])]))),128)):c("",!0)]),t("tfoot",null,[t("tr",null,[U,t("td",q,i(o.cart.total),1)]),o.cart.final_total!==o.cart.total?(n(),d("tr",B,[L,t("td",R,i(o.cart.final_total),1)])):c("",!0)])])])}const F=y(b,[["render",N]]);export{F as default};
