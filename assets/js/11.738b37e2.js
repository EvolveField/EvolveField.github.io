(window.webpackJsonp=window.webpackJsonp||[]).push([[11,14],{551:function(e,t,o){},555:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));o(69);var r={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function n(e){var t=document.querySelector(":root"),o=r[e],n="dark"===e?"light":"dark";for(var c in o)t.style.setProperty(c,o[c]);t.classList.remove(n),t.classList.add(e)}function c(e){if("auto"===e){var t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&n("dark"),o&&n("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");var r=(new Date).getHours();n(r<6||r>=18?"dark":"light")}}else n(e)}},556:function(e,t){function o(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function r(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,n){if(!o(t))return;function c(t){if(n.context){var o=t.path||t.composedPath&&t.composedPath();o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var o=0,r=t.length;o<r;o++)try{if(e.contains(t[o]))return!0;if(t[o].contains(e))return!1}catch(e){return!1}return!1}(n.context.popupItem,o)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:c,callback:t.value};const a="ontouchstart"in document.documentElement?"touchstart":"click";!r(n)&&document.addEventListener(a,c)},update:function(e,t){o(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){const n="ontouchstart"in document.documentElement?"touchstart":"click";!r(o)&&e.__vueClickOutside__&&document.removeEventListener(n,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},559:function(e,t,o){"use strict";o(551)},595:function(e,t,o){},603:function(e,t,o){"use strict";o.r(t);var r=o(555),n={name:"ModeOptions",data:function(){return{modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}},mounted:function(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){"auto"===e.$data.currentMode&&Object(r.a)(e.$data.currentMode)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){"auto"===e.$data.currentMode&&Object(r.a)(e.$data.currentMode)})),Object(r.a)(this.currentMode)},methods:{selectMode:function(e){e!==this.currentMode&&(this.currentMode=e,Object(r.a)(e),localStorage.setItem("mode",e))},getClass:function(e){return e!==this.currentMode?e:"".concat(e," active")}}},c=(o(559),o(2)),a=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mode-options"},[o("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),o("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(t,r){return o("li",{key:r,class:e.getClass(t.mode),on:{click:function(o){return e.selectMode(t.mode)}}},[e._v(e._s(t.title))])})),0)])}),[],!1,null,null,null);t.default=a.exports},652:function(e,t,o){"use strict";o(595)},679:function(e,t,o){"use strict";o.r(t);var r=o(165),n=o(556),c=o.n(n),a=o(603),i=o(555),u={name:"UserSettings",directives:{"click-outside":c.a},components:{ModePicker:a.default,RecoIcon:r.b,ModuleTransition:r.a},data:function(){return{showMenu:!1}},mounted:function(){var e=this.$themeConfig.mode||"auto";!1===this.$themeConfig.modePicker&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){Object(i.a)(e)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){Object(i.a)(e)}))),Object(i.a)(e))},methods:{hideMenu:function(){this.showMenu=!1}}},s=(o(652),o(2)),l=Object(s.a)(u,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return!1!==e.$themeConfig.modePicker?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[o("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[o("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),o("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[o("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);