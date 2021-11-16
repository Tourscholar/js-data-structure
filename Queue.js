class Queue {
  constructor(items) {
    this.items = items || [];
  }

  // 入队
  enqueue(element) {
    this.items.push(element);
  }

  // 出队
  dequeue() {
    return this.items.shift();
  }

  // 获得队首元素
  front() {
    return this.items[0];
  }

  // 清空队列
  clear() {
    this.items = [];
  }

  // 获得队列的长度
  get size() {
    return this.items.length;
  }

  // 判断是否为空队列
  get isEmpty() {
    return !this.items.length;
  }

  // 输出队列元素
  print() {
    console.log(this.items.toString());
  }
}
