(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),u=(a(9),a(1)),m=(a(10),function(e){var t=e.query,a=e.setQuery,n=e.onInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"heading-box"},r.a.createElement("h1",null,"welcome to weather app")),r.a.createElement("form",{className:"form"},r.a.createElement("input",{type:"text",placeholder:"Search...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:n,className:"form__input"})))}),s=(a(11),r.a.memo((function(e){var t=e.weather;return r.a.createElement("div",{className:"weather-box"},r.a.createElement("h2",{className:"weather-box__city"},t.name,", ",t.sys.country),r.a.createElement("h4",{className:"weather-box__date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t,", ").concat(a," ").concat(n," ").concat(r)}(new Date)),r.a.createElement("p",{className:"weather-box__temp"},Math.round(t.main.temp),"\xb0C"),r.a.createElement("p",{className:"weather-box__main"},t.weather[0].main))}))),l=(a(12),r.a.memo((function(e){var t=e.weather;return r.a.createElement("div",{className:"error-handler-div"},r.a.createElement("p",{className:"error-message"},t.message))}))),i=(a(13),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),h=(a(14),a(15),"https://api.openweathermap.org/data/2.5/"),p="5b61ecf9427b501924b05ef656d7b9c8",d=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),d=Object(u.a)(o,2),f=d[0],y=d[1],b=Object(n.useState)(!1),E=Object(u.a)(b,2),w=E[0],v=E[1];return r.a.createElement("div",{className:"container"},r.a.createElement(m,{query:a,setQuery:c,onInput:function(e){"Enter"===e.key&&(e.preventDefault(),v(!0),fetch("".concat(h,"weather?q=").concat(a,"&units=metric&APPID=").concat(p)).then((function(e){return e.json()})).then((function(e){v(!1),y(e),c("")})))},setSpinner:v}),w&&r.a.createElement(i,null),"undefined"!==typeof f.main&&r.a.createElement(s,{weather:f}),"undefined"!==typeof f.message&&r.a.createElement(l,{weather:f}))};o.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.edef0c84.chunk.js.map