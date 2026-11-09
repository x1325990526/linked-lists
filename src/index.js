// index.js

import "./styles.css";
import LinkedList from "./linked-list.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");

console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(6));
console.log(list.contains('dog'));
console.log(list.findIndex('hamster'));