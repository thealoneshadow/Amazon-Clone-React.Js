(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{15:function(e,a){},32:function(e,a,t){e.exports=t(57)},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),i=t.n(r),l=(t(37),t(25)),o=t(7),s=(t(38),t(39),t(27)),m=t.n(s),u=t(29),d=t.n(u),_=t(8);var p=function(){return c.a.createElement("div",{className:"header"},c.a.createElement(_.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(m.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},"Sign In")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"Orders")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your "),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(_.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},"0")))))},g=(t(50),t(51),Object(n.createContext)()),E=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},h=function(){return Object(n.useContext)(g)};var v=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,i=e.rating,l=h(),s=Object(o.a)(l,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(i).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:i}})}},"Add to Basket"))};var f=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(v,{id:"123",title:" Asus Zenbook14 i3 10th Gen. Nvidia 2gb Graphics Card Included",price:29.99,image:"https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg",rating:2}),c.a.createElement(v,{id:"1234",title:" Asus Zenbook14 i5 10th Gen.Nvidia 4gb Graphics Card Included",price:449.99,image:"https://m.media-amazon.com/images/I/51C46YsTJSL._AC_UY218_.jpg",rating:2})),c.a.createElement("div",{className:"home__row"},c.a.createElement(v,{id:"12345",title:" Hp Pavillion i5 10th Gen.Nvidia 6gb Graphics Card Included",price:519.99,image:"https://m.media-amazon.com/images/I/61471KxOgRL._AC_UY218_.jpg",rating:5}),c.a.createElement(v,{id:"123456",title:"ASUS ROG Maximus XII Hero Z490 (WiFi 6) v5.1, Triple M.2, Aura Sync)",price:129.99,image:"https://m.media-amazon.com/images/I/81EFM7JVPKL._AC_UY218_.jpg",rating:4}),c.a.createElement(v,{id:"1234567",title:" Asus Rog2 Strix i7 10th Gen. Nvidia 2080 6gb with 2Ram slots",price:1309.99,image:"https://m.media-amazon.com/images/I/811QpiYXe-L._AC_UY218_.jpg",rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(v,{id:"12345678",title:"ASUS ROG Zephyrus G14 14 VR Ready 120Hz FHD Gaming Laptop,8Core AMD Ryzen 9 4900HS(Beat i7-10750H),16GB RAM,1TB PCIe SSD,Backlight,Wi-Fi 6,USB C,NVIDIA GeForce RTX2060 Max-Q,Win10 (Moonlight White)",price:139.999,image:"https://m.media-amazon.com/images/I/71zNU5UBINL._AC_UY218_.jpg",rating:4}))))},N=t(1),b=(t(52),t(53),t(30)),O=t.n(b),k=t(20),A=t(10),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},j=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(k.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:a.user});default:return e}};var S=function(){var e=h(),a=Object(o.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(O.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:C(t),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to Checkout"))};var I=function(){return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/17_06_2020/V209073725_IN_PC_Microsoft_COOP_refreshing_Baneers_1500x200_2.jpg",alt:""}),c.a.createElement("div",{className:"checkout__title"},c.a.createElement("h2",null,"Your Shopping Basket"))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(S,null)))},w=(t(55),t(15));var y=function(){var e=Object(N.f)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],i=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],u=s[1];return c.a.createElement("div",{className:"login"},c.a.createElement(_.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),w.auth.signInWithEmailAndPassword(r,m).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),w.auth.createUserWithEmailAndPassword(r,m).then((function(a){a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))};var B=function(){var e=h(),a=Object(o.a)(e,2);return Object(l.a)(a[0]),a[1],c.a.createElement(_.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/login"},c.a.createElement(y,null)),c.a.createElement(N.a,{path:"/checkout"},c.a.createElement(p,null),c.a.createElement(I,null)),c.a.createElement(N.a,{path:"/"},c.a.createElement(p,null),c.a.createElement(f,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{initialState:{basket:[],user:null},reducer:j},c.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0b5c4f62.chunk.js.map