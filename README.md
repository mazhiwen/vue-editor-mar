# vue 编辑器

目前是代码类编辑器，在线代码编辑器

支持高亮，语法提示等

***

## 安装使用

### 1.引入

```sh
yarn add vue-editor-mar
```

```html
<!-- 编辑器引用 -->
<VueEditorMar
  ref="VueEditorMar"
  :content="content"
  :config="config"
/>
```

```js
import VueEditorMar from 'vue-editor-mar';
import 'vue-editor-mar/lib/theme-chalk/index.css';

Vue.use(VueEditorMar);

// vue
data() {
  return {
    // 编辑器文本
    content: 'Hello w2222orld!',
    // 配置对象
    config: {
      wordType: {
        keyword: ['keyworda', 'keywordb'],
        condition: ['if', 'else'],
        operator: ['>', '='],
        split: [';'],
        function: ['add'],
      },
    },
  };
},

//ref方法调用
this.$refs['VueEditorMar'].getContent();
```

### 2.默认config配置

```js
{
  wordType:{
    keyword: [
      'function', 'SELECT', 'DISTINCT',
      'FROM', 'AS', 'ON', 'INNER', 'JOIN', 'LEFT',
      'WHERE', 'IS', 'NOT', 'NULL', 'ORDER', 'BY',
      'PARTITION', 'over', 'DESC', 'type', 'this', 'const',
    ],
    condition: [
      'if', 'else', 'while',
    ],
    operator: [
      '+', '-', '*', '/', '>', '<', '=', '(', ')', '{', '}', '[', ']',
    ],
    split: [
      '.', ';', ',',
    ],
    function : []
  },
}
```

### 3.method

getContent: 获取编辑器内文本内容

### 4.说明

> 当需要在外部高级自定义源码级别操作编辑器，调用编辑器api时，可以将内置的 dataController 外置即可。

```html
<!-- 编辑器引用 -->
<VueEditorMar
  :data-controller="ruleDataController"
/>
```

```js
this.ruleDataController = new this.$EditorDataController.DataController({
})
```

## 本地测试

1. 执行 test.sh
2. 修改src/index.js为

```js
// import 'styles';
// import VueEditorMar from './packages';
import VueEditorMar from 'vue-editor-mar';
import 'vue-editor-mar/lib/theme-chalk/index.css';
```

## 本地调试

1. src/index.js修改VueEditorMar引用为./packages

```js
import 'styles';
import VueEditorMar from './packages';
// import VueEditorMar from 'vue-editor-mar';
// import 'vue-editor-mar/lib/theme-chalk/index.css';

```

2. yarn start

## 编译发布

1. yarn dist 编译生成lib目录
1. 修改package.json版本  
1. npm login  marjoven  *****  
1. npm publish

## 问题记录

需要增加编译css功能
以及单独的编辑器组件npm发布
内置编辑器datacontro

## 参考elementui的内容

### 1.elementui的build流程

```js
{
  "build:file": `
                node build/bin/iconInit.js &
                node build/bin/build-entry.js &
                node build/bin/i18n.js &
                node build/bin/version.js
                `,
  // 生成全部js 和 css文件
  "dist": `
          npm run clean &&
          npm run build:file &&
          npm run lint &&
          webpack --config build/webpack.conf.js &&
          webpack --config build/webpack.common.js &&
          webpack --config build/webpack.component.js &&
          npm run build:utils &&
          npm run build:umd &&
          npm run build:theme
          `,
  // css生成
  "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile src/packages/theme-chalk/gulpfile.js && cp-cli src/packages/theme-chalk/lib lib/theme-chalk",

}

```

- build/bin/build-entry

通过模版生成src/index.js
