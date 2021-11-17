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
    let position = HashTable.addHashCode(key);
    if (this.table[position] === undefined) {
      this.table[position] = { key, value };
    } else {
      let index = ++position;
      while (this.table[index] === !undefined) {
        index++;
      }
      this.table[index] = { key, value };
    }
    // this.table[position].append({ key, value });
  }

  // 获得字典的键
  get(key) {
    const position = HashTable.addHashCode(key);
    const getElementValue = (index) => {
      if (this.table[index] === undefined) {
        return undefined;
      }
      /** 
       * @param {
       * Object.is()方法用来比较两个值是否严格相等
       * Object.is(+0, -0) // false
       * Object.is(NaN, NaN) // true
       * }
      */
      if (Object.is(this.table[index].key, key)) {
        return this.table[index].value;
      } else {
        return getElementValue(index + 1);
      }
    };
    return getElementValue(position);
  }

  // 移除字典中对应的键值, 将被移除的值所在的位置设置为undefined
  remove(key) {
    const position = HashTable.addHashCode(key);
    const removeElement = (index) => {
      if (this.table[position] === undefined) {
        return false;
      }
      if (Object.is(this.table[index].key, key)) {
        this.table[index] = undefined;
        return true;
      } else {
        return removeElement(index + 1);
      }
    };
  }
}

// 测试线性探查散列表
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
