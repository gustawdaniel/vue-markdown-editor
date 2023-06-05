// This file is auto generated by build/build-entry.js
import Component from './codemirror-editor.vue';
import xss from '@/utils/xss/index';
import Lang from '@/lang/';
// font css
import '@/assets/css/font';

const version = '1.7.11';

const install = (Vue) => {
  Vue.component(Component.name, Component);
};

Component.version = version;
Component.install = install;
Component.xss = xss;
Component.lang = Lang;

Component.use = function (optionsOrInstall, opt) {
  if (typeof optionsOrInstall === 'function') {
    optionsOrInstall(Component, opt);
  } else if (typeof optionsOrInstall === 'object' && 'install' in optionsOrInstall && typeof optionsOrInstall.install === 'function') {
    optionsOrInstall.install(Component, opt);
  }

  return Component;
};

export default Component;
