class Set {
  constructor() {
    this.items = {};
  }

  // 判断是否存在某元素
  has(value) {
    return this.items.hasOwnProperty(value);
  }

  // 添加元素
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  // 移除元素
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  // 获得集合大小
  get size() {
    // Object.keys()方法返回一个由一个给定对象的自身可枚举属性组成的数组
    return Object.keys(this.items).length;
  }

  // 获取集合所有元素的值
  get values() {
    return Object.keys(this.items);
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set();
    // 将当前集合的所有元素添加到unionSet集合中
    this.values.forEach((v, i) => unionSet.add(this.values[i]));
    // 将传入的otherSet集合中的所有元素添加到unionSet集合中
    otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]));
    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    this.values.forEach((v, i) => {
      // 将A, B中都有的元素添加到intersectionSet集合中
      if (otherSet.has(v)) {
        intersectionSet.add(v);
      }
    });
    return intersectionSet;
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set();
    this.values.forEach((v, i) => {
      // 将A中有, B中没有的元素添加到intersectionSet集合中
      if (!otherSet.has(v)) {
        differenceSet.add(v);
      }
    });
    return differenceSet;
  }

  // 子集
  subset(otherSet) {
    if (this.size > otherSet.size) {
      return false;
    } else {
      return this.values.some((v) => otherSet.has(v));
    }
  }
}
