var IList = require("./IList");

var AList = function (capacity) {
    IList.call(this, capacity);
    this.size = 0;
    this.offset = 0;
    this.DEFAULT_CAPACITY = 10;
    this.array = (() => {
        if (!this.capacity) {
            return new Array(this.DEFAULT_CAPACITY);
        } else if (typeof this.capacity === "number") {
            return new Array(this.capacity);
        } else if (Array.isArray(this.capacity)) {
            this.size = this.capacity.length;
            return this.capacity;
        } else {
            throw new Error("Exception message");
        }
    })();

    this.ensureCapacity = function() {
        var newArray = new Array(this.array.length + Math.floor(this.array.length * 1.5));
        for (var i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    };

    this.addValue = function(value) {
        this.array[this.offset++] = value;
        this.size++;
    };
};
AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.getSize = function() {
    return this.size;
};
AList.prototype.add = function(value) {
    if (this.size === this.array.length) {
        this.ensureCapacity();
        this.addValue(value);
    } else {
        if (this.array[this.offset]) {
            this.offset++;
            this.add(value);
        } else {
            this.addValue(value);
        }
    }
};
AList.prototype.set = function(value, index) { //
    if (index < 0 || index > this.array.length - 1) {
        throw new Error("Array index out bounds exception");
    }
    if (!this.array[index]) {
        this.array[index] = value;
        this.size++;
    } else {
        this.array[index] = value;
    }
};
AList.prototype.get = function (index) {
  if (!this.array[index]) {
    throw new Error("Array index out bounds exception");
  }
  return this.array[index];
};
AList.prototype.remove = function (value) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === value) {
      var deleteValue = this.array[i];
      delete this.array[i];
      this.size--;
      return deleteValue;
    }
  }
};
AList.prototype.toArray = function () {
  return this.array;
};
AList.prototype.toString = function () {
  return this.array.toString();
};
AList.prototype.contains = function (value) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i] === value) {
      return true;
    }
  }
  return false;
};
AList.prototype.minValue = function () {
  var minVal = this.array[0]
  for( var i=0; i < this.array.length+1; i++){
      if(this.array[i]<minVal){
          minVal=this.array[i]
      }
  }
  return minVal
};
AList.prototype.maxValue = function () {
  var maxVal = this.array[0]
  for( var i=0; i<this.array.length+1;i++){
      if(this.array[i]>maxVal){
          maxVal=this.array[i]
      }
  }
  return maxVal
};
AList.prototype.minIndex = function () {
  var minInd = 0
  for( var i=1; i<this.array.length+1;i++){
      if(this.array[minInd]>this.array[i]){
          minInd=i
      }
  }
  return minInd
};
AList.prototype.maxIndex = function () {
  var maxInd = 0
  for( var i=1; i<this.array.length+1;i++){
      if(this.array[maxInd]<this.array[i]){
          maxInd=i
      }
  }
  return maxInd
};
AList.prototype.reverse = function () {
  var newArr=[]
  for(var i=this.array.length-1;i>-1;i--){
      newArr.push(this.array[i])
  }
  return this.array=newArr
};
AList.prototype.halfReverse = function () {
  for (var i = 0; i < Math.floor(this.array.length / 2); i++) {
      var secondIndex = Math.ceil(this.array.length / 2) + i;
      var tempElement = this.array[i];
      this.array[i] = this.array[secondIndex];
      this.array[secondIndex] = tempElement;
  }
  return this.array;
};
AList.prototype.retainAll = function (array) {
  let resultArr=[]
  this.size=0
  for(let i=0; i<this.array.length; i++){
      for(let j=0; j<array.length; j++){
          if(this.array[i]==array[j]){
              resultArr.push(this.array[i])
              this.size++
          }
      }
  }
  return this.array=resultArr
};
AList.prototype.removeAll = function (array) {
  let resultArr=[]
  this.size=0
  for(let i=0; i<this.array.length; i++){
      for(let j=0; j<array.length; j++){
          if(this.array[i]==array[j]){
              delete this.array[i]
          }
      }
      if(this.array[i]!==undefined){
          resultArr.push(this.array[i])
          this.size++
      }
  }
  return this.array=resultArr
};
AList.prototype.print = function () {
  for (var i = 0; i < this.array.length; i++) {
      console.log(this.array[i]);
  }
};

var alist = new AList([5, 6, 7, 8, 9]);

module.exports = AList;