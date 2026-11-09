export default class LinkedList {
    constructor() {
        this.h = null;
    }

    prepend(value) {
        this.h = new Node(value, this.h);
    }

    append(value) {
        if (this.h === null) {
            this.prepend(value);
        } else {
            let tmp = this.h;
            while (tmp.next !== null) tmp = tmp.next;

            tmp.next = new Node(value);
        }
    }

    size() {
        let n = 0;
        let tmp = this.h;
        while(tmp !== null) {
            n++;
            tmp = tmp.next;
        }
        return n;
    }

    head() {
        if(this.h === null) return;
        return this.h.value;
    }

    tail() {
        if(this.h === null) return;
        let tmp = this.h;
        while (tmp.next !== null) tmp = tmp.next;

        return tmp.value;
    }
    at(index) {
        if(index < 0) return;
        let tmp = this.h;
        while(index > 0) {
            if(tmp === null) return;
            tmp = tmp.next;
            index--;
        }
        return tmp === null ? undefined : tmp.value;
    }

    pop() {
        if(this.h === null) return;
        const tmp = this.h.value;
        this.h = this.h.next;
        return tmp;
    }

    contains(value) {
        let tmp = this.h;
        while (tmp !== null) {
            if(tmp.value === value) return true;
            tmp = tmp.next;
        }
        return false;
    }

    findIndex(value) {
        let tmp = this.h;
        let n = 0;
        while (tmp !== null) {
            if(tmp.value === value) return n;
            tmp = tmp.next;
            n++;
        }
        return -1;
    }

    toString() {
        if (this.h === null) return '';

        let tmp = this.h;
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
