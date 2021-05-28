var ITree = require("./ITree");

var BStree = function () {
    this.size = 0;
    this.root = null;
    this.Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };

    this.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    };

    this.inOrderTraverse = function (node, callback) {
        if (node) {
            this.inOrderTraverse(node.left, callback);
            callback(node.value);
            this.inOrderTraverse(node.right, callback);
        }
    }
};
BStree.prototype = Object.create(ITree.prototype);
BStree.prototype.constructor = BStree;

BStree.prototype.init = function(array) {
    if (!Array.isArray(array)) {
        return;
    }
    for (var i = 0; i < array.length; i++) {
        this.insert(array[i]);
    }
};

BStree.prototype.getSize = function () {
    return this.size;
};

BStree.prototype.clear = function(value) {
     this.root = null;
};

BStree.prototype.insert = function(value) {
    let newNode = new this.Node(value);
    if (this.root === null) {
        this.root = newNode;
    } else {
        this.insertNode(this.root, newNode); // helper method below
    }
};

BStree.prototype.print = function(type, callback) {
    switch (type) {
        case "pre": break;
        case "post": break;
        case "in": this.inOrderTraverse(this.root, callback); break;
    }
};

BStree.prototype.toArray = function () {
    function toArrayRecurse(node) {
        var array = [];
        if(node.left !== null) {
            array.push(...toArrayRecurse(node.left))
        }
        array.push(node.value)
        if(node.right !== null) {
            array.push(...toArrayRecurse(node.right))
        }
        return array;
    }
    return toArrayRecurse(this.root);
};

BStree.prototype.search = function (value) {
    function searchRecurse(value,node) {
        if(node === null) {
            return null;
        }
        if (value < node.value) {
            return searchRecurse(value,node.left);
        }
        if (value > node.value) {
            return searchRecurse(value,node.right);
        }
        return node;
    }
    return searchRecurse(value, this.root)
};

BStree.prototype.leaves = function () {
    function leavesRecurse (node,result) {
        var tempRes = 0;
        if (node.left === null && node.right === null) {
            return result + 1;
        }
        if (node.left !== null) {
            tempRes += leavesRecurse(node.left,result);
        }
        if (node.right !== null) {
            tempRes += leavesRecurse(node.right,result);
        }
        return tempRes;
    } 
    if (this.root === null) {
        return 0;
    }
    return leavesRecurse(this.root, 0);
};

BStree.prototype.reverse = function () {
    function reverseRecurse(node) {
        var tempNode = node.right;
        node.right = node.left;
        node.left = tempNode;
        if (node.left !== null) {
            reverseRecurse(node.left);
        }
        if (node.right !== null) {
            reverseRecurse(node.right);
        }
    }
    reverseRecurse(this.root);
};

BStree.prototype.minNode = function () {
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
};

BStree.prototype.maxNode = function () {
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current;
};




module.exports = BStree;