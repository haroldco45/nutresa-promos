const CACHE = "nutresa-oct26-v2";
const ARCHIVOS = ["./","index.html","manifest.json","icon-192.png","icon-512.png",
  "img/salchicha-zenu.jpg","img/saltin-pentataco.jpg","img/saltin-taco-dia.jpg","img/logo-distrileco.jpg","img/logo-nutresa.jpg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(ARCHIVOS.map(a => c.add(a).catch(()=>{})))));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && new URL(e.request.url).origin === location.origin) {
        const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia));
      }
      return r;
    }).catch(() => caches.match(e.request))
  );
});
