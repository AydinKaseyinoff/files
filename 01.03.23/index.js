// #1
document.querySelector("#say-hello").addEventListener("click", function () {
  alert("Say hello");
});

// #2
const items = document.querySelector("#items");
document.querySelector("#add-item").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Example " + items.childElementCount + 1;
  items.append(item);
});
document.querySelector("#remove-item").addEventListener("click", function () {
  document.querySelector("#items li:last-child").remove();
});

// #3
document.querySelector("#text").addEventListener("input", function() {
  document.querySelector("#text-length").textContent = this.value.length;
});

// #4
document.querySelector("#toggle-dark-mode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
})

// #5
const ul = document.createElement("ul");
document.body.prepend(ul);
const fruitBasket = ["Apples", "Bananas", "Oranges", "Pears"];
for (let i = 0; i < fruitBasket.length; i++) {
  const li = document.createElement("li");
  li.textContent = fruitBasket[i];
  ul.append(li);
}



// найти нужные элементы
const listItemInpt = document.querySelector("#list-item");
const listUl = document.querySelector("#list");
// добавить слушатель событий к кнопке
document.querySelector("#add-list-item").addEventListener("click", function() {
  // проверить на пустой input
  if (listItemInpt.value.trim() === "") {
    return;
  }

  // создать li и прикрепить к ul
  const li = document.createElement("li");
  listUl.append(li);

  // задать содержимое li и очистить input
  li.textContent = listItemInpt.value;
  listItemInpt.value = "";

  // создать кнопку удаления
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  li.append(removeBtn);

  // при нажатии на кнопку remove удалять li
  removeBtn.addEventListener("click", function() {
    li.remove();
  })
});

// добавлять в список при нажатии на Enter
listItemInpt.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    document.querySelector("#add-list-item").dispatchEvent(new Event("click"));
  }
});


const h1 = document.querySelector("h1")

document.querySelector("#font-size").addEventListener("input", function() {
  h1.style.fontSize = this.value + "px"
})

document.querySelector("#output-text").addEventListener("input", function () {
  h1.textContent = this.value;
})

document.querySelector("#text-color").addEventListener("color", function() {
  h1.style.color = this.value;
})


document.querySelector("#text-bold").addEventListener("change", function () {
  h1.style.fontWeight = this.checked ? "bold" : "normal";
})

document.querySelector("#text-italic").addEventListener("change", function() {
  h1.style.fontStyle = this.checked ? "italic" : "normal";
})


document.querySelector("#text-underline").addEventListener("change", function() {
  h1.style.textDecoration = this.checked ? "underline" : "none";
})


const textTransformInpts = document.querySelectorAll("[name='text-transform']");
for (let i = 0; i < textTransformInpts.length; i++) {
  textTransformInpts(i).addEventListener("change" , function() {
    h1.style.textTransform = this.value
  })
  
}


document.querySelector("#font-family").addEventListener("change", function() {
  h1.style.fontFamily = this.value;
})


document.querySelector