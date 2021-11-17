const { LinkedList } = require("./LinkedList");
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
    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append({ key, value });
  }

  // 获得字典的键
  get(key) {
    const position = HashTable.addHashCode(key);
    if (this.table[position] === undefined) {
      return undefined;
    }
    const getElementValue = (node) => {
      if (!node && !node.element) {
        return undefined;
      }
      if (Object.is(node.element.key, key)) {
        return node.element.value;
      } else {
        return getElementValue(node.next);
      }
    };
    return getElementValue(this.table[position].head);
  }

  // 移除字典中对应的键值, 将被移除的值所在的位置设置为undefined
  remove(key) {
    const position = HashTable.addHashCode(key);
    if (this.table[position] === undefined) {
      return undefined;
    }
    const getElementValue = (node) => {
      if (!node && !node.element) {
        return false;
      }
      if (Object.is(node.element.key, key)) {
        this.table[position].remove(node.element);
        if (this.table[position].isEmpty) {
          this.table[position] = undefined;
        }
        return true;
      } else {
        return getElementValue(node.next);
      }
    };
    return getElementValue(this.table[position].head);
  }
}


// 测试分离连接散列表
const hash = new HashTable();
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow®email.com");
hash.put("Tyrion", "tyrion@email.com");
hash.put("Aaron", "aaronOemail.com");
hash.put("Donnie", "donnie@email.com");
hash.put("Ana", "ana©email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Sue", "sueOemail.com");
hash.put("Mindy", "mindy@email.com");
hash.put("Paul", "paul©email.com");
hash.put("Nathan", "nathan@email.com");

console.log(hash.table);
