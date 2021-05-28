var BStree = require("./bts");

describe("BStree insert", function () {
    var test = new BStree(); 
    it("should call this.Node ", function () {
        var mockNode = jest.fn().mockImplementation((value) => {
          this.value = value;
          this.left = null;
          this.right = null;
        });
        var value = 25;
        test.Node = mockNode;
        test.insert(value);
        expect(mockNode).toHaveBeenCalledWith(value);
    });
    it("should this.root = newNode ", function () {
        var test = new BStree();
        var testValue = 25;
        test.insert(testValue);
        expect(test.root).toEqual({
          value: testValue,
          left: null,
          right: null,
        });
        expect(test.root.value).toBe(testValue);
        expect(test.root.left).toBe(null);
        expect(test.root.right).toBe(null);
    });
    it("should this.inserNode to haveBeenCalledWith our root and newNode and standartMode", function () {
        var test = new BStree();
        var testValue = 25;
        var testValue1 = 26;
        var mockInsertNode = jest.fn();
        test.insertNode = mockInsertNode;
        test.insert(testValue);
        test.insert(testValue1);
        expect(mockInsertNode).toHaveBeenCalledWith(
          test.root,
          {
            value: testValue1,
            left: null,
            right: null,
          }
        );
    });  
}); 

describe("BStree init", function () {
    it("should call insert method times like count of elements in argument array", function () {
        var test = new BStree();
        var argArray = [1, 2, 3, 4];
        var mock = jest.fn();
        test.insert = mock;
        test.init(argArray);
        expect(mock).toBeCalledTimes(argArray.length);
        expect(mock).toBeCalledWith(argArray[0]);
        expect(mock).toBeCalledWith(argArray[1]);
        expect(mock).toBeCalledWith(argArray[2]);
        expect(mock).toBeCalledWith(argArray[3]);
    });
});

describe("BStree clear", function () {
    var test = new BStree();
    it("should after call clear this root === null ", function () {
      test.insert(25);
        var oldRoot = test.root;
        test.clear();
        expect(test.root).not.toEqual(oldRoot);
        expect(test.root).toBe(null);
    });
});

describe("BStree toArray", function () {
    it("should set array.length a 0 ", function () {
        var test = new BStree();
        test.init([25, -25, 35]);
        test.array = [1, 2, 3];
        test.toArray();
        expect(test.array.length).toBe(3);
    });
    it("should return array with values of binary tree", function () {
        var test = new BStree();
        var testArray = [-3, 6, 25, 45];
        test.init([25, 45, 6, -3]);
        expect(test.toArray()).toEqual(testArray);
    });
});

describe("BStree search", function () {
   it("should return node if searchValue === argument value ", function () {
        var test = new BStree();
        var value = 4;
        test.init([1, 2, 3, 24, 345, 5, -100, 3, 4]);
        expect(test.search(value)).toEqual({
          value: 4,
          left: null,
          right: null,
        });
    });
    it("should return node if searchValue === argument value ", function () {
        var test = new BStree();
        var value = 0;
        test.init([]);
        expect(test.search(value)).toEqual(null);
    });
});

describe("BStree leaves", function () {
    it('should be return 2', function() {
        var test = new BStree();
        test.insert(8);
        test.insert(4);
        test.insert(7);
        test.insert(10);    
        expect(test.leaves()).toBe(2);
    })
});
describe("BStree size", function () {
    it("should return 0 if we not insert or initialize something in Tree", function () {
        var test = new BStree();
        expect(test.getSize()).toBe(0);
    });
});

describe("BStree reverse", function () {
  it("should reverse tree", function () {
      var test = new BStree();
      var expectRoot = {
        value: 40,
        left: { left: null, right: null, value: 45 },
        right: {
          left: null,
          right: { left: null, right: null, value: 10 },
          value: 15,
        },
      };
      test.init([40, 15, 45, 10]);
      test.reverse();
    });
});
describe("BStree minNode", function () {
  it('should be return minNode', function() {
      var test = new BStree();
      test.insert(8);
      test.insert(4);
      test.insert(7);
      test.insert(10);
      var expected = {
      value: 4,
      left: null,
      right: {
          value: 7,
          left: null,
          right: null
      }
      }
      expect(test.minNode()).toEqual(expected);
  })
});
describe("BStree maxNode", function () {
  it('should be return maxNode', function() {
      var test = new BStree();
      test.insert(8);
      test.insert(4);
      test.insert(7);
      test.insert(10);
      var expected = {
          value: 10,
          left: null,
          right: null
      }
      expect(test.maxNode()).toEqual(expected);
  })
});