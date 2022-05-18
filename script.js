function Product(name, kcal, protein, fat, carbohydrate, fiber) {
  this.name = name;
  this.kcal = kcal;
  this.protein = protein;
  this.fat = fat;
  this.carbohydrate = carbohydrate;
  this.fiber = fiber;
}

//Tworzenie nowych produktów = nazwa, kaloryczność, białko, tłuszcz, węglowodany, błonnik.
const mp500 = new Product("Mąka pszenna typ 500", 343, 10.1, 1.2, 74, 2.3);
const mp550 = new Product("Mąka pszenna typ 550", 344, 10.5, 1.6, 73, 2.3);

let product = [mp500, mp550];

container1 = document.getElementById("container1");

let el = document.createElement("span");

product.forEach(function (item) {

container1.innerHTML += "produkt: " + item.name + "<br>";
container2
});
