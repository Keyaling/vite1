import{_ as c,o as r,c as a,a as e,t as n}from"./index-85180728.js";const{VITE_APP_URL:i,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"et-case",VITE_TEXT:"這是產品的環境",BASE_URL:"/vite1/",MODE:"production",DEV:!1,PROD:!0},d={data(){return{product:{}}},methods:{getProduct(){const{id:s}=this.$route.params;this.$http.get(`${i}/api/${_}/product/${s}`).then(t=>{this.product=t.data.product}).catch(t=>{alert(t.response.data.message)})}},mounted(){this.getProduct()}},u={class:"container text-center"},p=e("h1",null,"這是單一產品頁面",-1),l=["src"];function h(s,t,P,m,o,E){return r(),a("div",u,[p,e("h2",null,n(o.product.title),1),e("img",{src:o.product.imageUrl,class:"img-fluid",alt:""},null,8,l)])}const f=c(d,[["render",h]]);export{f as default};
