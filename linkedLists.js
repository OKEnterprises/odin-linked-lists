var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    ListNode.prototype.setNext = function (n) {
        this.nextNode = n;
    };
    ListNode.prototype.equals = function (o) {
        return this.value === o.value;
    };
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this.size = head ? 1 : 0;
        this.head = head;
        this.tail = head;
    }
    LinkedList.prototype.append = function (value) {
        if (!this.tail) {
            this.head = value;
            this.tail = value;
        }
        else {
            this.tail.setNext(value);
        }
        this.size++;
    };
    LinkedList.prototype.prepend = function (value) {
        if (this.tail === null) {
            this.head = value;
            this.tail = value;
        }
        else {
            value.setNext(this.head);
            this.head = value;
        }
        this.size++;
    };
    LinkedList.prototype.getSize = function () { return this.size; };
    LinkedList.prototype.getHead = function () { return this.head; };
    LinkedList.prototype.getTail = function () { return this.tail; };
    LinkedList.prototype.at = function (idx) {
        if (idx === 0)
            return this.head;
        if (idx === this.size - 1)
            return this.tail;
        var i = 0;
        var curr = this.head;
        while (i < idx && (curr === null || curr === void 0 ? void 0 : curr.nextNode)) {
            curr = curr.nextNode;
        }
        return curr;
    };
    LinkedList.prototype.pop = function () {
        var newTail = this.at(this.size - 2);
        if (newTail) {
            newTail.nextNode = undefined;
            this.tail = newTail;
        }
    };
    LinkedList.prototype.contains = function (elt) {
        var curr = this.head;
        while (curr && curr.nextNode) {
            if (curr.equals(elt))
                return true;
            curr = curr.nextNode;
        }
        return false;
    };
    LinkedList.prototype.find = function (elt) {
        var idx = 0;
        var curr = this.head;
        while (curr && curr.nextNode) {
            if (curr.equals(elt))
                return idx;
            idx++;
            curr = curr.nextNode;
        }
        return -1;
    };
    LinkedList.prototype.toString = function () {
        var output = "";
        var curr = this.head;
        while (curr && curr.nextNode) {
            output += "( ".concat(curr.value, " ) -> ");
        }
        output += "null";
        return output;
    };
    return LinkedList;
}());
var myHead = new ListNode(7);
console.log(myHead);
var myList = new LinkedList(myHead);
console.log(myList);
