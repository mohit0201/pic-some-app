(this["webpackJsonppic-some-app"]=this["webpackJsonppic-some-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),l=a(9),o=(a(26),a(1)),u=a(20),m=a(15),s=a(6),f=r.a.createContext();function d(e){var t=e.children,a=Object(n.useState)([]),c=Object(s.a)(a,2),i=c[0],l=c[1],o=Object(n.useState)([]),d=Object(s.a)(o,2),E=d[0],v=d[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),r.a.createElement(f.Provider,{value:{allPhotos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(m.a)(Object(m.a)({},t),{},{isFavorite:!t.isFavorite}):t}));l(t)},addItemsToCart:function(e){v((function(t){return[].concat(Object(u.a)(t),[e])}))},cartItems:E,removeItemsFromCart:function(e){v((function(t){return t.filter((function(t){return t.id!==e}))}))},isOrderPlaced:h,placeOrder:function(){O(!0),setTimeout((function(){v([]),O(!1)}),3e3)}}},t)}var E=function(){var e=Object(n.useContext)(f).cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line";return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h2",null,"Pic Some")),r.a.createElement(l.b,{to:"/cart"},r.a.createElement("i",{className:"".concat(e," ri-fw ri-2x")})))},v=a(7),p=a.n(v);var b=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useRef)(null);function i(){r(!0)}function l(){r(!1)}return Object(n.useEffect)((function(){return c.current.addEventListener("mouseenter",i),c.current.addEventListener("mouseleave",l),function(){c.current.removeEventListener("mouseenter",i),c.current.removeEventListener("mouseleave",l)}}),[]),[a,c]};function h(e){var t=e.item,a=Object(n.useContext)(f).removeItemsFromCart,c=b(),i=Object(s.a)(c,2),l=i[0],o=i[1],u=l?"ri-delete-bin-fill":"ri-delete-bin-line";return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{className:u,ref:o,onClick:function(){return a(t.id)}}),r.a.createElement("img",{src:t.url,width:"130px",alt:"some_pic"}),r.a.createElement("p",null,"$5.99"))}h.propType={item:p.a.shape({url:p.a.string.isRequired})};var O=h;var g=function(){var e=Object(n.useContext)(f).cartItems,t=Object(n.useContext)(f).isOrderPlaced,a=Object(n.useContext)(f).placeOrder,c=e.map((function(e){return r.a.createElement(O,{key:e.id,item:e})})),i=e.length,l=(5.99*e.length).toLocaleString("en-US",{style:"currency",currency:"USD"});return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),c,r.a.createElement("p",{className:"total-cost"},"Total: ",l),i?r.a.createElement("div",{className:"order-button"},r.a.createElement("button",{onClick:function(){return a()}},t?"Ordering...":"Place Order")):r.a.createElement("p",null,"You have no items in your cart."))};function j(e){return e%5===0?"big":e%6===0?"wide":void 0}var C=function(e){var t=e.className,a=e.img,c=b(),i=Object(s.a)(c,2),l=i[0],o=i[1],u=Object(n.useContext)(f),m=u.toggleFavorite,d=u.addItemsToCart,E=u.cartItems,v=u.removeItemsFromCart,p=E.some((function(e){return e.id===a.id}));return r.a.createElement("div",{className:"".concat(t," image-container"),ref:o},r.a.createElement("img",{src:a.url,className:"image-grid",alt:"some_image"}),a.isFavorite&&r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return m(a.id)}}),p&&r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return v(a.id)}}),l&&r.a.createElement(r.a.Fragment,null,!a.isFavorite&&r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return m(a.id)}}),!p&&r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return d(a)}})))};var N=function(){var e=Object(n.useContext)(f).allPhotos.map((function(e,t){return r.a.createElement(C,{key:e.id,img:e,className:j(t)})}));return r.a.createElement("main",{className:"photos"},e)};var x=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(o.a,{path:"/cart"},r.a.createElement(g,null))))};i.a.render(r.a.createElement(d,null,r.a.createElement(l.a,{basename:"/pic-some-app"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.66184784.chunk.js.map