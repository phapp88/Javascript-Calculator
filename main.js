!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={"+":function(e,t){return e+t},"-":function(e,t){return e-t},"×":function(e,t){return e*t},"÷":function(e,t){return e/t}},u=function(e){return Object.keys(r).includes(e)},i=function(e,t){document.getElementById("current").textContent=e,document.getElementById("expression").textContent=t};t.handleAC=function(){i("0","0")},t.handleCE=function(e,t){if(u(e)){var n=t.slice(0,-1),r=n.replace(/[^0-9.]/g,",").split(",");i(r[r.length-1],n)}else 1===e.length||t.includes("=")?i("0","0"):i(e.slice(0,-1),t.slice(0,-1))},t.handleDot=function(e,t){"0"===e||t.includes("=")?i(".","."):e.includes(".")||i(e+".",t+".")},t.handleEquals=function(e,t){var n=t.match(/[^0-9.]/g),u=t.replace(/[^0-9.]/g,",").split(",").map(Number),o=u.shift(),c=u.reduce(function(e,t,u){return r[n[u]](e,t)},o),l=String(c);if(c>99999999)i("0","Digit Limit Met");else if(l.length>8){var a=String(Number(c.toPrecision(7)));i(a,t+"="+a)}else i(l,t+"="+l)},t.handleNumber=function(e,t,n){"0"===e?i(n,t.slice(0,-1)+n):u(e)?i(n,t+n):t.includes("=")?i(n,n):8===e.length||25===t.length?i("0","Digit Limit Met"):i(e+n,t+n)},t.handleOperation=function(e,t,n){t.includes("=")?i(n,e+n):u(e)||i(n,t+n)}},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function u(e){var t=r.handleAC,n=r.handleCE,u=r.handleDot,i=r.handleEquals,o=r.handleNumber,c=r.handleOperation,l=document.getElementById("current").textContent,a=document.getElementById("expression").textContent,f=e.target.textContent;"AC"===f?t():"CE"===f?n(l,a):"."===f?u(l,a):"="===f?i(l,a):f==Number(f)?o(l,a,f):c(l,a,f),this.blur()}n(6),document.querySelectorAll("button").forEach(function(e){return e.addEventListener("click",u)})},,,,,function(e,t){}]);