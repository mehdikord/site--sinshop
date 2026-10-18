const fa = new Intl.NumberFormat("fa-IR");

export function toman(n: number) {
  return `${fa.format(Math.round(n))} تومان`;
}

export function faNum(n: number | string) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export function finalPrice(price: number, discount: number) {
  return discount ? Math.round((price * (100 - discount)) / 100 / 10000) * 10000 : price;
}
