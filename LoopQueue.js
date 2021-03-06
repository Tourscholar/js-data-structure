const { Queue } = require("./Queue");
class LoopQueue extends Queue {
  constructor(items) {
    super(items);
  }

  // 获得对应元素的下标
  getIndex(index) {
    const length = this.items.length;
    return index > length ? index % length : index;
  }

  // 通过下标查找对应元素
  find(index) {
    return !this.isEmpty ? this.items[this.getIndex(index)] : null;
  }
}

const loopQueue = new LoopQueue(["Surmon"]);
// loopQueue.enqueue("SkyRover");
// loopQueue.enqueue("Even");
// loopQueue.enqueue("Alice");
// console.log(loopQueue.size, loopQueue.isEmpty); // 4 false

// console.log(loopQueue.find(26)); // 'Evan'
// console.log(loopQueue.find(87651)); // 'Alice'
