const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor()  {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    if (this.data === null)  {
      return null;
    } else {
      return this;
    }
  }

  add(data) {
    if (this.data === null)  {
      this.data = data;
    } else {
      if (data < this.data)  {
        if (this.left === null)  {
        this.left = new BinarySearchTree();
        this.left.add (data);
        }
      }
      if (data > this.data)  {
        if (this.right === null)  {
          this.right = new BinarySearchTree();
          this.right.add(data);
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.data === null) return null;
    if (data === this.data) return this;

    if (data < this.data) {
      return this.left ? this.left.find(data) : null;
    } else {
      return this.right ? this.right.find(data) : null;
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};