// index.js

import LinkedList from "./linked-list.js";

const list = new LinkedList();
list.append("1");
list.append("2");
list.append("3");


console.log(list.toString());

list.insertAt(0, 10, 11);
console.log(list.toString());
list.removeAt(5);
console.log(list.toString());