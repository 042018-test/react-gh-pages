"use strict";var precacheConfig=[["/addpol-test/addpol-test.github.io.git/index.html","8b209017172754f5b230c7b29e735fcf"],["/addpol-test/addpol-test.github.io.git/static/css/main.266c1d95.css","f9bf3a62561c5f6d342e48e26c1a2beb"],["/addpol-test/addpol-test.github.io.git/static/js/main.2492d744.js","67a4ce0013f0a9e422e2706b1e129e8c"],["/addpol-test/addpol-test.github.io.git/static/media/BurgerIcon.73651aff.scss","73651aff82cb453c1639affc34760271"],["/addpol-test/addpol-test.github.io.git/static/media/asociacion@1x.d4125de0.jpg","d4125de0f563c33e00a8da804b4362b0"],["/addpol-test/addpol-test.github.io.git/static/media/asociacion@2x.fb589649.jpg","fb589649e94a52e9dc1dcdbf8cb8a047"],["/addpol-test/addpol-test.github.io.git/static/media/asociacion@3x.7d1798fb.jpg","7d1798fb8b456cd7e8d89c3d3134ae72"],["/addpol-test/addpol-test.github.io.git/static/media/beneficios@1x.c79a6db0.jpg","c79a6db009d4c373788a87c0a27a1bad"],["/addpol-test/addpol-test.github.io.git/static/media/beneficios@2x.35162eed.jpg","35162eed39304b6bd356e2e0596bf42b"],["/addpol-test/addpol-test.github.io.git/static/media/formacion@1x.b74f9939.jpg","b74f9939fd53c7ce6a558f4e95a9735b"],["/addpol-test/addpol-test.github.io.git/static/media/formacion@2x.571ad25c.jpg","571ad25cbeac1072d0fff35f679f8778"],["/addpol-test/addpol-test.github.io.git/static/media/logo.892bee85.png","892bee850b91f24db2e9c52a1aec41b0"],["/addpol-test/addpol-test.github.io.git/static/media/search.51758587.svg","51758587694680f2aee7af0d40d463af"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),i=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var i="/addpol-test/addpol-test.github.io.git/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});