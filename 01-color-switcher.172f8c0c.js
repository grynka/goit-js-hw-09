const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.disabled=!0,console.log(d),e.addEventListener("click",(function(){timerId=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(timerId),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.172f8c0c.js.map
