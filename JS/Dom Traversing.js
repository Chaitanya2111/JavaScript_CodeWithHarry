console.log('Welcome to tutorial 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
// console.log(nodeType)
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);











/*  
1) querySelector or querySelectorAll:-

<div class="add">
<h2 class="add__title">title</h2>
</div>
const component = document.querySelector('.add')
console.log(component)





2)children:-

const items= document.querySelector('.myclass')
const l_Items = items.children
console.log(l_Items)



3)Selecting a specific child:-

const mylist = document.querySelectorAll('li')
const firstItem = mylist[0]
const secondItem = mylist[1]
console.log(firstItem)
console.log(secondItem)



4)parentElement:-

const mylist = document.querySelectorAll('li')
const firstItem = mylist[0]
const secondItem = mylist[1]
console.log(firstItem.parentElement)
console.log(secondItem.parentElement)


5) nextElementSibling:-

const item1 = document.querySelector('li')
const item2 = item1.nextElementSibling
console.log(item2)



6)previousElementSibling:-

const item5 = document.querySelectorAll('li')[1]
const item6 = item5.previousElementSibling
console.log(item6)



7)Node Type:-
var type = node.nodeType;

Constant

Value

Description

Node.ELEMENT_NODE

1

An Element node like <h1> or <p>.

Node.ATTRIBUTE_NODE

2

An Attribute of an Element.

Node.TEXT_NODE

3

The actual Text inside an Element

Node.COMMENT_NODE

8

A Comment node

Node.DOCUMENT_NODE

9

A Document node.

Node.DOCUMENT_TYPE_NODE

10

A DocumentType(<!DOCTYPE html>) node

Node.DOCUMENT_FRAGMENT_NODE

11

A DocumentFragment node.

 







*/