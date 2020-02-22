var version = "1.2";

self.addEventListener("install", (e) => {
	e.waitUntil(caches.open(version).then((cache) => {
		return cache.addAll([
			"/dice7/dice7-512.png",
			"/dice7/dice7-256.png",
			"/dice7/dice7-128.png",
			"/dice7/dice7-144.png",
			"/dice7/dice7-backdrop.png",
			"/dice7/favicon.ico",
			"/dice7/dice7_logo.svg",
			"/dice7/dice7_logo_kontur.svg",
			"/dice7/index.html",
			"/dice7/"
		]);
	}).then(() => { return self.skipWaiting(); }));
});

self.addEventListener("activate", (e) => {
	e.waitUntil(self.skipWaiting());
	e.waitUntil(
		caches.keys().then((cnames) => {
			return Promise.all(
				cnames.map((cname) => {
					if (cname !== version) {
						console.log("deleting old cache");
						return caches.delete(cname);
					}
				})
			);
		}).then(() => {
			return self.clients.claim();
		})
	);
});

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			if (response) {
				return response;
			}
			return fetch(e.request);
		})
	);
});
