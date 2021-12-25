//OPDRACHT 1

const setAge = function (age) {
  const rightAge = age >= 18;
  return rightAge;
};

const ageTest = function (age) {
  setAge(age);
  if (age >= 18) {
    return "Hello there";
  }
  return "Hey Kiddo";
};

console.log(ageTest(19));

//HIER BEGINT OPDRACHT 2

const calcVAT = function (VAT, basePrice) {
  const percentVAT = VAT / 100;
  const totalVAT = basePrice * percentVAT;

  return totalVAT;
};

const total = function (VAT, basePrice) {
  const totalVATCalc = calcVAT(VAT, basePrice);
  const totalCalc = totalVATCalc + basePrice;

  return totalCalc;
};

console.log(total(9, 1000));

//HIER BEGINT OPDRACHT 3

const calcBase = function (totalAmount, VATAmount) {
  const calcVAT = VATAmount / 100;
  const calcOne = calcVAT + 1;
  const priceBase = totalAmount / calcOne;

  return priceBase;
};

const VATcalc = function (totalAmount, VATAmount) {
  const basePriceCalc = calcBase(totalAmount, VATAmount);
  const amountVAT = totalAmount - basePriceCalc;

  return amountVAT;
};

const logResult = function ([totalAmount, VATAmount]) {
  const logBase = calcBase(totalAmount, VATAmount);
  const logVAT = VATcalc(totalAmount, VATAmount);
  const result = [logBase, logVAT];

  return result;
};

console.log(logResult([1210, 21]));
