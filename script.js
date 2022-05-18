function Product(name, kcal, protein, fat, carbohydrate, fiber){
    this.name = name;
    this.kcal = kcal;
    this.protein = protein;
    this.fat = fat;
    this.carbohydrate = carbohydrate;
    this.fiber = fiber;
};

const mp500 = new Product("Mąka pszenna typ 500", 343, 10.10, 1.20, 74, 2.30);
const mp550 = new Product("Mąka pszenna typ 550", 344, 10.50, 1.60, 73, 2.30);
