class LazyMan {
    private tasks: (() => void)[] = [];

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

export default function lazyMan(param: string) {
    return new LazyMan(param)
}