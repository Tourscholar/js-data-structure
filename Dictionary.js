class Dictionary {
  constructor() {
    this.items = {};
  }

  // 添加字典元素
  set(key, value) {
    this.items[key] = value;
  }

  // 获得字典元素
  get(key) {
    return this.items[key];
  }

  // 删除字典元素
  remove(key) {
    delete this.items[key];
  }

  // 获得字典的键
  get keys() {
    return Object.keys(this.items);
  }

  // 获得字典的值
  get values() {
    /**
     * reduc()对数组中的每一个元素执行一个回调函数
     * @param {
     * acc: 累加器
     * cur: 当前值
     * idx: 当前索引
     * }
     */
    return Object.keys(this.items).reduce((acc, cur, idx) => {
      acc.push(this.items[cur])
      return acc
    }, []);
  }
}

// 测试字典
const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log(dictionary)
console.log(dictionary.keys)
console.log(dictionary.values)
console.log(dictionary.items)
