(()=>{"use strict";var e={913:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}}},t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}(()=>{r(977);const e=[],t={get:()=>e,add(t){e.push(...t)}};r(913);const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>{return e||(t=a.precache,[a.prefix,t,a.suffix].filter((e=>e&&e.length>0)).join("-"));var t},s=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),o=(()=>{"__WB_DISABLE_DEV_LOGS"in self||(self.__WB_DISABLE_DEV_LOGS=!1);let e=!1;const t={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db",groupEnd:null},r=function(r,a){if(self.__WB_DISABLE_DEV_LOGS)return;if("groupCollapsed"===r&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent))return void console[r](...a);const n=e?[]:["%cworkbox",["background: "+t[r],"border-radius: 0.5em","color: white","font-weight: bold","padding: 2px 0.5em"].join(";")];console[r](...n,...a),"groupCollapsed"===r&&(e=!0),"groupEnd"===r&&(e=!1)},a={},n=Object.keys(t);for(const e of n){const t=e;a[t]=(...e)=>{r(t,e)}}return a})(),c={"invalid-value":({paramName:e,validValueDescription:t,value:r})=>{if(!e||!t)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${e}' parameter was given a value with an unexpected value. ${t} Received a value of `+JSON.stringify(r)+"."},"not-an-array":({moduleName:e,className:t,funcName:r,paramName:a})=>{if(!(e&&t&&r&&a))throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${a}' passed into '${e}.${t}.${r}()' must be an array.`},"incorrect-type":({expectedType:e,paramName:t,moduleName:r,className:a,funcName:n})=>{if(!(e&&t&&r&&n))throw new Error("Unexpected input to 'incorrect-type' error.");return`The parameter '${t}' passed into '${r}.${a?a+".":""}${n}()' must be of type ${e}.`},"incorrect-class":({expectedClass:e,paramName:t,moduleName:r,className:a,funcName:n,isReturnValueProblem:s})=>{if(!e||!r||!n)throw new Error("Unexpected input to 'incorrect-class' error.");return s?`The return value from '${r}.${a?a+".":""}${n}()' must be an instance of class ${e.name}.`:`The parameter '${t}' passed into '${r}.${a?a+".":""}${n}()' must be an instance of class ${e.name}.`},"missing-a-method":({expectedMethod:e,paramName:t,moduleName:r,className:a,funcName:n})=>{if(!(e&&t&&r&&a&&n))throw new Error("Unexpected input to 'missing-a-method' error.");return`${r}.${a}.${n}() expected the '${t}' parameter to expose a '${e}' method.`},"add-to-cache-list-unexpected-type":({entry:e})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(e)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:e,secondEntry:t})=>{if(!e||!t)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return"Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL "+e._entryId+" but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries."},"plugin-error-request-will-fetch":({thrownError:e})=>{if(!e)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${e.message}'.`},"invalid-cache-name":({cacheNameId:e,value:t})=>{if(!e)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${e}: '...'}). Received a value of '${JSON.stringify(t)}'`},"unregister-route-but-not-found-with-method":({method:e})=>{if(!e)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${e}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:e})=>`Replaying the background sync queue '${e}' failed.`,"duplicate-queue-name":({name:e})=>`The Queue name '${e}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:e,paramName:t})=>`The '${e}()' method can only be used when the '${t}' is used in the constructor.`,"unsupported-route-type":({moduleName:e,className:t,funcName:r,paramName:a})=>`The supplied '${a}' parameter was an unsupported type. Please check the docs for ${e}.${t}.${r} for valid input types.`,"not-array-of-class":({value:e,expectedClass:t,moduleName:r,className:a,funcName:n,paramName:s})=>`The supplied '${s}' parameter must be an array of '${t}' objects. Received '${JSON.stringify(e)},'. Please check the call to ${r}.${a}.${n}() to fix the issue.`,"max-entries-or-age-required":({moduleName:e,className:t,funcName:r})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${e}.${t}.${r}`,"statuses-or-headers-required":({moduleName:e,className:t,funcName:r})=>`You must define either config.statuses or config.headersin ${e}.${t}.${r}`,"invalid-string":({moduleName:e,funcName:t,paramName:r})=>{if(!r||!e||!t)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${e}.${t}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${e}"`},"single-range-only":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${e}"`},"invalid-range-values":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${e}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:e,start:t,end:r})=>`The start (${t}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${e} bytes.`,"attempt-to-cache-non-get-request":({url:e,method:t})=>`Unable to cache '${e}' because it is a '${t}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:e})=>`There was an attempt to cache '${e}' but the response was not defined.`,"no-response":({url:e,error:t})=>{let r=`The strategy could not generate a response for '${e}'.`;return t&&(r+=` The underlying error is ${t}.`),r},"bad-precaching-response":({url:e,status:t})=>`The precaching request for '${e}' failed with an HTTP status of ${t}.`,"non-precached-url":({url:e})=>`createHandlerBoundToURL('${e}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:e})=>"Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL "+e+" with different integrity values. Please remove one of them.","missing-precache-entry":({cacheName:e,url:t})=>`Unable to find a precached response in ${e} for ${t}.`};class i extends Error{constructor(e,t){super(((e,t={})=>{const r=c[e];if(!r)throw new Error(`Unable to find message for code '${e}'.`);return r(t)})(e,t)),this.name=e,this.details=t}}const l=(e,t)=>{if(!Array.isArray(e))throw new i("not-an-array",t)},u=(e,t,r)=>{if(!(e instanceof t))throw r.expectedClass=t,new i("incorrect-class",r)},h=new Set,d=(e,t)=>e.filter((e=>t in e)),p=async({request:e,mode:t,plugins:r=[]})=>{const a=d(r,"cacheKeyWillBeUsed");let n=e;for(const e of a)n=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:n}),"string"==typeof n&&(n=new Request(n)),u(n,Request,{moduleName:"Plugin",funcName:"cacheKeyWillBeUsed",isReturnValueProblem:!0});return n},f=async({cacheName:e,request:t,response:r,event:a,plugins:n=[],matchOptions:c})=>{if(t.method&&"GET"!==t.method)throw new i("attempt-to-cache-non-get-request",{url:s(t.url),method:t.method});const l=await p({plugins:n,request:t,mode:"write"});if(!r)throw o.error(`Cannot cache non-existent response for '${s(l.url)}'.`),new i("cache-put-with-no-response",{url:s(l.url)});const f=await(async({request:e,response:t,event:r,plugins:a=[]})=>{let n=t,s=!1;for(const t of a)if("cacheWillUpdate"in t){s=!0;const a=t.cacheWillUpdate;if(n=await a.call(t,{request:e,response:n,event:r}),n&&u(n,Response,{moduleName:"Plugin",funcName:"cacheWillUpdate",isReturnValueProblem:!0}),!n)break}return s||(n&&200!==n.status&&(0===n.status?o.warn(`The response for '${e.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`):o.debug(`The response for '${e.url}' returned a status code of '${t.status}' and won't be cached as a result.`)),n=n&&200===n.status?n:void 0),n||null})({event:a,plugins:n,response:r,request:l});if(!f)return void o.debug(`Response '${s(l.url)}' will not be cached.`,f);const g=await self.caches.open(e),m=d(n,"cacheDidUpdate"),w=m.length>0?await(async({cacheName:e,request:t,event:r,matchOptions:a,plugins:n=[]})=>{const s=await self.caches.open(e),c=await p({plugins:n,request:t,mode:"read"});let i=await s.match(c,a);i?o.debug(`Found a cached response in '${e}'.`):o.debug(`No cached response found in '${e}'.`);for(const t of n)if("cachedResponseWillBeUsed"in t){const n=t.cachedResponseWillBeUsed;i=await n.call(t,{cacheName:e,event:r,matchOptions:a,cachedResponse:i,request:c}),i&&u(i,Response,{moduleName:"Plugin",funcName:"cachedResponseWillBeUsed",isReturnValueProblem:!0})}return i})({cacheName:e,matchOptions:c,request:l}):null;o.debug(`Updating the '${e}' cache with a new Response for `+s(l.url)+".");try{await g.put(l,f)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){o.log(`About to run ${h.size} callbacks to clean up caches.`);for(const e of h)await e(),o.log(e,"is complete.");o.log("Finished running callbacks.")}(),e}for(const t of m)await t.cacheDidUpdate.call(t,{cacheName:e,event:a,oldResponse:w,newResponse:f,request:l})};let g,m;function w(e){if(!e)throw new i("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:r}=e;if(!r)throw new i("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(r,location.href),n=new URL(r,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:n.href}}function y(e,t){if(0!==t.length){o.groupCollapsed(e);for(const e of t)o.log(e);o.groupEnd()}}class v{constructor(e){this._cacheName=n(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){l(e,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"addToCacheList",paramName:"entries"});const t=[];for(const r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url);const{cacheKey:e,url:a}=w(r),n="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new i("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==r.integrity)throw new i("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,r.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,n),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;o.warn(e)}}}async install({event:e,plugins:t}={}){t&&l(t,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"install",paramName:"plugins"});const r=[],a=[],n=await self.caches.open(this._cacheName),s=await n.keys(),c=new Set(s.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?a.push(e):r.push({cacheKey:t,url:e});const i=r.map((({cacheKey:r,url:a})=>{const n=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a);return this._addURLToCache({cacheKey:r,cacheMode:s,event:e,integrity:n,plugins:t,url:a})}));await Promise.all(i);const u=r.map((e=>e.url));return function(e,t){const r=e.length,a=t.length;if(r||a){let n=`Precaching ${r} file${1===r?"":"s"}.`;a>0&&(n+=` ${a} file${1===a?" is":"s are"} already cached.`),o.groupCollapsed(n),y("View newly precached URLs.",e),y("View previously precached URLs.",t),o.groupEnd()}}(u,a),{updatedURLs:u,notUpdatedURLs:a}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)r.has(n.url)||(await e.delete(n),a.push(n.url));return function(e){const t=e.length;t>0&&(o.groupCollapsed("During precaching cleanup, "+t+" cached "+`request${1===t?" was":"s were"} deleted.`),((e,t)=>{o.groupCollapsed("Deleted Cache Requests");for(const e of t)o.log(e);o.groupEnd()})(0,e),o.groupEnd())}(a),{deletedURLs:a}}async _addURLToCache({cacheKey:e,url:t,cacheMode:r,event:a,plugins:n,integrity:c}){const l=new Request(t,{integrity:c,cache:r,credentials:"same-origin"});let h,p=await(async({request:e,fetchOptions:t,event:r,plugins:a=[]})=>{if("string"==typeof e&&(e=new Request(e)),r instanceof FetchEvent&&r.preloadResponse){const t=await r.preloadResponse;if(t)return o.log(`Using a preloaded navigation response for '${s(e.url)}'`),t}u(e,Request,{paramName:"request",expectedClass:Request,moduleName:"workbox-core",className:"fetchWrapper",funcName:"wrappedFetch"});const n=d(a,"fetchDidFail"),c=n.length>0?e.clone():null;try{for(const t of a)if("requestWillFetch"in t){const a=t.requestWillFetch,n=e.clone();(e=await a.call(t,{request:n,event:r}))&&u(e,Request,{moduleName:"Plugin",funcName:"cachedResponseWillBeUsed",isReturnValueProblem:!0})}}catch(e){throw new i("plugin-error-request-will-fetch",{thrownError:e})}const l=e.clone();try{let n;n="navigate"===e.mode?await fetch(e):await fetch(e,t),o.debug(`Network request for '${s(e.url)}' returned a response with status '${n.status}'.`);for(const e of a)"fetchDidSucceed"in e&&(n=await e.fetchDidSucceed.call(e,{event:r,request:l,response:n}),n&&u(n,Response,{moduleName:"Plugin",funcName:"fetchDidSucceed",isReturnValueProblem:!0}));return n}catch(t){o.error(`Network request for '${s(e.url)}' threw an error.`,t);for(const e of n)await e.fetchDidFail.call(e,{error:t,event:r,originalRequest:c.clone(),request:l.clone()});throw t}})({event:a,plugins:n,request:l});for(const e of n||[])"cacheWillUpdate"in e&&(h=e);if(!(h?await h.cacheWillUpdate({event:a,request:l,response:p}):p.status<400))throw new i("bad-precaching-response",{url:t,status:p.status});p.redirected&&(p=await async function(e,t){const r=e.clone(),a={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},n=t?t(a):a,s=function(){if(void 0===g){const e=new Response("");if("body"in e)try{new Response(e.body),g=!0}catch(e){g=!1}g=!1}return g}()?r.body:await r.blob();return new Response(s,n)}(p)),await f({event:a,plugins:n,response:p,request:e===t?l:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this._cacheName)).match(r)}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new i("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(r){if(e)return o.debug("Unable to respond with precached response. Falling back to network.",r),fetch(t);throw r}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new i("non-precached-url",{url:e});const r=this.createHandler(t),a=new Request(e);return()=>r({request:a})}}const b=()=>(m||(m=new v),m);let $=!1;const R=e=>{const r=b(),a=t.get();e.waitUntil(r.install({event:e,plugins:a}).catch((e=>{throw o.error("Service worker installation failed. It will be retried automatically during the next navigation."),e})))},N=e=>{const t=b();e.waitUntil(t.activate())};var U;r(80),r(873),U=[{'revision':'505c0cf1effddffef5647c779e1bff39','url':'./0e3295e4662107e65d1f8f13f4ba967c.svg'},{'revision':'e79c5c4c731b786dd54a2b9ef382a990','url':'./2169919dec52ee59e0066c7042d4e7cf.png'},{'revision':'3e5baba37cb12b0a9dcf31c5cb400943','url':'./2bfa27340655858f8ebb60b791e8debb.svg'},{'revision':'cf0c14860e5f183f8b9c29476a15fed2','url':'./586be925d2da6180d3fe917fd37efa0b.svg'},{'revision':'83c8bca1a5ad16e5cf9968250651e351','url':'./78492f0a1915464b90c8acc9c91b67cb.scss'},{'revision':'0d5aa0351e55efe54545f936ff2e8eb7','url':'./app.6998369da669e26371d9.js'},{'revision':'cbba7d3f8fd8ec4712b965d5ba6c6a99','url':'./app.css'},{'revision':'8a9959519d70070a08b35621b15b81e1','url':'./icon_192x192.8a9959519d70070a08b35621b15b81e1.png'},{'revision':'ae50ebca0771b335e40c40016a00fc58','url':'./icon_256x256.ae50ebca0771b335e40c40016a00fc58.svg'},{'revision':'1a2cedfce476d482cbb5b12cba7e4146','url':'./icon_512x512.1a2cedfce476d482cbb5b12cba7e4146.png'},{'revision':'73fbab8e9993fa3f04b8c4405091125b','url':'./icon_96x96.73fbab8e9993fa3f04b8c4405091125b.png'},{'revision':'d8fb3d9183b0f5ad72c36cdbb6c25204','url':'./index.html'},{'revision':'e0cfbb0d9a0f8986d06f96185e26c4a4','url':'./manifest.webmanifest'},{'revision':'324411c4130e16d0e266ca27d7f1820c','url':'./runtime.0c1168a6cf3797354796.js'},{'revision':'e3e836aca9b7e3363003886a2667fcca','url':'./vendors.414d22588325a656db50.js'}],b().addToCacheList(U),U.length>0&&(self.addEventListener("install",R),self.addEventListener("activate",N)),function(e){$||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:r=!0,urlManipulation:a}={})=>{const c=n();self.addEventListener("fetch",(n=>{const i=((e,t)=>{const r=b().getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t,directoryIndex:r,cleanURLs:a,urlManipulation:n}={}){const s=new URL(e,location.href);s.hash="",yield s.href;const o=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(s,t);if(yield o.href,r&&o.pathname.endsWith("/")){const e=new URL(o.href);e.pathname+=r,yield e.href}if(a){const e=new URL(o.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:s});for(const t of e)yield t.href}}(e,t)){const e=r.get(a);if(e)return e}})(n.request.url,{cleanURLs:r,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:a});if(!i)return void o.debug("Precaching did not find a match for "+s(n.request.url));let l=self.caches.open(c).then((e=>e.match(i))).then((e=>e||(o.warn(`The precached response for ${s(i)} in ${c} was not found. Falling back to the network instead.`),fetch(i))));l=l.then((e=>(o.groupCollapsed("Precaching is responding to: "+s(n.request.url)),o.log("Serving the precached url: "+i),o.groupCollapsed("View request details here."),o.log(n.request),o.groupEnd(),o.groupCollapsed("View response details here."),o.log(e),o.groupEnd(),o.groupEnd(),e))),n.respondWith(l)}))})(e),$=!0)}(undefined),self.portSW,self.addEventListener("message",(function(e){var t=e.data.type;switch(console.log(t),t){case"init":self.portSW=e.ports[0],console.log("initialized sw")}self.portSW&&portSW.start()})),console.log=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];self.portSW&&portSW.postMessage({type:"consoleLog",content:t})}})()})();