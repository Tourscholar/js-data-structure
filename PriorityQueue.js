class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // 入队
  enqueue(element, priority) {
    // 待加入的元素
    const queueElement = { element, priority };
    if (this.isEmpty) {
      this.items.push(queueElement);
    } else {
      // 比较当前元素和原有元素所持有的优先级属性
      const preIndex = this.items.findIndex(
        (item) => queueElement.priority < item.priority
      );
      if (preIndex > -1) {
        this.items.splice(preIndex, 0, queueElement);
      } else {
        this.items.push(queueElement);
      }
    }
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
    console.log(this.items);
  }
}
