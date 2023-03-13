
const shoppingList = ["bread", "milk", "newspaper"];

const listElemen = document.createElement("ul"); // создаем элемент <ul>

shoppingList.forEach(item => {
  const listItem = document.createElement("li"); // создаем элемент <li>
  listItem.textContent = item; // устанавливаем текст элемента <li> в значение элемента массива
  listElement.appendChild(listItem); // добавляем элемент //<li> в элемент <ul>
});

document.body.appendChild(listElement); // добавляем элемент <ul> в тело документа



const ulElement = document.querySelector("#city"); // получаем элемент <ul>
const liElements = ulElement.querySelectorAll("li"); // получаем все элементы <li> внутри элемента <ul>

const array = []; // создаем пустой массив

liElements.forEach(li => {
  array.push(li.textContent.trim()); // добавляем текст каждого элемента <li> в массив, обрезая пробелы
});

console.log(array); // выводим массив в консоль




const players = [
  {name: "aijan", score: 70},
  {name: "ilgiz", score: 65},
  {name: "Dastan", score: 100}
];

const listElement = document.createElement("ul"); // создаем элемент <ul>

players.forEach(players => {
  const listItem = document.createElement("li"); // создаем элемент <li>
  listItem.textContent = `${players.name}: ${players.score}`; // устанавливаем текст элемента <li> в значение свойств объекта
  listElement.appendChild(listItem); // добавляем элемент <li> в элемент <ul>
});

body.appendChild(listElement); // добавляем элемент <ul> в тело документа

// Получаем ссылку на элемент <table> в HTML документе
const table = document.querySelector('table');

// Проходимся по каждому элементу массива tableData и добавляем их в таблицу
tableData.forEach(data => {
  // Создаем новую строку таблицы <tr>
  const row = document.createElement('tr');
  
  // Создаем ячейку таблицы для имени города <td>
  const nameCell = document.createElement('td');
  nameCell.textContent = data.name.toLowerCase();
  row.appendChild(nameCell);
  
  // Создаем ячейку таблицы для населения города <td>
  const populationCell = document.createElement('td');
  populationCell.textContent = data.popelation;
  row.appendChild(populationCell);
  
  // Добавляем строку в таблицу
  table.appendChild(row);
});
 const formule = document.querySelector 
