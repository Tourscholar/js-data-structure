class Stack {
  constructor() {
    this.items = [];
  }

  // 入栈
  push(element) {
    this.items.push(element);
  }

  // 出栈
  pop() {
    return this.items.pop();
  }

  // 获得栈底元素
  get peek() {
    return this.items[this.items.length - 1];
  }

  // 判断是否为空栈
  get isEmpty() {
    return !this.items.length;
  }

  // 获得栈的长度
  get size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }

  // 输出栈元素
  print() {
    console.log(this.items.toString());
  }
}
