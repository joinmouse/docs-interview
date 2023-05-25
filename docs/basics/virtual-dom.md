---
sidebar_position: 3
---

# 虚拟DOM

## 它是什么？

- 虚拟DOM实则是一个**JS对象**, 一个能代表DOM树的对象，通常含有标签名、标签上的属性、事件监听和子元素们，以及其他属性

```jsx title="React"
const vNode = {
  key: null,
  props: {
    // 子元素们
    children: [
      { type: "span", ...},
      { type: 'span', ...}
    ],
    className: "red",  // 标签上的属性 
    onClick: () => {}  // 事件
  },
  ref: null,
  type: "dev"  // 标签名or组件名字
  ...
}
```

```jsx title="Vue"
const vNode = {
  tag: "dev"  // 标签名or组件名字
  props: {
    class: "red",  // 标签上的属性 
    on: {
      click: () => {}  // 事件
    }
  },
  // 子元素们
  children: [
    { tag: "span", ...},
    { tag: 'span', ...}
  ]
  ...
}
```

- 如何**创建虚拟DOM**

```jsx  title="React.createElement"
createElement('div', {className: 'red', onClick: () => {}}, [
  createElement('span', {}, 'span_text_1'),
  createElement('span', {}, 'span_text_2')
])
```

```jsx  title="Vue(只能在render函数中得到h)"
h('div', {class: 'red', on: {click: () => {}}}, [
  h('span', {}, 'span_text_1'),
  h('span', {}, 'span_text_2')
])
```

- 使用**JSX/模版语法来实现上面的虚拟DOM**

```jsx  title="React(通过babel转为createElement形式)"
<div className="red" onClick={() => {}}>
  <span>span_text_1</span>
  <span>span_text_2</span>
</div>
```

```vue title="vue-template(通过vue-loader转为h函数形式)"
<div className="red" @click={() => {}}>
  <span>span_text_1</span>
  <span>span_text_2</span>
</div>
```

## 它有什么优点？

**1、减少DOM操作**

- 虚拟DOM可以将多次操作合并成一次操作，比如添加1000个节点，DOM需要一个接一个的操作

- 虚拟DOM借助diff算法可以把多余的操作省掉，比如添加1000个节点，其实只有10个是新增的

**2、跨平台**

- 虚拟DOM不仅可以变成DOM,还可以变成小程序、原生应用，因为虚拟DOM本质是一个JS对象

## 它有什么缺点？

需要创建额外的函数，如CreateElement/h函数，但可以通过jsx/vue-template来简化语法
