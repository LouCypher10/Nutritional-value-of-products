//konstruktor produktu
function Product(
  id,
  name,
  fat,
  satFattyAcids,
  carbohydrate,
  sugars,
  protein,
  salt
) {
  this.id = id;
  this.name = name;
  this.fat = fat;
  this.satFattyAcids = satFattyAcids;
  this.carbohydrate = carbohydrate;
  this.sugars = sugars;
  this.protein = protein;
  this.salt = salt;
}

//Tworzenie nowych produktów = id,  nazwa, tłuszcz, nasycone kwasy tłuszczowe, węglowodany, cukry, białko, sól.
const serwatka = new Product("a01", "Serwatka", 0.8, 0.5, 75, 75, 12, 0.9);
const mleOdt = new Product(
  "a02",
  "Mleko odtłuszczone",
  0.8,
  0.5,
  50,
  50,
  35,
  1.8
);
const mlePel = new Product("a03", "Mleko pełne", 27, 17, 38, 38, 26, 1.4);
const kakao = new Product(
  "a04",
  "Kakao naturalne",
  10.5,
  6.4,
  11.2,
  1,
  23.8,
  0.02
);
const blonnik = new Product("a05", "Błonnik kakaowy", 6, 0, 12.2, 0, 17, 0);
const solis = new Product(
  "a06",
  "Tłuszcz palmowy 'SOLIS'",
  99.7,
  59.8,
  0,
  0,
  0,
  0
);
const olenex = new Product(
  "a07",
  "Tłuszcz do polew 'OLENEX'",
  100,
  72,
  0,
  0,
  0,
  0
);
const cukier = new Product("a08", "Cukier", 0, 0, 99.8, 99.8, 0, 0);
const kakAlka = new Product(
  "a09",
  "Kakao alkalizowane",
  11,
  7.43,
  8.4,
  0.42,
  30.6,
  0.147
);
const lecytyna = new Product(
  "a10",
  "Lecytyna sojowa",
  92,
  21,
  6,
  3,
  0.05,
  0.01
);
const mp = new Product("a11", "Mąka pszenna", 1.6, 0.32, 70.8, 0.5, 10.5, 0);
const mz = new Product("a12", "Mąka żytnia", 1.7, 0.36, 71, 2.5, 5.9, 0.005);
const arach = new Product(
  "a13",
  "Mąka z o. arach./orzechy arachidowe",
  46.1,
  6.1,
  11.9,
  6.2,
  25.7,
  0.04
);
const miazga = new Product(
  "a14",
  "Miazga kakaowa",
  53,
  32.9,
  7.6,
  2.5,
  12.2,
  0.03
);
const sezam = new Product(
  "a15",
  "Miazga sezamowa",
  58.2,
  9.5,
  1.9,
  1.7,
  26.9,
  0
);
const olej = new Product("a16", "Olej rzepakowy", 99.9, 6.7, 0, 0, 0, 0);
const gastrofryt = new Product(
  "a17",
  "Tłuszcz 'GASTROFRYT'",
  100,
  44,
  0,
  0,
  0,
  0
);
const unigral = new Product("a18", "Tłuszcz'UNIGRAL'", 100, 56, 0, 0, 0, 0);

let products = [
  serwatka,
  mleOdt,
  mlePel,
  kakao,
  blonnik,
  solis,
  olenex,
  cukier,
  kakAlka,
  lecytyna,
  mp,
  mz,
  arach,
  miazga,
  sezam,
  olej,
  gastrofryt,
  unigral,
];

let lista = document.getElementById("lista");
const li = document.createElement("li");

const txa = document.createElement("textarea");
let txid = [];
//Wyświetlanie listy składników i pole textarea
products.forEach(function (item) {
  lista.appendChild(li);
  lista.appendChild(txa);
  txa.id = item.id + "tx";
  txid.push(txa.id);
  lista.innerHTML += " " + item.name + "<br>";
});

let ingredients = []; // tablica składników
let values = []; // tablica wartości

let textareaValue = document.querySelectorAll("textarea");

//Wyświetlanie listy składników
function usingIngredients() {
  const container2 = document.getElementById("container2");
  for (let i = 0; i < ingredients.length; i++) {
    const j = (ingredients[i].slice(0, 3));
    const find = products.find(item => item.id === j);
    console.log(values[i]);
      container2.innerHTML += find.name + " - " + values[i] + " gram" + "<br>"
  };
  };

//obliczanie wartości w 100 gramach


//Tworzenie tablic z użytymi składnikami i ich ilościami
function makeRecipe() {
  txid.forEach(function (item) {
    let x = document.getElementById(item);
    if (x.value.length) {
      ingredients.push(x.id);
      values.push(x.value);
    }
  })
  usingIngredients();
  calculate();
  };

  console.log(ingredients);
  console.log(values);

const resoult = document.getElementById("resoult");
resoult.onclick = makeRecipe;
