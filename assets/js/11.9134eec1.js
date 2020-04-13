(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{155:function(n,e,t){"use strict";e.a='<h1 align="center">Markdown Editor built on Vue</h1>\n\n<p align="center">\n  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n</p>\n\n## Install\n\n```bash\n# use npm\nnpm i @kangc/v-md-editor -S\n\n# use yarn\nyarn add @kangc/v-md-editor\n```\n\n## Quick Start\n\n```js\nimport Vue from \'vue\';\nimport VueMarkdownEditor from \'@kangc/v-md-editor\';\nimport \'@kangc/v-md-editor/lib/style/editor.css\';\nimport vuepressTheme from \'@kangc/v-md-editor/lib/theme/vuepress.js\';\n\nVueMarkdownEditor.use(vuepressTheme);\n\nVue.use(VueMarkdownEditor);\n```\n\n## Useage\n\n```html\n<template>\n  <v-md-editor v-model="text" height="400px"></v-md-editor>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: \'\',\n      };\n    },\n  };\n<\/script>\n```\n\n## Links\n\n- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)\n- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)\n'},283:function(n,e,t){"use strict";t.r(e);var i=t(143),r=t(153),a=t.n(r),o=(t(154),t(156)),s=t.n(o),m=t(155),d={components:Object(i.a)({},a.a.name,a.a),data:function(){return this.theme=s.a,{text:m.a}}},c=t(28),p=Object(c.a)(d,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("v-md-editor",{attrs:{theme:n.theme,height:"500px"},model:{value:n.text,callback:function(e){n.text=e},expression:"text"}})}),[],!1,null,null,null);e.default=p.exports}}]);