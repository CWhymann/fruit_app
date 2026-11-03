// Basis-URL des Backends. Fuer Deployment hier anpassen.
const API_URL = "http://127.0.0.1:8000/fruits/";

const colorMap = {
  rot: "#d62828",
  gelb: "#f4c430",
  orange: "#f77f00",
  grün: "#4caf50",
  violett: "#7b2cbf",
};

const fruitsInBasket = document.getElementById("fruits-in-basket");
const fruitList = document.getElementById("fruit-list");

function showError(message) {
  const item = document.createElement("li");
  item.className = "error";
  item.textContent = message;
  fruitList.appendChild(item);
}

function renderFruit(fruit) {
  const color = colorMap[fruit.farbe] || "#999";

  const fruitCircle = document.createElement("div");
  fruitCircle.className = "fruit-circle";
  fruitCircle.style.backgroundColor = color;
  fruitsInBasket.appendChild(fruitCircle);

  const listItem = document.createElement("li");
  listItem.style.setProperty("--fruit-color", color);

  const colorDot = document.createElement("span");
  colorDot.className = "color-dot";
  colorDot.style.backgroundColor = color;

  const name = document.createElement("span");
  name.className = "fruit-name";
  name.textContent = fruit.name;

  const details = document.createElement("span");
  details.className = "fruit-details";
  details.textContent = `${fruit.gewicht}g · ${fruit.farbe}`;

  listItem.appendChild(colorDot);
  listItem.appendChild(name);
  listItem.appendChild(details);
  fruitList.appendChild(listItem);
}

fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Server antwortete mit Status ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (data.length === 0) {
      showError("Keine Früchte vorhanden.");
      return;
    }
    data.forEach(renderFruit);
  })
  .catch((error) => {
    console.error(error);
    showError("Früchte konnten nicht geladen werden. Läuft das Backend?");
  });
