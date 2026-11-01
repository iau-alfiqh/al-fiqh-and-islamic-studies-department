const V="fiqh-v13";
const F=["./","index.html","data.js","year2.js","year3.js","year4.js","masters1.js","site.js","features.js","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png","og-image.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 const r=e.request;
 if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}return res}).catch(()=>caches.match(r).then(hit=>hit||(r.mode==="navigate"?caches.match("index.html"):null)||new Response("Offline: this page is not available yet.",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}}))));
});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.openWindow("./#/notice"))});
