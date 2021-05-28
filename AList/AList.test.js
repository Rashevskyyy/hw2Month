var AList = require("./AList");

describe("AList check init capacity", function () {
    it("init_empty", function () {
        var alist = new AList();
        expect(alist.array.length).toBe(alist.DEFAULT_CAPACITY);
    });
    it("init_capacity", function () {
        var CAPACITY = 30;
        var alist  = new AList(CAPACITY);
        expect(alist.array.length).toBe(CAPACITY);
    });
    it("init_array", function () {
        var ARRAY = [1, -2, 3, 15, -60, 90];
        var alist = new AList(ARRAY);
        expect(alist.array).toEqual(ARRAY);
        expect(alist.getSize()).toBe(ARRAY.length);
        expect(alist.array.length).toBe(ARRAY.length);
    });
    it("error", function(){
        try {
          var test = "test";
          new AList(test);
        } catch (e) {
          expect(e.message).toBe("Exception message");
        }
      })
    it('alist should be object', function() {
      var alist = new AList(7);
      expect(typeof alist).toBe('object');
  })
  it('should create array with capacity 7', function() {
      var alist = new AList(7);
      expect(alist.capacity).toBe(7);
      alist.clear();
  })
  it('should add element to array', function() {
      var alist = new AList();
      alist.add(7);
      expect(alist.array).toContain(7);
      alist.clear();
  })
  it('clear argument should be array', function() {
      var alist = new AList(7);
      alist.clear();
      expect(alist.size).toEqual(0);
  })
})
describe("AList check size", function () {
  it('should return size of array', function () {
      var alist = new AList(7);
      alist.add(7);
      expect(alist.getSize()).toBe(1);
  })
})
describe("AList add values", function () {
  it("add first", function () {
      var alist = new AList();
      console.log("size = ", alist.getSize());
      alist.add(10);
      console.log("size = ", alist.getSize());
      console.log(alist.array);
      expect(alist.getSize()).toBe(1);
  });
  it("add ensure capacity", function () {
      var alist = new AList();
      for (var i = 0; i < 10; i++) {
          alist.add(i);
      }
      alist.add(50);
  });
  it('should add element to array', function() {
      var alist = new AList(7);
      alist.add(9);
      expect(alist.array).toEqual([9, undefined, undefined, undefined, undefined, undefined, undefined]);
  })
});
describe("AList set values", function () {
  test("set first", function () {
      var alist = new AList();
      alist.add(10);
      alist.add(5);
      alist.add(3);
      alist.set(50, 5);
      alist.add(-100);
      alist.add(150);
      alist.add(250);
  });
  it('should set element at index', function() {
    var alist = new AList(7);
    alist.set(4, 2);
    expect(alist.array).toEqual([undefined,undefined,4, undefined, undefined, undefined, undefined]);
  })  
  it("should throw error if invalid index", function () {
    try {
      var array = new AList(2);
      array.add(1);
      array.add(2);
      array.set(3, 3);
    } catch (e) {
      expect(e.message).toBe("Array index out bounds exception");
    }
  })
  it("should set in filled collection slot", function () {
    var array = new AList([1, 2]);
    var index = 0;
    var test = [3, 2];
    array.set(3, index);
    expect(array.array[index]).toBe(test[index]);
  });
});
describe("AList get values", function () {
  it("should index in collection slots interval", function () {
    var array = new AList(3);
    var value = 10;
    array.add(value);
    expect(array.get(0)).toBe(value);
  });
  it("should index out of range collection slots interval", function () {
    try {
      var array = new AList(3);
      var value = 10;
      array.add(value);
      array.get(1);
    } catch (e) {
      expect(e.message).toBe(
        "Array index out bounds exception"
      );
    }
  });
  it('should return element by index', function () {
    var alist = new AList(7);
    alist.add(9);
    expect(alist.get(0)).toBe(9);
  })
})
describe("AList remove values", function () {
  it('should remove element by index', function() {
      var alist = new AList([5, 6, 7, 8, 9]);
      expect(alist.remove(9)).toBe(9)
  })
})
describe("AList is Array", function () {
  it('should be array', function () {
      var alist = new AList(7);
      expect(Array.isArray(alist.toArray())).toBe(true);
  })
})
describe("AList is String", function () {
  it('should be string and return string', function() {
      var alist = new AList([1,2]);
      expect(alist.toString()).toBe('1,2');
  })
})
describe("AList contains", function () {
  it('should contain number and return false', function() {
      var alist = new AList([1,2,3,4,5]);
      expect(alist.contains(1)).toBe(true);
      expect(alist.contains(3)).toBe(true);
      expect(alist.contains(5)).toBe(true);
      expect(alist.contains(6)).toBe(false);
  })
})
describe("AList check minValue", function () {
  it('should return min value of an array', function () {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      expect(alist.minValue()).toBe(0);
  })
  it('should return min value of an array', function () {
    var alist = new AList([3,5,6,3,9,2,0,3]);
    expect(alist.minValue()).not.toBe(2);
  })
})
describe("AList check maxValue", function () {
  it('should return max value of an array', function () {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      expect(alist.maxValue()).toBe(9);
  })
  it('should return max value of an array', function () {
    var alist = new AList([3,5,6,3,9,2,0,3]);
    expect(alist.maxValue()).not.toBe(8);
  })
})
describe("AList check minIndex", function () {
  it('should return index of min value of an array', function () {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      expect(alist.minIndex()).toBe(6);
  })
  it('should return index of min value of an array', function () {
    var alist = new AList([3,5,6,3,9,2,0,3]);
    expect(alist.minIndex()).not.toBe(5);
  })
})
describe("AList check maxIndex", function () {
  it('should return index of max value of an array', function () {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      expect(alist.maxIndex()).toBe(4);
  })
  it('should return index of max value of an array', function () {
    var alist = new AList([3,5,6,3,9,2,0,3]);
    expect(alist.maxIndex()).not.toBe(5);
  })
})
describe("AList check reverse", function () {
  it('should reverse an array', function () {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      expect(alist.reverse()).toStrictEqual([3,0,2,9,3,6,5,3]);
  })
})
describe("AList check halfReverse", function () {
  it('should reverse half of array', function () {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      expect(alist.halfReverse()).toStrictEqual([9,2,0,3,3,5,6,3]);
  })
})
describe("AList check retainAll", function () {
  it('should retain elements from array', function() {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      alist.retainAll([3, 5]);
      expect(alist.array).toEqual([3,5,3,3]);
  }) 
})
describe("AList check removeAll", function () {
  it('should remove elements from array', function() {
      var alist = new AList([3,5,6,3,9,2,0,3]);
      expect(alist.removeAll([6,9])).toStrictEqual([3,5,3,2,0,3]);
      alist.clear();
  }) 
})
describe("AList check print", function () {
  it("should call console.log with args from collection slots", function () {
    var test = new AList(1);
    var value1 = 1;
    console.log = jest.fn();
    test.add(value1);
    test.print();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(value1);
    expect(console.log).not.toHaveBeenCalledWith();
  });
});

