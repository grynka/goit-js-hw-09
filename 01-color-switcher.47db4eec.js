!function(){var e,t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),d=document.querySelector("body");function n(){t.disabled=!0,o.disabled=!1,e=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),console.log(e)}o.disabled=!0,t.addEventListener("click",n),o.addEventListener("click",(function d(){t.disabled=!1,o.disabled=!0,console.log(e),clearInterval(e),n.disabled=!1,d.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.47db4eec.js.map
