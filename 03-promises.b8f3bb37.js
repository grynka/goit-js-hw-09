function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var l=r("eWCmQ");const u=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');let d;document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault(),d=a.value;setInterval((()=>{var n,o;d>0&&(d-=1,console.log(d+1),n=d+1,o=u.value,new Promise(((t,r)=>{const u=Math.random()>.3;setTimeout((()=>{u?t(e(l).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)):r(e(l).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`))}),o)})))}),i.value)}));
//# sourceMappingURL=03-promises.b8f3bb37.js.map
