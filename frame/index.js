!function(t){function r(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){function n(t){var r;r=t.split("/")[2]||"",r=r.split(":")[0]||"";var e=r.split(".");return domainArray=e.filter(function(t){return t.length>3?!0:void 0}),domainArray[domainArray.length-1]?domainArray[domainArray.length-1]:r}var i=(e(1),e(2).Base64,document.referrer);!function(){append=document.getElementById("append"),append.value=localStorage.getItem("append"),append.onkeyup=function(){localStorage.setItem("append",this.value)},localStorage.setItem("myCat","Tom"),domainInput=document.getElementById("domain"),domainInput.value=n(i),console.log(n(i))}()},function(t,r){(function(r){!function(e,n){"use strict";var i="undefined"!=typeof t;i&&(e=r);var o=("undefined"!=typeof Uint8Array,"0123456789abcdef".split("")),a=[-2147483648,8388608,32768,128],u=[24,16,8,0],f=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=[],h=function(t){return c(t,!0)},c=function(t,r){var n="string"!=typeof t;n&&t.constructor==e.ArrayBuffer&&(t=new Uint8Array(t));var i,h,c,l,p,g,d,w,y,E,A,v,B,I,b,R,U,m,_,S,P,T,L=!0,C=!1,Y=0,D=0,O=0,x=t.length;r?(i=3238371032,h=914150663,c=812702999,l=4144912697,p=4290775857,g=1750603025,d=1694076839,w=3204075428):(i=1779033703,h=3144134277,c=1013904242,l=2773480762,p=1359893119,g=2600822924,d=528734635,w=1541459225),y=0;do{if(s[0]=y,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0,n)for(A=D;x>Y&&64>A;++Y)s[A>>2]|=t[Y]<<u[3&A++];else for(A=D;x>Y&&64>A;++Y)E=t.charCodeAt(Y),128>E?s[A>>2]|=E<<u[3&A++]:2048>E?(s[A>>2]|=(192|E>>6)<<u[3&A++],s[A>>2]|=(128|63&E)<<u[3&A++]):55296>E||E>=57344?(s[A>>2]|=(224|E>>12)<<u[3&A++],s[A>>2]|=(128|E>>6&63)<<u[3&A++],s[A>>2]|=(128|63&E)<<u[3&A++]):(E=65536+((1023&E)<<10|1023&t.charCodeAt(++Y)),s[A>>2]|=(240|E>>18)<<u[3&A++],s[A>>2]|=(128|E>>12&63)<<u[3&A++],s[A>>2]|=(128|E>>6&63)<<u[3&A++],s[A>>2]|=(128|63&E)<<u[3&A++]);O+=A-D,D=A-64,Y==x&&(s[A>>2]|=a[3&A],++Y),y=s[16],Y>x&&56>A&&(s[15]=O<<3,C=!0);var M=i,F=h,N=c,k=l,j=p,z=g,J=d,q=w;for(v=16;64>v;++v)R=s[v-15],B=(R>>>7|R<<25)^(R>>>18|R<<14)^R>>>3,R=s[v-2],I=(R>>>17|R<<15)^(R>>>19|R<<13)^R>>>10,s[v]=s[v-16]+B+s[v-7]+I<<0;for(T=F&N,v=0;64>v;v+=4)L?(r?(_=300032,R=s[0]-1413257819,q=R-150054599<<0,k=R+24177077<<0):(_=704751109,R=s[0]-210244248,q=R-1521486534<<0,k=R+143694565<<0),L=!1):(B=(M>>>2|M<<30)^(M>>>13|M<<19)^(M>>>22|M<<10),I=(j>>>6|j<<26)^(j>>>11|j<<21)^(j>>>25|j<<7),_=M&F,b=_^M&N^T,m=j&z^~j&J,R=q+I+m+f[v]+s[v],U=B+b,q=k+R<<0,k=R+U<<0),B=(k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10),I=(q>>>6|q<<26)^(q>>>11|q<<21)^(q>>>25|q<<7),S=k&M,b=S^k&F^_,m=q&j^~q&z,R=J+I+m+f[v+1]+s[v+1],U=B+b,J=N+R<<0,N=R+U<<0,B=(N>>>2|N<<30)^(N>>>13|N<<19)^(N>>>22|N<<10),I=(J>>>6|J<<26)^(J>>>11|J<<21)^(J>>>25|J<<7),P=N&k,b=P^N&M^S,m=J&q^~J&j,R=z+I+m+f[v+2]+s[v+2],U=B+b,z=F+R<<0,F=R+U<<0,B=(F>>>2|F<<30)^(F>>>13|F<<19)^(F>>>22|F<<10),I=(z>>>6|z<<26)^(z>>>11|z<<21)^(z>>>25|z<<7),T=F&N,b=T^F&k^P,m=z&J^~z&q,R=j+I+m+f[v+3]+s[v+3],U=B+b,j=M+R<<0,M=R+U<<0;i=i+M<<0,h=h+F<<0,c=c+N<<0,l=l+k<<0,p=p+j<<0,g=g+z<<0,d=d+J<<0,w=w+q<<0}while(!C);var X=o[i>>28&15]+o[i>>24&15]+o[i>>20&15]+o[i>>16&15]+o[i>>12&15]+o[i>>8&15]+o[i>>4&15]+o[15&i]+o[h>>28&15]+o[h>>24&15]+o[h>>20&15]+o[h>>16&15]+o[h>>12&15]+o[h>>8&15]+o[h>>4&15]+o[15&h]+o[c>>28&15]+o[c>>24&15]+o[c>>20&15]+o[c>>16&15]+o[c>>12&15]+o[c>>8&15]+o[c>>4&15]+o[15&c]+o[l>>28&15]+o[l>>24&15]+o[l>>20&15]+o[l>>16&15]+o[l>>12&15]+o[l>>8&15]+o[l>>4&15]+o[15&l]+o[p>>28&15]+o[p>>24&15]+o[p>>20&15]+o[p>>16&15]+o[p>>12&15]+o[p>>8&15]+o[p>>4&15]+o[15&p]+o[g>>28&15]+o[g>>24&15]+o[g>>20&15]+o[g>>16&15]+o[g>>12&15]+o[g>>8&15]+o[g>>4&15]+o[15&g]+o[d>>28&15]+o[d>>24&15]+o[d>>20&15]+o[d>>16&15]+o[d>>12&15]+o[d>>8&15]+o[d>>4&15]+o[15&d];return r||(X+=o[w>>28&15]+o[w>>24&15]+o[w>>20&15]+o[w>>16&15]+o[w>>12&15]+o[w>>8&15]+o[w>>4&15]+o[15&w]),X};!e.JS_SHA256_TEST&&i?(c.sha256=c,c.sha224=h,t.exports=c):e&&(e.sha256=c,e.sha224=h)}(this)}).call(r,function(){return this}())},function(t,r,e){!function(r){"use strict";var n,i=r.Base64,o="2.1.9";if("undefined"!=typeof t&&t.exports)try{n=e(3).Buffer}catch(a){}var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=function(t){for(var r={},e=0,n=t.length;n>e;e++)r[t.charAt(e)]=e;return r}(u),s=String.fromCharCode,h=function(t){if(t.length<2){var r=t.charCodeAt(0);return 128>r?t:2048>r?s(192|r>>>6)+s(128|63&r):s(224|r>>>12&15)+s(128|r>>>6&63)+s(128|63&r)}var r=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return s(240|r>>>18&7)+s(128|r>>>12&63)+s(128|r>>>6&63)+s(128|63&r)},c=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,l=function(t){return t.replace(c,h)},p=function(t){var r=[0,2,1][t.length%3],e=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),n=[u.charAt(e>>>18),u.charAt(e>>>12&63),r>=2?"=":u.charAt(e>>>6&63),r>=1?"=":u.charAt(63&e)];return n.join("")},g=r.btoa?function(t){return r.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,p)},d=n?function(t){return(t.constructor===n.constructor?t:new n(t)).toString("base64")}:function(t){return g(l(t))},w=function(t,r){return r?d(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):d(String(t))},y=function(t){return w(t,!0)},E=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),A=function(t){switch(t.length){case 4:var r=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),e=r-65536;return s((e>>>10)+55296)+s((1023&e)+56320);case 3:return s((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return s((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},v=function(t){return t.replace(E,A)},B=function(t){var r=t.length,e=r%4,n=(r>0?f[t.charAt(0)]<<18:0)|(r>1?f[t.charAt(1)]<<12:0)|(r>2?f[t.charAt(2)]<<6:0)|(r>3?f[t.charAt(3)]:0),i=[s(n>>>16),s(n>>>8&255),s(255&n)];return i.length-=[0,0,2,1][e],i.join("")},I=r.atob?function(t){return r.atob(t)}:function(t){return t.replace(/[\s\S]{1,4}/g,B)},b=n?function(t){return(t.constructor===n.constructor?t:new n(t,"base64")).toString()}:function(t){return v(I(t))},R=function(t){return b(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},U=function(){var t=r.Base64;return r.Base64=i,t};if(r.Base64={VERSION:o,atob:I,btoa:g,fromBase64:R,toBase64:w,utob:l,encode:w,encodeURI:y,btou:v,decode:R,noConflict:U},"function"==typeof Object.defineProperty){var m=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};r.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",m(function(){return R(this)})),Object.defineProperty(String.prototype,"toBase64",m(function(t){return w(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",m(function(){return w(this,!0)}))}}r.Meteor&&(Base64=r.Base64)}(this)},function(t,r,e){(function(t,n){function i(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function t(r){return this instanceof t?(this.length=0,this.parent=void 0,"number"==typeof r?o(this,r):"string"==typeof r?a(this,r,arguments.length>1?arguments[1]:"utf8"):u(this,r)):arguments.length>1?new t(r,arguments[1]):new t(r)}function o(r,e){if(r=g(r,0>e?0:0|d(e)),!t.TYPED_ARRAY_SUPPORT)for(var n=0;e>n;n++)r[n]=0;return r}function a(t,r,e){("string"!=typeof e||""===e)&&(e="utf8");var n=0|y(r,e);return t=g(t,n),t.write(r,e),t}function u(r,e){if(t.isBuffer(e))return f(r,e);if(G(e))return s(r,e);if(null==e)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(e.buffer instanceof ArrayBuffer)return h(r,e);if(e instanceof ArrayBuffer)return c(r,e)}return e.length?l(r,e):p(r,e)}function f(t,r){var e=0|d(r.length);return t=g(t,e),r.copy(t,0,0,e),t}function s(t,r){var e=0|d(r.length);t=g(t,e);for(var n=0;e>n;n+=1)t[n]=255&r[n];return t}function h(t,r){var e=0|d(r.length);t=g(t,e);for(var n=0;e>n;n+=1)t[n]=255&r[n];return t}function c(r,e){return t.TYPED_ARRAY_SUPPORT?(e.byteLength,r=t._augment(new Uint8Array(e))):r=h(r,new Uint8Array(e)),r}function l(t,r){var e=0|d(r.length);t=g(t,e);for(var n=0;e>n;n+=1)t[n]=255&r[n];return t}function p(t,r){var e,n=0;"Buffer"===r.type&&G(r.data)&&(e=r.data,n=0|d(e.length)),t=g(t,n);for(var i=0;n>i;i+=1)t[i]=255&e[i];return t}function g(r,e){t.TYPED_ARRAY_SUPPORT?(r=t._augment(new Uint8Array(e)),r.__proto__=t.prototype):(r.length=e,r._isBuffer=!0);var n=0!==e&&e<=t.poolSize>>>1;return n&&(r.parent=K),r}function d(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function w(r,e){if(!(this instanceof w))return new w(r,e);var n=new t(r,e);return delete n.parent,n}function y(t,r){"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"binary":case"raw":case"raws":return e;case"utf8":case"utf-8":return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return X(t).length;default:if(n)return z(t).length;r=(""+r).toLowerCase(),n=!0}}function E(t,r,e){var n=!1;if(r=0|r,e=void 0===e||e===1/0?this.length:0|e,t||(t="utf8"),0>r&&(r=0),e>this.length&&(e=this.length),r>=e)return"";for(;;)switch(t){case"hex":return T(this,r,e);case"utf8":case"utf-8":return m(this,r,e);case"ascii":return S(this,r,e);case"binary":return P(this,r,e);case"base64":return U(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;var o=r.length;if(o%2!==0)throw new Error("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;n>a;a++){var u=parseInt(r.substr(2*a,2),16);if(isNaN(u))throw new Error("Invalid hex string");t[e+a]=u}return a}function v(t,r,e,n){return Z(z(r,t.length-e),t,e,n)}function B(t,r,e,n){return Z(J(r),t,e,n)}function I(t,r,e,n){return B(t,r,e,n)}function b(t,r,e,n){return Z(X(r),t,e,n)}function R(t,r,e,n){return Z(q(r,t.length-e),t,e,n)}function U(t,r,e){return 0===r&&e===t.length?H.fromByteArray(t):H.fromByteArray(t.slice(r,e))}function m(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;e>i;){var o=t[i],a=null,u=o>239?4:o>223?3:o>191?2:1;if(e>=i+u){var f,s,h,c;switch(u){case 1:128>o&&(a=o);break;case 2:f=t[i+1],128===(192&f)&&(c=(31&o)<<6|63&f,c>127&&(a=c));break;case 3:f=t[i+1],s=t[i+2],128===(192&f)&&128===(192&s)&&(c=(15&o)<<12|(63&f)<<6|63&s,c>2047&&(55296>c||c>57343)&&(a=c));break;case 4:f=t[i+1],s=t[i+2],h=t[i+3],128===(192&f)&&128===(192&s)&&128===(192&h)&&(c=(15&o)<<18|(63&f)<<12|(63&s)<<6|63&h,c>65535&&1114112>c&&(a=c))}}null===a?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=u}return _(n)}function _(t){var r=t.length;if(Q>=r)return String.fromCharCode.apply(String,t);for(var e="",n=0;r>n;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Q));return e}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;e>i;i++)n+=String.fromCharCode(127&t[i]);return n}function P(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;e>i;i++)n+=String.fromCharCode(t[i]);return n}function T(t,r,e){var n=t.length;(!r||0>r)&&(r=0),(!e||0>e||e>n)&&(e=n);for(var i="",o=r;e>o;o++)i+=j(t[o]);return i}function L(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,r,e){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function Y(r,e,n,i,o,a){if(!t.isBuffer(r))throw new TypeError("buffer must be a Buffer instance");if(e>o||a>e)throw new RangeError("value is out of bounds");if(n+i>r.length)throw new RangeError("index out of range")}function D(t,r,e,n){0>r&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);o>i;i++)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function O(t,r,e,n){0>r&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);o>i;i++)t[e+i]=r>>>8*(n?i:3-i)&255}function x(t,r,e,n,i,o){if(r>i||o>r)throw new RangeError("value is out of bounds");if(e+n>t.length)throw new RangeError("index out of range");if(0>e)throw new RangeError("index out of range")}function M(t,r,e,n,i){return i||x(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),V.write(t,r,e,n,23,4),e+4}function F(t,r,e,n,i){return i||x(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),V.write(t,r,e,n,52,8),e+8}function N(t){if(t=k(t).replace($,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function k(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function j(t){return 16>t?"0"+t.toString(16):t.toString(16)}function z(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],a=0;n>a;a++){if(e=t.charCodeAt(a),e>55295&&57344>e){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(56320>e){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=i-55296<<10|e-56320|65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,128>e){if((r-=1)<0)break;o.push(e)}else if(2048>e){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(65536>e){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(1114112>e))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function J(t){for(var r=[],e=0;e<t.length;e++)r.push(255&t.charCodeAt(e));return r}function q(t,r){for(var e,n,i,o=[],a=0;a<t.length&&!((r-=2)<0);a++)e=t.charCodeAt(a),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function X(t){return H.toByteArray(N(t))}function Z(t,r,e,n){for(var i=0;n>i&&!(i+e>=r.length||i>=t.length);i++)r[i+e]=t[i];return i}/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
var H=e(4),V=e(5),G=e(6);r.Buffer=t,r.SlowBuffer=w,r.INSPECT_MAX_BYTES=50,t.poolSize=8192;var K={};t.TYPED_ARRAY_SUPPORT=void 0!==n.TYPED_ARRAY_SUPPORT?n.TYPED_ARRAY_SUPPORT:function(){function t(){}try{var r=new Uint8Array(1);return r.foo=function(){return 42},r.constructor=t,42===r.foo()&&r.constructor===t&&"function"==typeof r.subarray&&0===r.subarray(1,1).byteLength}catch(e){return!1}}(),t.TYPED_ARRAY_SUPPORT&&(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array),t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(r,e){if(!t.isBuffer(r)||!t.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(r===e)return 0;for(var n=r.length,i=e.length,o=0,a=Math.min(n,i);a>o&&r[o]===e[o];)++o;return o!==a&&(n=r[o],i=e[o]),i>n?-1:n>i?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(r,e){if(!G(r))throw new TypeError("list argument must be an Array of Buffers.");if(0===r.length)return new t(0);var n;if(void 0===e)for(e=0,n=0;n<r.length;n++)e+=r[n].length;var i=new t(e),o=0;for(n=0;n<r.length;n++){var a=r[n];a.copy(i,o),o+=a.length}return i},t.byteLength=y,t.prototype.length=void 0,t.prototype.parent=void 0,t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?m(this,0,t):E.apply(this,arguments)},t.prototype.equals=function(r){if(!t.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:0===t.compare(this,r)},t.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(r){if(!t.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?0:t.compare(this,r)},t.prototype.indexOf=function(r,e){function n(t,r,e){for(var n=-1,i=0;e+i<t.length;i++)if(t[e+i]===r[-1===n?0:i-n]){if(-1===n&&(n=i),i-n+1===r.length)return e+n}else n=-1;return-1}if(e>2147483647?e=2147483647:-2147483648>e&&(e=-2147483648),e>>=0,0===this.length)return-1;if(e>=this.length)return-1;if(0>e&&(e=Math.max(this.length+e,0)),"string"==typeof r)return 0===r.length?-1:String.prototype.indexOf.call(this,r,e);if(t.isBuffer(r))return n(this,r,e);if("number"==typeof r)return t.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,r,e):n(this,[r],e);throw new TypeError("val must be string, number or Buffer")},t.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},t.prototype.set=function(t,r){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,r)},t.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else if(isFinite(r))r=0|r,isFinite(e)?(e=0|e,void 0===n&&(n="utf8")):(n=e,e=void 0);else{var i=n;n=r,r=0|e,e=i}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(0>e||0>r)||r>this.length)throw new RangeError("attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return v(this,t,r,e);case"ascii":return B(this,t,r,e);case"binary":return I(this,t,r,e);case"base64":return b(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,r,e);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;t.prototype.slice=function(r,e){var n=this.length;r=~~r,e=void 0===e?n:~~e,0>r?(r+=n,0>r&&(r=0)):r>n&&(r=n),0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),r>e&&(e=r);var i;if(t.TYPED_ARRAY_SUPPORT)i=t._augment(this.subarray(r,e));else{var o=e-r;i=new t(o,void 0);for(var a=0;o>a;a++)i[a]=this[a+r]}return i.length&&(i.parent=this.parent||this),i},t.prototype.readUIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},t.prototype.readUIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},t.prototype.readUInt8=function(t,r){return r||C(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,r){return r||C(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,r){return r||C(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,r){return r||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,r){return r||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},t.prototype.readIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},t.prototype.readInt8=function(t,r){return r||C(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},t.prototype.readInt16LE=function(t,r){r||C(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},t.prototype.readInt16BE=function(t,r){r||C(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},t.prototype.readInt32LE=function(t,r){return r||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,r){return r||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,r){return r||C(t,4,this.length),V.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,r){return r||C(t,4,this.length),V.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,r){return r||C(t,8,this.length),V.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,r){return r||C(t,8,this.length),V.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,r,e,n){t=+t,r=0|r,e=0|e,n||Y(this,t,r,e,Math.pow(2,8*e),0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},t.prototype.writeUIntBE=function(t,r,e,n){t=+t,r=0|r,e=0|e,n||Y(this,t,r,e,Math.pow(2,8*e),0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},t.prototype.writeUInt8=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,1,255,0),t.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[e]=r,e+1},t.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[e]=r,this[e+1]=r>>>8):D(this,r,e,!0),e+2},t.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=r):D(this,r,e,!1),e+2},t.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r):O(this,r,e,!0),e+4},t.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r):O(this,r,e,!1),e+4},t.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);Y(this,t,r,e,i-1,-i)}var o=0,a=1,u=0>t?1:0;for(this[r]=255&t;++o<e&&(a*=256);)this[r+o]=(t/a>>0)-u&255;return r+e},t.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);Y(this,t,r,e,i-1,-i)}var o=e-1,a=1,u=0>t?1:0;for(this[r+o]=255&t;--o>=0&&(a*=256);)this[r+o]=(t/a>>0)-u&255;return r+e},t.prototype.writeInt8=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,1,127,-128),t.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),0>r&&(r=255+r+1),this[e]=r,e+1},t.prototype.writeInt16LE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[e]=r,this[e+1]=r>>>8):D(this,r,e,!0),e+2},t.prototype.writeInt16BE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=r):D(this,r,e,!1),e+2},t.prototype.writeInt32LE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[e]=r,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24):O(this,r,e,!0),e+4},t.prototype.writeInt32BE=function(r,e,n){return r=+r,e=0|e,n||Y(this,r,e,4,2147483647,-2147483648),0>r&&(r=4294967295+r+1),t.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r):O(this,r,e,!1),e+4},t.prototype.writeFloatLE=function(t,r,e){return M(this,t,r,!0,e)},t.prototype.writeFloatBE=function(t,r,e){return M(this,t,r,!1,e)},t.prototype.writeDoubleLE=function(t,r,e){return F(this,t,r,!0,e)},t.prototype.writeDoubleBE=function(t,r,e){return F(this,t,r,!1,e)},t.prototype.copy=function(r,e,n,i){if(n||(n=0),i||0===i||(i=this.length),e>=r.length&&(e=r.length),e||(e=0),i>0&&n>i&&(i=n),i===n)return 0;if(0===r.length||0===this.length)return 0;if(0>e)throw new RangeError("targetStart out of bounds");if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),r.length-e<i-n&&(i=r.length-e+n);var o,a=i-n;if(this===r&&e>n&&i>e)for(o=a-1;o>=0;o--)r[o+e]=this[o+n];else if(1e3>a||!t.TYPED_ARRAY_SUPPORT)for(o=0;a>o;o++)r[o+e]=this[o+n];else r._set(this.subarray(n,n+a),e);return a},t.prototype.fill=function(t,r,e){if(t||(t=0),r||(r=0),e||(e=this.length),r>e)throw new RangeError("end < start");if(e!==r&&0!==this.length){if(0>r||r>=this.length)throw new RangeError("start out of bounds");if(0>e||e>this.length)throw new RangeError("end out of bounds");var n;if("number"==typeof t)for(n=r;e>n;n++)this[n]=t;else{var i=z(t.toString()),o=i.length;for(n=r;e>n;n++)this[n]=i[n%o]}return this}},t.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;for(var r=new Uint8Array(this.length),e=0,n=r.length;n>e;e+=1)r[e]=this[e];return r.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var W=t.prototype;t._augment=function(r){return r.constructor=t,r._isBuffer=!0,r._set=r.set,r.get=W.get,r.set=W.set,r.write=W.write,r.toString=W.toString,r.toLocaleString=W.toString,r.toJSON=W.toJSON,r.equals=W.equals,r.compare=W.compare,r.indexOf=W.indexOf,r.copy=W.copy,r.slice=W.slice,r.readUIntLE=W.readUIntLE,r.readUIntBE=W.readUIntBE,r.readUInt8=W.readUInt8,r.readUInt16LE=W.readUInt16LE,r.readUInt16BE=W.readUInt16BE,r.readUInt32LE=W.readUInt32LE,r.readUInt32BE=W.readUInt32BE,r.readIntLE=W.readIntLE,r.readIntBE=W.readIntBE,r.readInt8=W.readInt8,r.readInt16LE=W.readInt16LE,r.readInt16BE=W.readInt16BE,r.readInt32LE=W.readInt32LE,r.readInt32BE=W.readInt32BE,r.readFloatLE=W.readFloatLE,r.readFloatBE=W.readFloatBE,r.readDoubleLE=W.readDoubleLE,r.readDoubleBE=W.readDoubleBE,r.writeUInt8=W.writeUInt8,r.writeUIntLE=W.writeUIntLE,r.writeUIntBE=W.writeUIntBE,r.writeUInt16LE=W.writeUInt16LE,r.writeUInt16BE=W.writeUInt16BE,r.writeUInt32LE=W.writeUInt32LE,r.writeUInt32BE=W.writeUInt32BE,r.writeIntLE=W.writeIntLE,r.writeIntBE=W.writeIntBE,r.writeInt8=W.writeInt8,r.writeInt16LE=W.writeInt16LE,r.writeInt16BE=W.writeInt16BE,r.writeInt32LE=W.writeInt32LE,r.writeInt32BE=W.writeInt32BE,r.writeFloatLE=W.writeFloatLE,r.writeFloatBE=W.writeFloatBE,r.writeDoubleLE=W.writeDoubleLE,r.writeDoubleBE=W.writeDoubleBE,r.fill=W.fill,r.inspect=W.inspect,r.toArrayBuffer=W.toArrayBuffer,r};var $=/[^+\/0-9A-Za-z-_]/g}).call(r,e(3).Buffer,function(){return this}())},function(t,r,e){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function r(t){var r=t.charCodeAt(0);return r===a||r===c?62:r===u||r===l?63:f>r?-1:f+10>r?r-f+26+26:h+26>r?r-h:s+26>r?r-s+26:void 0}function e(t){function e(t){s[c++]=t}var n,i,a,u,f,s;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var h=t.length;f="="===t.charAt(h-2)?2:"="===t.charAt(h-1)?1:0,s=new o(3*t.length/4-f),a=f>0?t.length-4:t.length;var c=0;for(n=0,i=0;a>n;n+=4,i+=3)u=r(t.charAt(n))<<18|r(t.charAt(n+1))<<12|r(t.charAt(n+2))<<6|r(t.charAt(n+3)),e((16711680&u)>>16),e((65280&u)>>8),e(255&u);return 2===f?(u=r(t.charAt(n))<<2|r(t.charAt(n+1))>>4,e(255&u)):1===f&&(u=r(t.charAt(n))<<10|r(t.charAt(n+1))<<4|r(t.charAt(n+2))>>2,e(u>>8&255),e(255&u)),s}function i(t){function r(t){return n.charAt(t)}function e(t){return r(t>>18&63)+r(t>>12&63)+r(t>>6&63)+r(63&t)}var i,o,a,u=t.length%3,f="";for(i=0,a=t.length-u;a>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],f+=e(o);switch(u){case 1:o=t[t.length-1],f+=r(o>>2),f+=r(o<<4&63),f+="==";break;case 2:o=(t[t.length-2]<<8)+t[t.length-1],f+=r(o>>10),f+=r(o>>4&63),f+=r(o<<2&63),f+="="}return f}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="+".charCodeAt(0),u="/".charCodeAt(0),f="0".charCodeAt(0),s="a".charCodeAt(0),h="A".charCodeAt(0),c="-".charCodeAt(0),l="_".charCodeAt(0);t.toByteArray=e,t.fromByteArray=i}(r)},function(t,r){r.read=function(t,r,e,n,i){var o,a,u=8*i-n-1,f=(1<<u)-1,s=f>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=l,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=n;h>0;a=256*a+t[r+c],c+=l,h-=8);if(0===o)o=1-s;else{if(o===f)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),o-=s}return(p?-1:1)*a*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var a,u,f,s=8*o-i-1,h=(1<<s)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=0>r||0===r&&0>1/r?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=h):(a=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-a))<1&&(a--,f*=2),r+=a+c>=1?l/f:l*Math.pow(2,1-c),r*f>=2&&(a++,f/=2),a+c>=h?(u=0,a=h):a+c>=1?(u=(r*f-1)*Math.pow(2,i),a+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(a=a<<i|u,s+=i;s>0;t[e+p]=255&a,p+=g,a/=256,s-=8);t[e+p-g]|=128*d}},function(t,r){var e=Array.isArray,n=Object.prototype.toString;t.exports=e||function(t){return!!t&&"[object Array]"==n.call(t)}}]);