'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3985f3ec0e922e6d7da10351498d5a90",
"splash/img/light-2x.png": "7a9051bfb0e8869c153b02bd8ab964c0",
"splash/img/dark-4x.png": "80d10348cc3e9a4ff0a6137c2677b678",
"splash/img/light-3x.png": "f3ba2e9dade2e0150f0643ad65d6f1d3",
"splash/img/dark-3x.png": "f3ba2e9dade2e0150f0643ad65d6f1d3",
"splash/img/light-4x.png": "80d10348cc3e9a4ff0a6137c2677b678",
"splash/img/dark-2x.png": "7a9051bfb0e8869c153b02bd8ab964c0",
"splash/img/dark-1x.png": "30e7feb81e4dc2b4b6e62d29c7fab44b",
"splash/img/light-1x.png": "30e7feb81e4dc2b4b6e62d29c7fab44b",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "48bbb5d859f250ad8f9fc620f98e05f1",
"index.html": "cd9b34b0810579ce86247bf7408f55a6",
"/": "cd9b34b0810579ce86247bf7408f55a6",
"main.dart.js": "0fbf8f37706b49f0ae242acb0ad6abe5",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "039ffd702079a317085c07b25a79dad8",
"icons/Icon-192.png": "5f011194a98ad88faba3e6bfb6ef74f7",
"icons/Icon-maskable-192.png": "5f011194a98ad88faba3e6bfb6ef74f7",
"icons/Icon-maskable-512.png": "80d10348cc3e9a4ff0a6137c2677b678",
"icons/Icon-512.png": "80d10348cc3e9a4ff0a6137c2677b678",
"manifest.json": "809dc3cb735c4dc1fea87820b9ffe011",
"assets/AssetManifest.json": "2abb51e89fa0da5fed25fcea4753593c",
"assets/NOTICES": "8967d1f84d2bb31372ab38d99d47c1b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/hand-left.svg": "471bbeee2b35182ba925f2103c7b7925",
"assets/assets/images/r_item_9.png": "766f3170acc25eceaf987949c531df35",
"assets/assets/images/r_item_8.png": "ab46fefae7e85832d9c29fba621af353",
"assets/assets/images/slot_bg.png": "86d46cae704edeb8e55f4fb47f4b06e2",
"assets/assets/images/hand-right.svg": "ae1410dbbe4f392fb5ea7e30bd9c6e56",
"assets/assets/images/logo2.jpg": "df641526ae8540b1c0795b318c872200",
"assets/assets/images/r_item_3.png": "c023976034b9918bf9c98120b2ffd334",
"assets/assets/images/slot_bg_bg.png": "7cc85accf6481f0f1c453085f518c77d",
"assets/assets/images/slot_bg2.png": "ed05574a75a1e12b12a9d675b0eef879",
"assets/assets/images/r_item_2.png": "69da430bc1f565ffa29a554a1cf87e0e",
"assets/assets/images/r_item_0.png": "9fc6df20143dfa5321d73641c7f38252",
"assets/assets/images/r_item_1.png": "97453b2cc583d16f8b81220da1d6d081",
"assets/assets/images/r_item_5.png": "abc01f0c5f5be75ea90430e7c897fe90",
"assets/assets/images/table.png": "62f8951d35400a48ed603bfe282d5805",
"assets/assets/images/r_item_4.png": "48b3528c8eb3045f46e74cfe54b0e331",
"assets/assets/images/slot_bg_bg2.png": "3c3293d8193f55753050933b19b49b7d",
"assets/assets/images/r_item_6.png": "bdee2a5d4b780c7013e4b8e882002987",
"assets/assets/images/r_item_7.png": "cc046ce68de8b0fe82a7b808b3280db3",
"assets/assets/sounds/spin-loop.mp3": "287cfebe6a5ab9f31f110588a791ea3d",
"assets/assets/sounds/win-end.mp3": "7ed89d27b771cb77ca84553a211085df",
"assets/assets/sounds/stop.mp3": "ac34492bff4beca6830bc7b08c3b215b",
"assets/assets/sounds/win-loop.mp3": "a0fcd4524977eb3201f5480422fce719",
"assets/assets/sounds/pull-slot.mp3": "27804178b3b193e7a60fdea82f1f4607",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
