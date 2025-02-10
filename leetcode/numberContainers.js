
var NumberContainers = function() {
  this.ind = new Map();
  this.num = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
  if(this.ind.has(index)){
    this.num.get(this.ind.get(index)).delete(index);
    if(this.num.get(this.ind.get(index)).size == 0){
      this.num.delete(this.ind.get(index))
    }
  }
  this.ind.set(index, number);
  if (this.num.has(number)) {
    this.num.get(number).add(index);
  }
  else {
    this.num.set(number, new Set([index]));
  }
  return null;
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
  if (this.num.has(number)) {
    let min = null;
    this.num.get(number).forEach(element => {
      min = min == null ? element : element < min ? element : min;
    });
    return min;
  }
  else{
    return -1;
  }
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
//["NumberContainers","change","find","change","find","find","find"]
//[[],[1,10],[10],[1,20],[10],[20],[30]]
let n = new NumberContainers();
console.log(n.change(1,10))
console.log(n.find(10));
console.log(n.change(1,20))
console.log(n.find(10));
console.log(n.find(20));
console.log(n.find(30));
console.log(n)
