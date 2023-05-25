---
sidebar_position: 2
---

# DOM diff 算法

- 就是一个函数，我们称之为patch, patches = patch(oldVNode, newVNode)
- patches就是要运行的DOM操作，可能如下

```js
[
  { type: 'INSERT', vNode: ... },
  { type: 'TEXT', vNode: ... },
  { type: 'PROPS', propsPatch: [...] },
]
```

## DOM Diff的逻辑

1、 **Tree Diff**

- 将新旧两棵树逐层进行对比，找出哪些节点需要更新

- 如果节点是组件就看Component Diff

- 如果节点是标签就看Element Diff

2、**Component Diff**

- 如果节点是组件，先看组件类型

- 类型不相同直接替换(删除旧的)

- 类型相同则只更新属性

- 然后深入组件做Tree Diff(递归)

3、**Element Diff**

- 如果节点是原生标签，则看标签名

- 标签名不同直接替换，相同则只更新属性

- 然后进行标签后代做Tree Diff(递归)