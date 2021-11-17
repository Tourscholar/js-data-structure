// 节点类
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 生成节点
  insert(key) {
    const newNode = new Node(key);
    /**
     *
     * @param {父节点} node
     * @param {新节点} newNode
     */
    const insertNode = (node, newNode) => {
      // 如果新节点比父节点要小
      if (newNode.key < node.key) {
        // 如果父节点的左节点为null, 则新节点直接赋值给左节点
        if (node.left === null) {
          node.left = newNode;

          // 否则就将父节点的左节点作为父节点与新节点进行比较
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    if (!this.root) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  // 中序遍历
  // 左侧子节点 => 节点本身 => 右侧子节点
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node != null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    };
    inOrderTraverseNode(this.root, callback);
  }

  // 先序遍历
  // 节点本身 => 左侧子节点 => 右侧子节点
  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node != null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    };
    preOrderTraverseNode(this.root, callback);
  }

  // 后序遍历
  // 左侧子节点 => 节点本身 => 右侧子节点
  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node != null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    };
    postOrderTraverseNode(this.root, callback);
  }

  // 查找最小值
  min(node) {
    const minNode = (node) => {
      return node ? (node.left ? minNode(node.left) : node) : null;
    };
    return minNode(node || this.root);
  }

  // 查找最大值
  max(node) {
    const maxNode = (node) => {
      return node ? (node.right ? maxNode(node.right) : node) : null;
    };
    return maxNode(node || this.root);
  }

  // 查找一个特定的值
  search(key) {
    const searchNode = (node, key) => {
      if (node === null) return false;
      if (node.key === key) return node;
      return searchNode(key < node.key ? node.left : node.right, key);
    };
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
console.log(tree);

// 测试中序遍历
// tree.inOrderTraverse((value) => {
//   console.log(value);
// });

// // 测试先序遍历
// tree.preOrderTraverse((value) => {
//   console.log(value);
// });

// 测试后续遍历
// tree.postOrderTraverse((value) => {
//   console.log(value);
// });
