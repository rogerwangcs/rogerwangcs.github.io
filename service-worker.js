"use strict";var precacheConfig=[["/React-Personal-Website/index.html","8be9aef36fd9e6ab2b3269ffd122b7cd"],["/React-Personal-Website/static/css/main.e1cefe91.css","b239cb625beb61efd3d954959afe5cdb"],["/React-Personal-Website/static/js/main.17b5a4f4.js","accb16a181c59030f31f6433d06d5e40"],["/React-Personal-Website/static/media/Portrait.3795ef62.jpg","3795ef62a3a156bb1e66e82fcc17b77e"],["/React-Personal-Website/static/media/ResumeGraphic.f885cc07.png","f885cc07485d5d978da48fae5bb420d0"],["/React-Personal-Website/static/media/down-arrow.5d098213.png","5d09821392e8a6096c87a9aa1bfe5aec"],["/React-Personal-Website/static/media/github.74f268ab.png","74f268abd0466bcceef6ff456fbbcc67"],["/React-Personal-Website/static/media/gmail.44e9b281.png","44e9b281a89f300130d8094ca8323b8d"],["/React-Personal-Website/static/media/linkedin.b46fee59.png","b46fee59270590150b70ceda1125bb09"],["/React-Personal-Website/static/media/mern-article-manager-desktop.e249b569.PNG","e249b5697f9e283f216a8792a44050d1"],["/React-Personal-Website/static/media/mern-article-manager-mobile.ce37d61a.PNG","ce37d61a3fb76e2e1d760a39b28c2917"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/React-Personal-Website/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});