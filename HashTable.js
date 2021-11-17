class HashTable {
  constructor() {
    this.table = [];
  }

  // 散列函数
  static addHashCode(key) {
    let hash = 0;
    for (let codePoint of key) {
      hash += codePoint.charCodeAt();
    }
    return hash % 37;
  }

  // 修改和增加元素
  put(key, value) {
    const position = HashTable.addHashCode(key);
    console.log(`${position} - ${key}`);
    this.table[position] = value;
  }

  // 获得字典的键
  get(key) {
    return this.table[HashTable.addHashCode(key)];
  }

  // 移除字典中对应的键值, 将被移除的值所在的位置设置为undefined
  remove(key) {
    this.table[HashTable.addHashCode(key)] = undefined;
  }
}

// 测试散列表
const hash = new HashTable()
hash.put('Jane', 'Jane@email.com') 
hash.put('Alex', 'Alex@email.com') 

// 测试get方法
console.log(hash.get('Jane'))
console.log(hash.get('Alex')) 
console.log(hash)

