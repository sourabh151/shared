var List = /** @class */ (function () {
    function List(v) {
        this.root = new DoublyNode(v);
    }
    List.prototype.addPrev = function (v) {
        var temp = new DoublyNode(v);
        temp.next = this.root;
        if (this.root.prev) {
            temp.prev = this.root.prev;
            this.root.prev.next = temp;
        }
        this.root.prev = temp;
    };
    List.prototype.addNext = function (v) {
        var temp = new DoublyNode(v);
        temp.prev = this.root;
        if (this.root.next) {
            temp.next = this.root.next;
            this.root.next.prev = temp;
        }
        this.root.next = temp;
    };
    List.prototype.forward = function () {
        if (this.root.next) {
            this.root = this.root.next;
            return this.root.val;
        }
        return null;
    };
    List.prototype.backward = function () {
        if (this.root.prev) {
            this.root = this.root.prev;
            return this.root.val;
        }
        return null;
    };
    List.prototype.current = function () {
        return this.root.val;
    };
    return List;
}());
var DoublyNode = /** @class */ (function () {
    function DoublyNode(v) {
        this.val = v;
        this.prev = null;
        this.next = null;
    }
    DoublyNode.prototype.setPrev = function (p) {
        this.prev = p;
    };
    DoublyNode.prototype.setNext = function (n) {
        this.next = n;
    };
    return DoublyNode;
}());
var list = new List(3);
list.addNext(23);
list.addPrev(54);
console.log(list.backward());
console.log(list.forward());
console.log(list.forward());
