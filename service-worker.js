/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1ffe2a105b7a271619c1489e49c218cc"
  },
  {
    "url": "afdian.png",
    "revision": "4eb0591a2b72283717a117f2fb216689"
  },
  {
    "url": "ali.png",
    "revision": "34396da8311095bcf9ec51605d512d54"
  },
  {
    "url": "alipay.png",
    "revision": "bca77f7cad38ac92553faaab2b575147"
  },
  {
    "url": "assets/css/0.styles.8f581b9b.css",
    "revision": "0861e6d8e81f7a4baa8892b449d9a45f"
  },
  {
    "url": "assets/img/1.2388a0f3.png",
    "revision": "2388a0f347287df240082990e68bf5b8"
  },
  {
    "url": "assets/img/2.c7ed3610.png",
    "revision": "c7ed3610ed00d8a29e9048ab41f92610"
  },
  {
    "url": "assets/img/3.56efea7a.png",
    "revision": "56efea7ad861755aaf42abedeaed00a7"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.cc552dfd.svg",
    "revision": "cc552dfd1641ce914da841151bf34292"
  },
  {
    "url": "assets/img/myicon.c3d06088.svg",
    "revision": "c3d06088925858f6097d1fc61878de72"
  },
  {
    "url": "assets/js/1.65f87715.js",
    "revision": "0e1b38d2b4b13cae88bc37de0dfed49c"
  },
  {
    "url": "assets/js/10.ef5be002.js",
    "revision": "6e9cc089c5ad0e58dbdbca857f59e39b"
  },
  {
    "url": "assets/js/11.738b37e2.js",
    "revision": "dd6ce1611d491f933b70dbdf1115ff01"
  },
  {
    "url": "assets/js/12.7b06c6fe.js",
    "revision": "08f84accb32751e4f0a1ae24a5a44fb8"
  },
  {
    "url": "assets/js/13.b8816588.js",
    "revision": "0dcdca57e96331491fbb4d266583f96c"
  },
  {
    "url": "assets/js/14.7255f606.js",
    "revision": "61f98e8d79e0e8b8e72d1fbc18c1a17c"
  },
  {
    "url": "assets/js/15.2fbb2b70.js",
    "revision": "8c300d758d7f2df920dcb6a44d17eb46"
  },
  {
    "url": "assets/js/16.06c31bfc.js",
    "revision": "475ecc81bde4c2df459299e5e2eea70e"
  },
  {
    "url": "assets/js/17.814fa6bd.js",
    "revision": "b68b632841feae2bc7dc695d4e3c69c2"
  },
  {
    "url": "assets/js/18.621954b8.js",
    "revision": "f3adedf4b4883862ca302da98bc53479"
  },
  {
    "url": "assets/js/19.810f9e30.js",
    "revision": "dd465931982098430af53e2b1e6ba147"
  },
  {
    "url": "assets/js/2.75b96076.js",
    "revision": "258773c849d006836cef995e56447d55"
  },
  {
    "url": "assets/js/20.e834e5ad.js",
    "revision": "ddb7116cb4f591e4c0c7185f9b8e0f76"
  },
  {
    "url": "assets/js/21.421c58a9.js",
    "revision": "0e1c1323a697d144a8016d6bc0c94783"
  },
  {
    "url": "assets/js/22.25ea3c96.js",
    "revision": "cb443c1862bb2ba4ae5acf528c391806"
  },
  {
    "url": "assets/js/23.61ed307a.js",
    "revision": "1f02c199e8ce19218519952245ec1a33"
  },
  {
    "url": "assets/js/24.175d5284.js",
    "revision": "6bd85600a22b260b7307b6b0263491c4"
  },
  {
    "url": "assets/js/25.d41e99f6.js",
    "revision": "444b885457f0d6af2a2eee461bc1ae80"
  },
  {
    "url": "assets/js/26.f680a920.js",
    "revision": "3b2d82cb16bd0823f1329255585f40ac"
  },
  {
    "url": "assets/js/27.468dd0be.js",
    "revision": "36e6f9034b24223cc42fadbed10aa3e3"
  },
  {
    "url": "assets/js/28.9ec3f523.js",
    "revision": "96e8c23884718de879b7a7c2575ebb09"
  },
  {
    "url": "assets/js/29.2e4645ba.js",
    "revision": "3e0fc343c95912a6132867c6168f1395"
  },
  {
    "url": "assets/js/3.8f092152.js",
    "revision": "4c8b4e64b5b2ca265923fa2d3c3d89fb"
  },
  {
    "url": "assets/js/30.414c7b23.js",
    "revision": "eb23a9a045cb4303a3bf530601ca5048"
  },
  {
    "url": "assets/js/31.56e4e358.js",
    "revision": "70a20051bb79b74e6904320bcdb45f24"
  },
  {
    "url": "assets/js/7.db9bf512.js",
    "revision": "72a4273e07a8a28981789df18c2e47c0"
  },
  {
    "url": "assets/js/8.b539a84f.js",
    "revision": "8c9c1aca8bd4b047688e774cf37ce260"
  },
  {
    "url": "assets/js/9.5de70cb0.js",
    "revision": "f25c15679630dcb0704ebe1cc4e48cfe"
  },
  {
    "url": "assets/js/app.ff98cc6f.js",
    "revision": "8a339f519540508dcb1785e3ccec4231"
  },
  {
    "url": "assets/js/vendors~docsearch.5df63b2a.js",
    "revision": "273b76cfbd173a956aad4e5a1f404172"
  },
  {
    "url": "assets/js/vendors~flowchart.bb3ab278.js",
    "revision": "d4789a0423b138a2cbad76f1b18951b9"
  },
  {
    "url": "categories/index.html",
    "revision": "e547168f92bab9568987b31774067ddc"
  },
  {
    "url": "googleea31ca71997d7a22.html",
    "revision": "e8e6adbd7e5aec4222f1e8f9ea95fdfe"
  },
  {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon.png",
    "revision": "eed06cf2fc5b064e600aa10ea521ef2b"
  },
  {
    "url": "icon.svg",
    "revision": "c3d06088925858f6097d1fc61878de72"
  },
  {
    "url": "index.html",
    "revision": "97311c508357ce62bf1006b6328cc338"
  },
  {
    "url": "qq.png",
    "revision": "b60315e63c60cd9ef0d377295f051b87"
  },
  {
    "url": "tag/index.html",
    "revision": "ecdfeb99a0c7832d25832cee7939ac49"
  },
  {
    "url": "timeline/index.html",
    "revision": "62cf832996d7a96570d6303d3f28353c"
  },
  {
    "url": "views/main/config-client.html",
    "revision": "042abac8f92e6bb9e3fc3ed92b3513a1"
  },
  {
    "url": "views/main/donate.html",
    "revision": "06a0470aa1e9ac3dd48187e426d358ac"
  },
  {
    "url": "views/main/download.html",
    "revision": "032f55c17708ac91ebfe5700890f8df8"
  },
  {
    "url": "views/main/index.html",
    "revision": "a0ee0180966153503b302a0df94ab4ac"
  },
  {
    "url": "views/main/mod.html",
    "revision": "3b3875521857bf783593bba291616439"
  },
  {
    "url": "views/main/question.html",
    "revision": "4f5ae68d6c6c91d42fb8f506bc1bd07c"
  },
  {
    "url": "views/main/reg-skin.html",
    "revision": "0b420dd02605cba25130c550890bfbf5"
  },
  {
    "url": "views/main/server.html",
    "revision": "f7ccf0a4874d86edc4762c345e47637f"
  },
  {
    "url": "views/others/bot.html",
    "revision": "894aa054b66e97940e6125c861877498"
  },
  {
    "url": "views/others/index.html",
    "revision": "3101409512ae8e683df569ebcfdb9a3c"
  },
  {
    "url": "views/others/messageBoard.html",
    "revision": "bf601dbac062276884a3d98ad23727b1"
  },
  {
    "url": "wechat.png",
    "revision": "3a4c1b5c5c76322ce485dcac7e0e5cc8"
  },
  {
    "url": "wx.png",
    "revision": "37fd9e8167bb118717bf546a58fbe39f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
