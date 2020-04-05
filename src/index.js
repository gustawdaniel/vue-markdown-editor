// This file is auto generated by build/build-entry.js
import MarkdownEditor from './markdown-editor.vue';
import markdownItInstance from '@/utils/markdown-it';
import '@/assets/css/font';

const version = '0.0.0';

const install = (Vue) => {
  Vue.component(MarkdownEditor.name, MarkdownEditor);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

MarkdownEditor.version = version;
MarkdownEditor.install = install;
MarkdownEditor.markdownIt = markdownItInstance;

export default MarkdownEditor;
