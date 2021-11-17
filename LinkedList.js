// 链表节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 链表
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 追加元素
  append(element) {
    const node = new Node(element);
    let current = null;
    // 如果是空链表
    if (this.head === null) {
      this.head = node;
    } else {
      // 遍历到链表最后一个元素
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // 插入元素
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head;
      let previous = null;
      let index = 0;
      // 如果插入的位置是头节点
      if (position === 0) {
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将待插入位置的下个元素赋值给插入节点的向下指向
        node.next = current;
        // 将待插入节点赋值给待插入位置的上一个节点的向下指向
        previous.next = node;
      }
      this.length++;
      return true;
    }
  }

  // 删除元素
  removeAt(position) {
    // 检查越界值
    if (position >= 0 && position < this.length) {
      let current = this.head;
      let previous = null;
      let index = 0;
      // 如果要删除的是头节点
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将待删除节点的向下指向赋值给待删除节点上一个节点的向下指向
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }

  // 寻找元素下标
  findIndex(element) {
    let current = this.head;
    let index = -1;
    while (current) {
      if (element === current.element) {
        return index + 1;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  // 删除指定元素
  remove(element) {
    const index = this.indexOf(element);
    return this.remove(index);
  }

  get isEmpty() {
    return !this.length;
  }

  get size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `${current.element} `;
      current = current.next;
    }
    return string;
  }
}


const linkedList = new LinkedList()

console.log(linkedList)
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)

linkedList.insert(3, 18)
console.log(linkedList.toString())
console.log(linkedList.findIndex(24))
module.exports = { LinkedList };
