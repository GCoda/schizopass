!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t){function o(){r.setAttribute("src","http://localhost:8000/frame"),r.setAttribute("scrolling","no"),r.style.boxShadow="0 0 10px rgba(0,0,0,0.5)",r.style.border="none",r.style.overflow="hidden",r.style.position="fixed",r.style.top=0,r.style.left="40%",r.style.zIndex=1e5,r.style.width="22em",r.style.height="25em",document.body.appendChild(r),r.focus()}function n(e){"http://example.org:8080"!==e.origin&&("closeIframe"===e.data&&document.body.removeChild(r),console.log(e))}var r=document.createElement("iframe");window.addEventListener("message",n,!1),o()}]);