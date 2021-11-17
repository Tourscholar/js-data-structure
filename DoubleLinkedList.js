// 链表节点
class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

// 双向链表
class DoublyLinkedList {
  constructor() {
    // 头指针
    this.head = null;
    // 尾指针
    this.tail = null;
    this.length = 0;
  }

  // 插入元素
  insert(position, element) {
    if (position >= 0 && position < this.length) {
      const node = new Node(element);
      let current = this.head;
      let previous = null;
      let index = 0;

      // 如果插入的位置是头节点
      if (position === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          this.head = node;
          current.prev = node;
        }
        // 如果插入的位置是末尾
      } else if (position === this.length - 1) {
        // 保存末尾元素
        current = this.tail;
        // 将插入的新元素赋值给末尾元素的向下指向
        current.next = node;
        // 将末尾元素赋值给新插入元素的向下指向
        node.prev = current;
        // 将新插入元素设为尾节点
        this.tail = node;
        // 如果插入的位置是中间任一位置
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将新插入节点的下一个元素赋值给新插入元素的向下指向
        node.next = current;
        // 将新插入节点赋值给新插入节点的上一个节点的向下指向
        previous.next = node;
        // 将新插入节点赋值给新插入节点的下一个节点的向上指向
        current.prev = node;
        // 将新插入节点的上一个节点赋值给新插入节点的向上指向
        node.prev = previous;
      }
      this.length++;
      return true;
    }
    return false;
  }

  // 移除元素
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      let previous = null;
      let index = 0;

      // 如果移除的元素是头节点
      if (position === 0) {
        // 将头节点的下一个节点赋值给头节点
        this.head = this.head.next;
        // 将null赋值给头节点的向上指向
        this.head.prev = null;
        // 如果只有一个元素
        if (this.length === 1) {
          this.tail = null;
        }

        // 如果移除的是尾节点
      } else if (position === this.length - 1) {
        // 将尾指针的上一个指向赋值给现在的尾指针
        this.tail = this.tail.prev;
        this.tail.next = null;

        // 如果移除的位置是中间任一位置
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将待删除节点的下一个节点的指向赋值给待删除节点上一个节点的向下指向
        previous.next = current.next;
        // 将待删除节点的上一个节点赋值给待删除节点的下一个节点的向上指向
        current.next.prev = previous;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }
}
