// Learn The topics
/* 
1. Document
2. document.getElementById
3. document.getElementsByClassName
4. document.getElementsByTagName
5. querySelector
6. querySelectorAll
7. document.style.color or others


*/

// getElementById
const p = document.getElementById("para");
p.textContent = "Change the Paragraph";
p.style.color = "red";
p.style.fontSize = "20px";

const blogs = document.getElementsByClassName("blogs");
// blogs.style.backgroundColor = "gray";

// Parent Child relation

// const grandParent = document.querySelector(".todo-list");
// // const parent = document.children;
// const child = grandParent.querySelector(".item");
// console.log(child);

// child to parent

const children = document.querySelector(".item");
const parent = children.parentElement;
const grandParent = children.closest(".todo-list");
console.log(grandParent);

// lifting child to parent
// const childrenOne = document.querySelector(".item");
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = "red";

// lifting parent to child
const childrenTwo = document.querySelector(".item").nextElementSibling;
const childrenOneMove = childrenTwo.previousElementSibling;
childrenOneMove.style.color = "red";
