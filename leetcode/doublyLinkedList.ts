class List<T> {
  root: (DoublyNode<T> | null);
  constructor(v: (T | null)) {
    if (v) {
      this.root = new DoublyNode<T>(v);
    }
    else {
      this.root = null;
    }
  }
  createRoot(v: T) {
    this.root = new DoublyNode<T>(v)
  }
  addPrev(v: T) {
    if (this.root) {
      let temp: DoublyNode<T> = new DoublyNode<T>(v);
      temp.next = this.root;
      if (this.root.prev) {
        temp.prev = this.root.prev;
        this.root.prev.next = temp;
      }
      this.root.prev = temp;
    }
  }
  addNext(v: T) {
    if (this.root) {
      let temp: DoublyNode<T> = new DoublyNode<T>(v);
      temp.prev = this.root;
      if (this.root.next) {
        temp.next = this.root.next;
        this.root.next.prev = temp;
      }
      this.root.next = temp;
    }
  }
  forward() {
    if (this.root) {
      if (this.root.next) {
        this.root = this.root.next;
        return this.root.val;
      }
    }
    return null;
  }
  backward() {
    if (this.root) {
      if (this.root.prev) {
        this.root = this.root.prev;
        return this.root.val;
      }
    }
    return null;
  }
  current() {
    if (this.root) {
      return this.root.val
    }
  }
}
class DoublyNode<T> {
  val: T;
  prev: (DoublyNode<T> | null);
  next: (DoublyNode<T> | null);
  constructor(v: T) {
    this.val = v;
    this.prev = null;
    this.next = null;
  }
  setPrev(p: DoublyNode<T>) {
    this.prev = p;
  }
  setNext(n: DoublyNode<T>) {
    this.next = n;
  }
}
const list: List<number> = new List(3);
list.addNext(23);
list.addPrev(54);
console.log(list.backward());
console.log(list.forward());
console.log(list.forward());

