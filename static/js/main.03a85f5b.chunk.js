(this.webpackJsonptaxi=this.webpackJsonptaxi||[]).push([[0],{26:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=(n(31),n(12)),i=n(13),s=n(16),u=n(15),d=n(50),p=n(7),m=n(6),h=function(e){return console.log("selectCart car",e),{type:"SELECTED_CAR",payload:e}},v=function(e){return console.log("addCarsList list",e),{type:"ADD_CARS_LIST",payload:e}},y=[{marketName:"kio rio",color:"white",licensePlate:"o001oo",dist_m:"100"},{marketName:"kio rio",color:"white",licensePlate:"o002oo",dist_m:"200"}],f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"showList",value:function(){var e=this,t=this.props.carslist&&this.props.carslist.map((function(t,n){return r.a.createElement("li",{key:n},t.licensePlate," /",r.a.createElement(d.a,{type:"button",color:"primary",onClick:function(){return e.props.selectCar(t)}},"addCar"))})),n=this.props.error||"no cars";return r.a.createElement("div",null,t&&t.length>0?r.a.createElement("ul",null,t):r.a.createElement("div",null,n))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.a,{type:"button",color:"primary",onClick:function(){return e.props.addCarsList(y)}},"addlist"),this.showList())}}]),n}(a.Component);var E=Object(p.b)((function(e){return{carslist:e.carslist}}),(function(e){return Object(m.a)({addCarsList:v,selectCar:h},e)}))(f),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return this.props.car?r.a.createElement("div",null,r.a.createElement("p",null,"Name: ",this.props.car.marketName),r.a.createElement("p",null,"License Plate: ",this.props.car.licensePlate)):r.a.createElement("p",null,"no car selected")}}]),n}(a.Component);var w=Object(p.b)((function(e){return{car:e.car}}))(b),g=function(){var e=void 0;function t(){e=new window.ymaps.Map("map",{center:[55.76,37.64],zoom:10},{searchControlProvider:"yandex#search"})}return Object(a.useEffect)((function(){console.log("1234");var e=document.createElement("script");return e.src="https://api-maps.yandex.ru/2.1/?apikey=15d0506a-9ee6-47c4-b5b0-b33294e759a5&lang=ru_RU",e.async=!0,e.onload=function(){console.log("window.ymaps",window.ymaps),window.ymaps.ready(t)},document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"CarsList:"),r.a.createElement(E,null),r.a.createElement("hr",null),r.a.createElement("h2",null,"Car:"),r.a.createElement(w,null),e&&r.a.createElement("div",null,e),r.a.createElement("div",{id:"map",style:{width:"450px",height:"350px"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C,k=Object(m.b)({car:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_CAR":return t.payload;default:return e}},carslist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CARS_LIST":return t.payload;default:return e}},test:"test"}),j=Object(m.c)(k,C);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:j,loog:console.log("StoreInstance",j),loog2:console.log("StoreInstance.getState",j.getState())},r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.03a85f5b.chunk.js.map