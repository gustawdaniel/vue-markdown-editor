(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{297:function(t,e,n){"use strict";var r=n(1),o=n(4),i=n(92),u=n(13),c=n(161),s=n(164),a=n(163),f=n(5),l=n(2),d=n(95),v=n(42),h=n(300);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),m=p?"set":"add",g=o[t],k=g&&g.prototype,y=g,b={},z=function(t){var e=k[t];u(k,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof g||!(x||k.forEach&&!l((function(){(new g).entries().next()})))))y=n.getConstructor(e,t,p,m),c.REQUIRED=!0;else if(i(t,!0)){var O=new y,_=O[m](x?{}:-0,1)!=O,w=l((function(){O.has(1)})),j=d((function(t){new g(t)})),C=!x&&l((function(){for(var t=new g,e=5;e--;)t[m](e,e);return!t.has(-0)}));j||((y=e((function(e,n){a(e,y,t);var r=h(new g,e,y);return null!=n&&s(n,r[m],r,p),r}))).prototype=k,k.constructor=y),(w||C)&&(z("delete"),z("has"),p&&z("get")),(C||_)&&z(m),x&&k.clear&&delete k.clear}return b[t]=y,r({global:!0,forced:y!=g},b),v(y,t),x||n.setStrong(y,t,p),y}},298:function(t,e,n){"use strict";var r=n(10).f,o=n(44),i=n(162),u=n(45),c=n(163),s=n(164),a=n(94),f=n(166),l=n(9),d=n(161).fastKey,v=n(29),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,a){var f=t((function(t,r){c(t,f,e),h(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&s(r,t[a],t,n)})),v=p(e),x=function(t,e,n){var r,o,i=v(t),u=m(t,e);return u?u.value=n:(i.last=u={index:o=d(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=u),r&&(r.next=u),l?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},m=function(t,e){var n,r=v(t),o=d(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(f.prototype,{clear:function(){for(var t=v(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var e=v(this),n=m(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),l?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=v(this),r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),i(f.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),l&&r(f.prototype,"size",{get:function(){return v(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",o=p(e),i=p(r);a(t,e,(function(t,e){h(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},299:function(t,e,n){"use strict";var r=n(162),o=n(161).getWeakData,i=n(6),u=n(5),c=n(163),s=n(164),a=n(30),f=n(7),l=n(29),d=l.set,v=l.getterFor,h=a.find,p=a.findIndex,x=0,m=function(t){return t.frozen||(t.frozen=new g)},g=function(){this.entries=[]},k=function(t,e){return h(t.entries,(function(t){return t[0]===e}))};g.prototype={get:function(t){var e=k(this,t);if(e)return e[1]},has:function(t){return!!k(this,t)},set:function(t,e){var n=k(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=p(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,a){var l=t((function(t,r){c(t,l,e),d(t,{type:e,id:x++,frozen:void 0}),null!=r&&s(r,t[a],t,n)})),h=v(e),p=function(t,e,n){var r=h(t),u=o(i(e),!0);return!0===u?m(r).set(e,n):u[r.id]=n,t};return r(l.prototype,{delete:function(t){var e=h(this);if(!u(t))return!1;var n=o(t);return!0===n?m(e).delete(t):n&&f(n,e.id)&&delete n[e.id]},has:function(t){var e=h(this);if(!u(t))return!1;var n=o(t);return!0===n?m(e).has(t):n&&f(n,e.id)}}),r(l.prototype,n?{get:function(t){var e=h(this);if(u(t)){var n=o(t);return!0===n?m(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return p(this,t,e)}}:{add:function(t){return p(this,t,!0)}}),l}}},303:function(t,e,n){"use strict";var r=n(297),o=n(298);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},306:function(t,e,n){var r=n(1),o=n(2),i=n(168).f;r({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},307:function(t,e,n){var r=n(1),o=n(2),i=n(5),u=Object.isFrozen;r({target:"Object",stat:!0,forced:o((function(){u(1)}))},{isFrozen:function(t){return!i(t)||!!u&&u(t)}})},309:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},310:function(t,e,n){n(93)("asyncIterator")},311:function(t,e,n){"use strict";var r=n(297),o=n(298);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},312:function(t,e,n){"use strict";var r,o=n(4),i=n(162),u=n(161),c=n(297),s=n(299),a=n(5),f=n(29).enforce,l=n(167),d=!o.ActiveXObject&&"ActiveXObject"in o,v=Object.isExtensible,h=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},p=t.exports=c("WeakMap",h,s);if(l&&d){r=s.getConstructor(h,"WeakMap",!0),u.REQUIRED=!0;var x=p.prototype,m=x.delete,g=x.has,k=x.get,y=x.set;i(x,{delete:function(t){if(a(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),m.call(this,t)||e.frozen.delete(t)}return m.call(this,t)},has:function(t){if(a(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),g.call(this,t)||e.frozen.has(t)}return g.call(this,t)},get:function(t){if(a(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),g.call(this,t)?k.call(this,t):e.frozen.get(t)}return k.call(this,t)},set:function(t,e){if(a(t)&&!v(t)){var n=f(this);n.frozen||(n.frozen=new r),g.call(this,t)?y.call(this,t,e):n.frozen.set(t,e)}else y.call(this,t,e);return this}})}},349:function(t,e,n){"use strict";n(98),n(165),n(169),n(65),n(96),n(8),n(43),n(97),n(66),n(308),n(99),n(31),e.__esModule=!0,e.arraytoObject=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&o(e,t[n]);return e},e.importAll=function(t,e){e.keys().forEach((function(n){t[n]=e(n)}))},e.generatorText=function(t){var e,n,r=t.selected,o=t.InsertGetter,i=t.selectedGetter,u=void 0===i?function(t){return t}:i,c=t.ignoreEmptyLine,s=void 0===c||c;r?(n=u(r),e=o(r,1),-1!==r.indexOf("\n")&&(e=r.split("\n").map((function(t,e){return s&&!t?"":o(t,e+1).replace(u(null),"")})).join("\n"),n=e)):(e=o(null,1),n=u(r));return{insertContent:e,newSelected:n}},e.isObject=void 0;var r=Object.prototype.toString;function o(t,e){return Object.keys(e).forEach((function(n){t[n]=e[n]})),t}e.isObject=function(t){return"[object Object]"===r.call(t)}},411:function(t,e,n){"use strict";var r=n(309);e.__esModule=!0,e.default=function(t){var e=void 0===t?{}:t,n=e.name,r=void 0===n?"todo-list":n,c=e.icon,s=void 0===c?"v-md-icon-checkbox":c,a=e.text,f=e.color,l=void 0===f?"#3eaf7c":f,d=(0,o.default)({commandName:r,title:function(t){return t.langConfig.task.toolbar+"（Ctrl+Shift+U）"},text:a,icon:s}),v=function(t){return"border-color: "+("todo"===t?"#d9d9d9":l)},h="background-color: "+l,p=function(t){t&&t.use(u.default,{renderCheckbox:function(t){return'<span class="v-md-editor__todo-list-checkbox'+("todo"===t?"":" v-md-editor__todo-list-checkbox--checked")+'" style="'+("todo"===t?""+v(t):v(t)+";"+h)+'"></span>'}})};return{install:function(t){"v-md-editor"===t.name&&(t.command(r,i.default),t.toolbar(r,d),t.hotkey({modifier:"ctrlShift",key:"u",action:function(t){t.execCommand(r)}}),t.lang.add({"zh-CN":{task:{toolbar:"任务列表",placeholder:"任务列表"}},"en-US":{task:{toolbar:"Task",placeholder:"Task"}}})),t.extendMarkdown(p)}}};var o=r(n(412)),i=r(n(413)),u=r(n(414));n(415)},412:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=t.commandName,n=t.text,r=t.title,o=t.icon;return{title:r,icon:o,text:n,action:function(t){t.execCommand(e,{type:"todo"})}}}},413:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n=(void 0===e?{}:e).type,o=void 0===n?"todo":n;t.insert((function(e){var n=t.langConfig.task.placeholder,i="todo"===o?" ":"x",u=function(t){return t||n},c=(0,r.generatorText)({selected:e,InsertGetter:function(t){return"- ["+i+"] "+u(t)},selectedGetter:u});return{text:c.insertContent,selected:c.newSelected}}))};var r=n(349)},414:function(t,e,n){"use strict";n(165),n(46),t.exports=function(t,e){void 0===e&&(e={});var n=e,r=n.listClass,o=void 0===r?"v-md-editor__todo-list":r,i=n.listItemClass,u=void 0===i?"v-md-editor__todo-list-item":i,c=n.renderCheckbox,s=void 0===c?function(t){return'<input class="v-md-editor__todo-list-checkbox" type="checkbox" '+("todo"===t?"":"checked")+">"}:c;function a(t,e,n){var r=t.attrIndex(e),o=[e,n];r<0?t.attrPush(o):t.attrs[r]=o}function f(t,e){for(var n=t[e].level-1,r=e-1;r>=0;r--)if(t[r].level===n)return r;return-1}function l(t,e){return"inline"===t[e].type&&function(t){return"paragraph_open"===t.type}(t[e-1])&&function(t){return"list_item_open"===t.type}(t[e-2])&&function(t){return 0===t.content.indexOf("[ ] ")||0===t.content.indexOf("[x] ")||0===t.content.indexOf("[X] ")}(t[e])}function d(t,e){t.children.unshift(function(t,e){var n=new e("html_inline","",0);0===t.content.indexOf("[ ] ")?n.content=s("todo"):0!==t.content.indexOf("[x] ")&&0!==t.content.indexOf("[X] ")||(n.content=s("completed"));return n}(t,e)),t.children[1].content=t.children[1].content.slice(3),t.content=t.content.slice(3)}t.core.ruler.after("inline","v-md-task-lists",(function(t){for(var e=t.tokens,n=2;n<e.length;n++)l(e,n)&&(d(e[n],t.Token),a(e[n-2],"class",u),a(e[f(e,n-2)],"class",o))}))}},415:function(t,e,n){},434:function(t,e,n){"use strict";n.r(e);var r=n(301),o=n(302),i=n.n(o),u=(n(304),n(305)),c=n.n(u),s=n(411),a=n.n(s);i.a.use(a()());var f={components:Object(r.a)({},i.a.name,i.a),data:function(){return this.theme=c.a,{text:"- [x] Task"}}},l=n(41),d=Object(l.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-md-editor",{attrs:{"left-toolbar":"undo redo | todo-list",theme:t.theme,height:"500px"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})}),[],!1,null,null,null);e.default=d.exports}}]);