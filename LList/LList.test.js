var LList = require("./LList");

describe('LList check init', function() {
  it('LList should be defined', function() {
      expect('LList').toBeDefined();
  })
  it('LList should be function', function() {
      expect(typeof LList).toBe('function');
  })
  it('llist should be object', function() {
      var llist = new LList(7);
      expect(typeof llist).toBe('object');
      llist.clear();
  })
  it('should clear an array', function () {
      var llist = new LList();
      llist.add(1);
      llist.clear();
      expect(llist.getSize()).toBe(0);
  })
});
describe('LList getSize', function() {
  it('should return size of an array', function () {
      var llist = new LList();
      llist.add(1);
      expect(llist.getSize()).toBe(1);
      llist.clear();
  })
});
describe("LList add", function () {
  test("add first", function () {
      var llist = new LList();
      llist.add(10);
      llist.add(20);
      llist.add(-30);
      var expected = [10, 20, -30];
      expect(llist.toArray()).toEqual(expected);
      expect(llist.getSize()).toBe(expected.length);
  });
});
describe("LList set", function () {
  it("should throw error if invalid index", function () {
    try {
      var lList = new LList(2);
      lList.add(1);
      lList.add(2);
      lList.set(3, 3);
    } catch (e) {
      expect(e.message).toBe("Index out bounds exception");
    }
  })
  it("should set value in right index", function () {
    var lList = new LList();
    var test = [1, 10, 3];
    lList.add(1);
    lList.add(2);
    lList.add(3);
    lList.set(10, 1);
    expect(lList.toArray()).toEqual(test);
  });
});
describe("LList get", function () {
  it("should index in collection slots interval", function () {
    var lList = new LList(3);
    var value = 10;
    lList.add(value);
    expect(lList.get(0)).toBe(value);
  });
  it("should index out of range collection slots interval", function () {
    try {
      var lList = new LList(3);
      var value = 10;
      lList.add(value);
      lList.get(1);
    } catch (e) {
      expect(e.message).toBe(
        "Index out bounds exception"
      );
    }
  });
  it("should throw error if invalid index", function () {
    try {
      var lList = new LList(2);
      lList.add(1);
      lList.add(2);
      lList.get(3, 3);
    } catch (e) {
      expect(e.message).toBe("Index out bounds exception");
    }
  })
})
describe("LList remove", function () {
  it("should remove item by value, and not drop links", function () {
    var lList = new LList();
    lList.add(1);
    lList.add(2);
    lList.add(3);
    lList.add(4);
    lList.add(5);
    var testArray = [ 1, 5 ];
    lList.remove(2);
    lList.remove(3);
    lList.remove(4);
    expect(lList.toArray()).toEqual(testArray);
    console.log(lList.toArray())
    expect(lList.getSize()).toBe(2);
  });
  it("should remove item by value, and not drop links and delete first item", function () {
    var lList = new LList();
    lList.add(1);
    lList.remove(1);
    expect(lList.getSize()).toBe(0);
  });
  it('should remove element from an array', function() {
    var llist = new LList();
    llist.add(1);
    llist.add(2);
    llist.add(3);
    var expectedValue = 1;
    var expectedArray = [2, 3];
    expect(llist.remove(1)).toBe(expectedValue);
    expect(llist.toArray()).toEqual(expectedArray);
    expect(llist.remove(4)).toBe(undefined);
  })
});
describe("LList toArray", function () {
  it('should become an array', function() {
      var llist = new LList();
      llist.add(1);
      llist.add(2);
      llist.add(3);
      llist.toArray();
      var expectedArray = [1, 2, 3];
      expect(llist.toArray()).toEqual(expectedArray);
  })
});
describe("LList toString", function () {
  it('should become an string', function() {
    var llist = new LList();
    llist.add(1);
    llist.add(2);
    llist.add(3);
    llist.toString();
    var expectedString = "1, 2, 3";
    expect(llist.toString()).toEqual(expectedString);
  })
});
describe("LList contains", function () {
  it('should contain element true', function() {
      var llist = new LList();
      llist.add(1);
      llist.add(2);
      llist.add(3);
      expect(llist.contains(2)).toBe(true);
  })
  it('should contain element false', function() {
      var llist = new LList();
      llist.add(1);
      llist.add(2);
      llist.add(3);
      expect(llist.contains(4)).toBe(false);
  })
});
describe("LList minValue", function () {
  it('should return min value', function() {
      var llist = new LList();
      llist.add(2);
      llist.add(1);
      llist.add(3);
      var expectedValue = 1;
      expect(llist.minValue()).toBe(expectedValue);
  })
  it('should return min value', function() {
    var llist = new LList();
    llist.add(2);
    llist.add(1);
    llist.add(3);
    var expectedValue = 2;
    var expectedValue2 = 3; 
    expect(llist.minValue()).not.toBe(expectedValue);
    expect(llist.minValue()).not.toBe(expectedValue2);
  })
});
describe("LList maxValue", function () {
  it('should return max value', function() {
      var llist = new LList();
      llist.add(2);
      llist.add(1);
      llist.add(3);
      var expectedValue = 3;
      expect(llist.maxValue()).toBe(expectedValue);
  })
  it('should return max value', function() {
    var llist = new LList();
    llist.add(2);
    llist.add(1);
    llist.add(3);
    var expectedValue = 1;
    var expectedValue2 = 2; 
    expect(llist.maxValue()).not.toBe(expectedValue);
    expect(llist.maxValue()).not.toBe(expectedValue2);
  })
});
describe("LList minIndex", function () {
  it('should return min index', function() {
      var llist = new LList();
      llist.add(2);
      llist.add(1);
      llist.add(3);
      var expectedValue = 1;
      expect(llist.minIndex()).toBe(expectedValue); 
  })
  it('should return min index', function() {
    var llist = new LList();
    llist.add(2);
    llist.add(1);
    llist.add(3);
    var expectedValue = 0;
    var expectedValue2 = 2;
    expect(llist.minIndex()).not.toBe(expectedValue); 
    expect(llist.minIndex()).not.toBe(expectedValue2); 
  })
});
describe("LList maxIndex", function () {
  it('should return max index', function() {
      var llist = new LList();
      llist.add(2);
      llist.add(1);
      llist.add(3);
      var expectedValue = 2;
      expect(llist.maxIndex()).toBe(expectedValue); 
  })
  it('should return max index', function() {
    var llist = new LList();
    llist.add(2);
    llist.add(1);
    llist.add(3);
    var expectedValue = 0;
    var expectedValue2 = 1;
    expect(llist.maxIndex()).not.toBe(expectedValue); 
    expect(llist.maxIndex()).not.toBe(expectedValue2); 
  })
});
describe("LList reverse", function () {
  var llist = new LList();
  it("should empty LinkedList", function () {
    expect(llist.reverse()).toBe();
    expect(llist.root).toBe(null);
  });
  it("should empty LinkedList", function () {
    llist.add(2);
    llist.add(1);
    llist.add(3);
    expect(llist.reverse()).toBe();
    expect(llist.root).not.toBe(null);
    expect(llist.root).toEqual({"next": null, "value": 2});
  });
});
describe("LList retainAll", function () {
  var llist = new LList();
  it("should argument not array or empty", function () {
    var test = new LList();
    test.add(1);
    test.add(2);
    expect(test.retainAll([])).toBe();
    expect(test.retainAll({})).toBe();
  });
  it("should only elements that exist in the lList will remain", function () {
    llist.add(1);
    llist.add(2);
    llist.add(3);
    llist.retainAll([2]);
    expect(llist.getSize()).toBe(1);
    expect(llist.toArray()).toEqual([2]);
    expect(llist.root).toEqual({ value: 2, next: null });
  });
  it("should empty LList", function () {
    var test = new LList();
    test.add(1);
    test.add(2);
    test.add(3);
    test.retainAll([4, 5, 6]);
    expect(test.getSize()).toBe(0);
    expect(test.toArray()).toEqual([]);
    expect(test.root).toEqual(null);
  });
});
describe("LinkedList removeAll", function () {
  var llist = new LList();
  it("should argument not array or empty", function () {
    var test1 = new LList();
    test1.add(1);
    test1.add(2);
    expect(test1.removeAll([])).toBe();
    expect(test1.removeAll({})).toBe();
  });
  it("should call helpers like this.contains, this.remove", function () {
    llist.add(1);
    llist.add(2);
    llist.add(3);
    llist.contains = jest.fn().mockReturnValue(true);
    llist.remove = jest.fn();
    llist.removeAll([1, 2, 3]);
    expect(llist.contains).toHaveBeenCalledTimes(3);
    expect(llist.remove).toHaveBeenCalledWith(1);
    expect(llist.remove).toHaveBeenCalledWith(2);
    expect(llist.remove).toHaveBeenCalledWith(3);
  });
  it("should remove all nodes from array arguments", function () {
    var llist = new LList();
    var testArray = [1, 2, 3, 4];
    llist.add(1);
    llist.add(2);
    llist.add(3);
    llist.add(5);
    llist.removeAll(testArray);
    expect(llist.getSize()).toBe(1);
    expect(llist.root).toEqual({ value: 5, next: null });
    expect(llist.toArray()).toEqual([5]);
  });
  it("should remove nothing, because values not contain in LList", function () {
    var llist = new LList();
    var testArray = [6, 7, 8, 9];
    llist.add(1);
    llist.add(2);
    llist.add(3);
    llist.add(5);
    var expectRoot = llist.root;
    llist.removeAll(testArray);
    expect(llist.getSize()).toBe(4);
    expect(llist.root).toEqual(expectRoot);
  });
});
describe("LinkedList print", function () {
  var llist = new LList();
  it("should call console.log", function () {
    var value1 = 1;
    llist.add(value1);
    console.log = jest.fn();
    llist.print();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(value1);
  });
});
