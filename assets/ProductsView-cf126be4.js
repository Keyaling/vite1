import{_ as p,e as h,r as P,o as s,c as n,d as c,a as t,F as m,f as T,t as b,b as E,w as V}from"./index-85180728.js";const{VITE_APP_URL:i,VITE_APP_PATH:d}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"et-case",VITE_TEXT:"這是產品的環境",BASE_URL:"/vite1/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{products:[]}},components:{RouterLink:h},methods:{getProducts(){this.$http.get(`${i}/api/${d}/products/all`).then(o=>{this.products=o.data.products})},addToCart(o){const a={product_id:o,qty:1};this.$http.post(`${i}/api/${d}/cart`,{data:a}).then(r=>{console.log(r)})}},mounted(){this.getProducts()}},f={class:"container text-center"},g={class:"table"},k=["src"],x=["onClick"];function y(o,a,r,A,l,u){const _=P("RouterLink");return s(),n("div",f,[c(" 這是產品列表頁面 "),t("table",g,[t("tbody",null,[(s(!0),n(m,null,T(l.products,e=>(s(),n("tr",{key:e.id},[t("td",null,b(e.title),1),t("td",null,[t("img",{src:e.imageUrl,width:"200",height:"120",alt:""},null,8,k)]),t("td",null,[E(_,{to:`/product/${e.id}`,class:"btn btn-outline-secondary"},{default:V(()=>[c("產品細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:L=>u.addToCart(e.id)},"加入購物車",8,x)])]))),128))])])])}const v=p($,[["render",y]]);export{v as default};
