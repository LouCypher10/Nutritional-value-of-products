function Product(name, fat, satFattyAcids, carbohydrate, sugars,  protein, salt) {
  this.name = name;
  this.fat = fat;
  this.satFattyAcids = satFattyAcids;
  this.carbohydrate = carbohydrate;
  this.sugars = sugars;
  this.protein = protein;
  this.salt = salt;
}

//Tworzenie nowych produktów = nazwa, tłuszcz, nasycone kwasy tłuszczowe, węglowodany, cukry, białko, sól.
const serwatka = new Product("Serwatka", 0.8, 0.5, 75, 75, 12, 0.9);
const mleOdt = new Product("Mleko odtłuszczone", 0.8, 0.5, 50, 50, 35, 1.8);
const mlePel = new Product("Mleko pełne", 27, 17, 38, 38, 26, 1.4);
const kakao = new Product("Kakao naturalne", 10.5, 6.4, 11.2, 1, 23.8, 0.02);
const blonnik = new Product("Błonnik kakaowy", 6, 0, 12.2, 0, 17, 0);
const solis = new Product("Tłuszcz palmowy 'SOLIS'", 99.7, 59.8, 0, 0, 0, 0);
const olenex = new Product("Tłuszcz do polew 'OLENEX'", 100, 72, 0, 0, 0, 0);
const cukier = new Product("Cukier", 0, 0, 99.8, 99.8, 0, 0);
const kakAlka = new Product("Kakao alkalizowane", 11, 7.43, 8.4, 0.42, 30.6, 0.147);
const lecytyna = new Product("Lecytyna sojowa", 92, 21, 6, 3, 0.05, 0.01);
const mp = new Product("Mąka pszenna", 1.6, 0.32, 70.8, 0.5, 10.5, 0);
const mz = new Product("Mąka żytnia", 1.7, 0.36, 71, 2.5, 5.9, 0.005);
const arach = new Product("Mąka z orzechów arachidowych/orzechy arachidowe", 46.1, 6.1, 11.9, 6.2, 25.7, 0.04);
const miazga = new Product("Miazga kakaowa", 53, 32.9, 7.6, 2.5, 12.2, 0.03);
const sezam = new Product("Miazga sezamowa", 58.2, 9.5, 1.9, 1.7, 26.9, 0);
const olej = new Product("Olej rzepakowy", 99.9, 6.7, 0, 0, 0, 0);
const gastrofryt = new Product("Tłuszcz 'GASTROFRYT'", 100, 44, 0, 0, 0, 0);
const unigral = new Product("Tłuszcz'UNIGRAL'", 100, 56, 0, 0, 0, 0);

let products = [serwatka, mleOdt, mlePel, kakao, blonnik, solis, olenex, cukier, kakAlka, lecytyna, mp, mz, arach, miazga, sezam, olej, gastrofryt, unigral];

container1 = document.getElementById("container1");

let el = document.createElement("span");

products.forEach(function (item) {

container1.innerHTML += "produkt: " + item.name + "<br>";
});
