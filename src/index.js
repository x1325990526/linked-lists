// index.js

import "./styles.css";
import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.prepend("cat");
console.log(list.toString());