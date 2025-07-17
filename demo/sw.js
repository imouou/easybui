/**
 * BUI PWA 离线缓存的资源
 */
var cacheName = 'BUI-Demo-v0.3';
// 匹配到部分url，即可不存缓存
var noCacheUrl = ["hm.baidu.com", "api/"];
// 默认缓存的资源
var cacheUrls = [
    '/demo/index.html',
    '/demo/index.js',
    '/demo/manifest.json',
    '/demo/css/bui.css',
    '/demo/css/style.css',
    '/demo/font/iconfont.eot',
    '/demo/font/iconfont.svg',
    '/demo/font/iconfont.ttf',
    '/demo/font/iconfont.woff',
    '/demo/js/zepto.js',
    '/demo/js/bui.js',
    '/demo/js/global.js',
    '/demo/images/applogo.png',
    '/demo/images/img.svg',
    '/demo/images/list-img1.png',
    '/demo/images/list-img2.png',
    '/demo/pages/main/controls.html',
    '/demo/pages/main/controls.js',
    '/demo/pages/store/index.html',
    '/demo/pages/store/index.js',
    '/demo/pages/main/method.html',
    '/demo/pages/main/method.js',
    '/demo/pages/main/frame.html',
    '/demo/pages/main/frame.js',
    '/demo/pages/main/main.html',
    '/demo/pages/main/main.js'
];

// 保存缓存的文件
self.addEventListener('install', function (event) {
    // console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                // console.log('Opened cache', cache);
                return cache.addAll(cacheUrls);
            })
    );
});

self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);
    // 外部链接不缓存
    for (let i = 0; i < noCacheUrl.length; i++) {
        let item = noCacheUrl[i];
        if (e.request.url.indexOf(item) > -1) {

            return fetch(e.request).then(function (response) {
                return response;
            });
        }
    }
    // 如果缓存有，则返回缓存内容，如果缓存没有，重新请求，加入到缓存里面
    e.respondWith(
        caches.match(e.request).then(function (r) {
            // console.log('[Service Worker] Fetching resource: ' + e.request.url);
            return r || fetch(e.request).then(function (response) {
                return caches.open(cacheName).then(function (cache) {
                    // console.log('[Service Worker] Caching new resource: ' + e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});


// 立即激活
self.addEventListener('activate', event => {
    console.log("activate")
    event.waitUntil(self.clients.claim())
})
// 删除缓存
// self.addEventListener('activate', function (event) {
//     console.log('activate');
//     var cacheAllowlist = ['global.js'];
//     event.waitUntil(
//         caches.keys().then(function (cacheNames) {
//             return Promise.all(
//                 cacheNames.map(function (cacheName) {
//                     if (cacheAllowlist.indexOf(cacheName) === -1) {
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
//         })
//     );
// });
