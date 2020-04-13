(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(t,e,i){"use strict";e.a='<h1 align="center">Markdown Editor built on Vue</h1>\n\n<p align="center">\n  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n</p>\n\n## Install\n\n```bash\n# use npm\nnpm i @kangc/v-md-editor -S\n\n# use yarn\nyarn add @kangc/v-md-editor\n```\n\n## Quick Start\n\n```js\nimport Vue from \'vue\';\nimport VueMarkdownEditor from \'@kangc/v-md-editor\';\nimport \'@kangc/v-md-editor/lib/style/editor.css\';\nimport vuepressTheme from \'@kangc/v-md-editor/lib/theme/vuepress.js\';\n\nVueMarkdownEditor.use(vuepressTheme);\n\nVue.use(VueMarkdownEditor);\n```\n\n## Useage\n\n```html\n<template>\n  <v-md-editor v-model="text" height="400px"></v-md-editor>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: \'\',\n      };\n    },\n  };\n<\/script>\n```\n\n## Links\n\n- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)\n- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)\n'},278:function(t,e,i){(function(t){var n,r,o;i(64),i(65),i(158),i(150),i(17),i(61),i(97),i(145),i(30),i(159),i(160),i(15),i(152),i(148),i(29),i(149),i(41),i(146),i(147),i(198),i(63);var a,s=i(161);"undefined"!=typeof self&&self,a=function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==s(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e,i){var n=i(36),r=i(39),o=i(43);function a(t,e){return new o(e).process(t)}for(var s in(e=t.exports=a).filterXSS=a,e.FilterXSS=o,n)e[s]=n[s];for(var s in r)e[s]=r[s];"undefined"!=typeof window&&(window.filterXSS=t.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)},,function(t,e,i){"use strict";function n(t,e,i,n,r,o,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}i.d(e,"a",(function(){return n}))},function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-md-editor-preview",class:[this.themeConfig.previewClass],domProps:{innerHTML:this._s(this.html)}})};n._withStripped=!0;var r=i(0),o=i.n(r);o.a.whiteList.input=["type","src","disabled","checked","class"],o.a.whiteList.img=["src","alt","title","width","max-width","style","height"],o.a.whiteList.math=[],o.a.whiteList.semantics=[],o.a.whiteList.mrow=[],o.a.whiteList.mtext=[],o.a.whiteList.annotation=["encoding"],o.a.whiteList.msub=[],o.a.whiteList.mi=[],o.a.whiteList.mo=[],o.a.whiteList.mn=[],o.a.whiteList.li=["class"],o.a.whiteList.span=["class","title","aria-hidden","style"],o.a.whiteList.code=[],o.a.whiteList.li=["class","id"],o.a.whiteList.td=["style","class"],o.a.whiteList.p=["style","class"],o.a.whiteList.div=["style","class"],o.a.whiteList.a=["style","class","id","target","href","title"],o.a.stripIgnoreTag=!0;var a=o.a,s=function(t){return t},l={name:"v-md-preview",props:{text:{type:String,default:""},theme:Object},data:function(){return{html:""}},computed:{themeConfig:function(){return this.theme||this.$options.themeConfig||{}},markdownParser:function(){return this.themeConfig.markdownParser},markdownLoader:function(){var t;return(null==(t=this.markdownParser)?void 0:t.render.bind(this.markdownParser))||s}},watch:{text:{immediate:!0,handler:function(t,e){this.html=a(this.markdownLoader(this.text)),void 0!==e&&this.$emit("change",this.text,this.html)}}},created:function(){var t,e=this;"function"!=typeof this.markdownLoader||this.markdownLoader===s?console.warn("Please configure your markdown parser"):[].concat((null==(t=this.theme)?void 0:t.markdownExtenders)||[],this.$options.markdownExtenders).forEach((function(t){t(e.markdownParser)}))},theme:function(t){l.themeConfig=t},markdownExtenders:[],extendMarkdown:function(t){l.markdownExtenders.push(t)}},c=l,d=(i(44),i(2)),u=Object(d.a)(c,n,[],!1,null,null,null);u.options.__file="src/preview.vue";var f=u.exports,p=function(t){t.component(f.name,f)};"undefined"!=typeof window&&window.Vue&&p(window.Vue),f.version="1.0.10",f.install=p,f.use=function(t){"function"==typeof t?t(f):t.install(f)},e.default=f},function(t,e,i){},,,function(t,e,i){var n=i(37),r=i(41);for(var o in(e=t.exports=function(t,e){return new r(e).process(t)}).FilterCSS=r,n)e[o]=n[o];"undefined"!=typeof window&&(window.filterCSS=t.exports)},function(t,e){t.exports={indexOf:function(t,e){var i,n;if(Array.prototype.indexOf)return t.indexOf(e);for(i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},forEach:function(t,e,i){var n,r;if(Array.prototype.forEach)return t.forEach(e,i);for(n=0,r=t.length;n<r;n++)e.call(i,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){var n=i(7).FilterCSS,r=i(7).getDefaultWhiteList,o=i(8),a=new n;function s(t){return t.replace(l,"&lt;").replace(c,"&gt;")}var l=/</g,c=/>/g,d=/"/g,u=/&quot;/g,f=/&#([a-zA-Z0-9]*);?/gim,p=/&colon;?/gim,g=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,h=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,b=/u\s*r\s*l\s*\(.*/gi;function v(t){return t.replace(d,"&quot;")}function w(t){return t.replace(u,'"')}function y(t){return t.replace(f,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function k(t){return t.replace(p,":").replace(g," ")}function x(t){for(var e="",i=0,n=t.length;i<n;i++)e+=t.charCodeAt(i)<32?" ":t.charAt(i);return o.trim(e)}function A(t){return x(t=k(t=y(t=w(t))))}function T(t){return s(t=v(t))}var S=/<!--[\s\S]*?-->/g;e.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},e.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}},e.onTag=function(t,e,i){},e.onIgnoreTag=function(t,e,i){},e.onTagAttr=function(t,e,i){},e.onIgnoreTagAttr=function(t,e,i){},e.safeAttrValue=function(t,e,i,n){if(i=A(i),"href"===e||"src"===e){if("#"===(i=o.trim(i)))return"#";if("http://"!==i.substr(0,7)&&"https://"!==i.substr(0,8)&&"mailto:"!==i.substr(0,7)&&"tel:"!==i.substr(0,4)&&"#"!==i[0]&&"/"!==i[0])return""}else if("background"===e){if(m.lastIndex=0,m.test(i))return""}else if("style"===e){if(h.lastIndex=0,h.test(i))return"";if(b.lastIndex=0,b.test(i)&&(m.lastIndex=0,m.test(i)))return"";!1!==n&&(i=(n=n||a).process(i))}return T(i)},e.escapeHtml=s,e.escapeQuote=v,e.unescapeQuote=w,e.escapeHtmlEntities=y,e.escapeDangerHtml5Entities=k,e.clearNonPrintableCharacter=x,e.friendlyAttrValue=A,e.escapeAttrValue=T,e.onIgnoreTagStripAll=function(){return""},e.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var i=!Array.isArray(t),n=[],r=!1;return{onIgnoreTag:function(a,s,l){if(function(e){return!!i||-1!==o.indexOf(t,e)}(a)){if(l.isClosing){var c="[/removed]",d=l.position+c.length;return n.push([!1!==r?r:l.position,d]),r=!1,c}return r||(r=l.position),"[removed]"}return e(a,s,l)},remove:function(t){var e="",i=0;return o.forEach(n,(function(n){e+=t.slice(i,n[0]),i=n[1]})),e+=t.slice(i)}}},e.stripCommentTag=function(t){return t.replace(S,"")},e.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)}))).join("")},e.cssFilter=a,e.getDefaultCSSWhiteList=r},function(t,e){function i(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}var n=/javascript\s*\:/gim;e.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},e.getDefaultWhiteList=i,e.onAttr=function(t,e,i){},e.onIgnoreAttr=function(t,e,i){},e.safeAttrValue=function(t,e){return n.test(e)?"":e}},function(t,e){t.exports={indexOf:function(t,e){var i,n;if(Array.prototype.indexOf)return t.indexOf(e);for(i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},forEach:function(t,e,i){var n,r;if(Array.prototype.forEach)return t.forEach(e,i);for(n=0,r=t.length;n<r;n++)e.call(i,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},function(t,e,i){var n=i(8);function r(t){var e=n.spaceIndex(t);if(-1===e)var i=t.slice(1,-1);else i=t.slice(1,e+1);return"/"===(i=n.trim(i).toLowerCase()).slice(0,1)&&(i=i.slice(1)),"/"===i.slice(-1)&&(i=i.slice(0,-1)),i}function o(t){return"</"===t.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function s(t,e){for(;e<t.length;e++){var i=t[e];if(" "!==i)return"="===i?e:-1}}function l(t,e){for(;e>0;e--){var i=t[e];if(" "!==i)return"="===i?e:-1}}function c(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}e.parseTag=function(t,e,i){var n="",a=0,s=!1,l=!1,c=0,d=t.length,u="",f="";for(c=0;c<d;c++){var p=t.charAt(c);if(!1===s){if("<"===p){s=c;continue}}else if(!1===l){if("<"===p){n+=i(t.slice(a,c)),s=c,a=c;continue}if(">"===p){n+=i(t.slice(a,s)),u=r(f=t.slice(s,c+1)),n+=e(s,n.length,u,f,o(f)),a=c+1,s=!1;continue}if(('"'===p||"'"===p)&&"="===t.charAt(c-1)){l=p;continue}}else if(p===l){l=!1;continue}}return a<t.length&&(n+=i(t.substr(a))),n},e.parseAttr=function(t,e){var i=0,r=[],o=!1,d=t.length;function u(t,i){if(!((t=(t=n.trim(t)).replace(a,"").toLowerCase()).length<1)){var o=e(t,i||"");o&&r.push(o)}}for(var f=0;f<d;f++){var p,g=t.charAt(f);if(!1!==o||"="!==g)if(!1===o||f!==i||'"'!==g&&"'"!==g||"="!==t.charAt(f-1)){if(/\s|\n|\t/.test(g)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(p=s(t,f))){u(n.trim(t.slice(i,f))),o=!1,i=f+1;continue}f=p-1;continue}if(-1===(p=l(t,f-1))){u(o,c(n.trim(t.slice(i,f)))),o=!1,i=f+1;continue}}}else{if(-1===(p=t.indexOf(g,f+1)))break;u(o,n.trim(t.slice(i+1,p))),o=!1,i=(f=p)+1}else o=t.slice(i,f),i=f+1}return i<t.length&&(!1===o?u(t.slice(i)):u(o,c(n.trim(t.slice(i))))),n.trim(r.join(" "))}},,function(t,e,i){var n=i(37),r=i(42);function o(t){return null==t}function a(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).whiteList=t.whiteList||n.whiteList,t.onAttr=t.onAttr||n.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||n.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||n.safeAttrValue,this.options=t}i(38),a.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,n=e.onAttr,a=e.onIgnoreAttr,s=e.safeAttrValue;return r(t,(function(t,e,r,l,c){var d=i[r],u=!1;if(!0===d?u=d:"function"==typeof d?u=d(l):d instanceof RegExp&&(u=d.test(l)),!0!==u&&(u=!1),l=s(r,l)){var f,p={position:e,sourcePosition:t,source:c,isWhite:u};return u?o(f=n(r,l,p))?r+":"+l:f:o(f=a(r,l,p))?void 0:f}}))},t.exports=a},function(t,e,i){var n=i(38);t.exports=function(t,e){";"!==(t=n.trimRight(t))[t.length-1]&&(t+=";");var i=t.length,r=!1,o=0,a=0,s="";function l(){if(!r){var i=n.trim(t.slice(o,a)),l=i.indexOf(":");if(-1!==l){var c=n.trim(i.slice(0,l)),d=n.trim(i.slice(l+1));if(c){var u=e(o,s.length,c,d,i);u&&(s+=u+"; ")}}}o=a+1}for(;a<i;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var d=t.indexOf("*/",a+2);if(-1===d)break;o=(a=d+1)+1,r=!1}else"("===c?r=!0:")"===c?r=!1:";"===c?r||l():"\n"===c&&l()}return n.trim(s)}},function(t,e,i){var n=i(7).FilterCSS,r=i(36),o=i(39),a=o.parseTag,s=o.parseAttr,l=i(8);function c(t){return null==t}function d(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=r.onIgnoreTagStripAll),t.whiteList=t.whiteList||r.whiteList,t.onTag=t.onTag||r.onTag,t.onTagAttr=t.onTagAttr||r.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||r.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||r.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||r.safeAttrValue,t.escapeHtml=t.escapeHtml||r.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new n(t.css))}d.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,n=e.onTag,o=e.onIgnoreTag,d=e.onTagAttr,u=e.onIgnoreTagAttr,f=e.safeAttrValue,p=e.escapeHtml,g=this.cssFilter;e.stripBlankChar&&(t=r.stripBlankChar(t)),e.allowCommentTag||(t=r.stripCommentTag(t));var m=!1;e.stripIgnoreTagBody&&(m=r.StripTagBody(e.stripIgnoreTagBody,o),o=m.onIgnoreTag);var h=a(t,(function(t,e,r,a,m){var h,b={sourcePosition:t,position:e,isClosing:m,isWhite:i.hasOwnProperty(r)};if(!c(h=n(r,a,b)))return h;if(b.isWhite){if(b.isClosing)return"</"+r+">";var v=function(t){var e=l.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var i="/"===(t=l.trim(t.slice(e+1,-1)))[t.length-1];return i&&(t=l.trim(t.slice(0,-1))),{html:t,closing:i}}(a),w=i[r],y=s(v.html,(function(t,e){var i,n=-1!==l.indexOf(w,t);return c(i=d(r,t,e,n))?n?(e=f(r,t,e,g))?t+'="'+e+'"':t:c(i=u(r,t,e,n))?void 0:i:i}));return a="<"+r,y&&(a+=" "+y),v.closing&&(a+=" /"),a+">"}return c(h=o(r,a,b))?p(a):h}),p);return m&&(h=m.remove(h)),h},t.exports=d},function(t,e,i){"use strict";var n=i(4);i.n(n).a}]).default},"object"==s(e)&&"object"==s(t)?t.exports=a():(r=[],void 0===(o="function"==typeof(n=a)?n.apply(e,r):n)||(t.exports=o))}).call(this,i(157)(t))},279:function(t,e,i){},288:function(t,e,i){"use strict";i.r(e);var n=i(143),r=i(278),o=i.n(r),a=(i(279),i(156)),s=i.n(a),l=i(155),c={components:Object(n.a)({},o.a.name,o.a),data:function(){return this.theme=s.a,{text:l.a}}},d=i(28),u=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("v-md-preview",{attrs:{text:this.text,theme:this.theme,height:"500px"}})}),[],!1,null,null,null);e.default=u.exports}}]);