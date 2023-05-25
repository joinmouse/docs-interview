---
sidebar_position: 5
---

# 实现LazyMan

问题: 实现一个LazyMan，可以按照一下方式调用

- 1、`LazyMan("Hank")` 输出:

```js
Hi! This is Hank!
```

- 2、`LazyMan("Hank").sleep(10).eat("dinner")` 输出:

```js
// 等待10秒...

Wake up after 10

Eat dinner~
```

- 3、`LazyMan("Hank").sleepFirst(5).eat("supper")` 输出:

```js
// 等待5秒

Wake up after 5

Hi This is Hank!

Eat supper~
```

## 题目分析

- 实现一个打印名字的方法
- 实现sleep、eat、sleepFirst方法
- 实现链式调用，实现的方法应该返回this
- sleepFirst方法可以插队

## 实现

```js
class LazyMan {
    private tasks: (() => void)[] = [];  //队列存储

    // next去取实现，类似koa中间价实现
    private next() {
        const task = this.tasks.shift();
        task?.()
    }
    
    constructor(name: string) {
        console.log(`Hi, I'm ${name}`);
        setTimeout(() => {
            this.next();
        }, 0);
    }

    sleep(time: number) {
        const task = () => {
            console.log(`Wake up after ${time} seconds`);
            setTimeout(() => {
                this.next();
            }, time * 1000);
        };
        this.tasks.push(task);
        return this;
    }

    eat(food: string) {
        const task = () => {
            console.log(`Eat ${food}`);
            this.next()
        }
        this.tasks.push(task)
        return this
    }

    sleepFirst(time: number) {
        const task = () => {
          console.log(`Wake up after ${time} seconds`);
          setTimeout(() => {
            this.next();
          }, time * 1000);
        };
        this.tasks.unshift(task);
        return this;
    }
}

function lazyMan(param: string) {
    return new LazyMan(param)
}
```
