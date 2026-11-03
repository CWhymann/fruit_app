const colorMap = {
  rot: "#d62828",
  gelb: "#f4c430",
  orange: "#f77f00",
  grün: "#4caf50",
  violett: "#7b2cbf",
};

fetch("http://127.0.0.1:8000/fruits/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const fruitsInBasket = document.getElementById("fruits-in-basket");
    const fruitList = document.getElementById("fruit-list");

    data.forEach((fruit) => {
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
    });
  });
