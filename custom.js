// BASE

const pencil = 15.678;
const paints = 123.965;
const pen = 90.2345;
const customerMoney = 500;
let highestPrice = Math.max(pencil, paints, pen);
let minPrice = Math.min(pencil, paints, pen);
let sumAllthings = pencil + paints + pen;
let intgsum = Math.trunc(pencil) + Math.trunc(paints) + Math.trunc(pen);
let roundedsum = 100 * Math.round(sumAllthings / 100);
let istrue = intgsum % 2 == 0;
let restAfterPayment = customerMoney - sumAllthings;
let averageAmount = (sumAllthings / 3).toFixed(2);
let discounr = Math.floor(Math.random() * 60) + 10;
let priceDiscount = (sumAllthings - discounr).toFixed();
let profit = (sumAllthings / 2 - discounr).toFixed();

//Advanced

console.log(`
Максимальна ціна: ${highestPrice} грн.
Мінімальна ціна: ${minPrice} грн.
Вартість всіх товарів: ${sumAllthings} грн.
Сума округлених (в меншу сторону) цін: ${intgsum} грн.
Сума товарів округлена до сотень: ${roundedsum}
Сума всіх товарів (округлена в меншу сторону) є парним числом: ${istrue}
Решта від 500грн становить: ${restAfterPayment} грн.
Середня ціна: ${averageAmount} грн.
Сумма знижки: ${discounr} грн.
Ціна зі знижкою: ${priceDiscount} грн.
Сума прибутку із урахуванням знижки: ${profit} грн.`);
