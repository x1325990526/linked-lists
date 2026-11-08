export default class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
    }

    append(value) {
        if (this.head === null) {
            this.prepend(value);
        } else {
            let tmp = this.head;
            while (tmp.next !== null) tmp = tmp.next;

            tmp.next = new Node(value);
        }
    }

    toString() {
        if (this.head === null) return 'null';

        let tmp = this.head;
        let str = `( ${tmp.value} )`;
        tmp = tmp.next;

        while (tmp !== null) {
            str += ` -> ( ${tmp.value} )`;
            tmp = tmp.next;
        }

        return `${str} -> null`;
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}
