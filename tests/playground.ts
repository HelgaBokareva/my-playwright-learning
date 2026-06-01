function getTimeout(seconds: number): number {
  return seconds * 1000;  // Hint: look at the return type
}

type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

const productA: Product = {
  name: "Wireless Mouse",
  price: 29.99,
  inStock: true,
};

const productB: Product = {
  name: "USB-C Charger",
  price: 19.95,
  inStock: false,
};

const config = { baseURL: "https://staging.example.com" };
console.log(config.baseURL);  // Hint: case matters

function printName(name: string) {
  console.log(name);
}
const userName: string = "Olga";
printName(userName);  // Hint: what if userName is undefined?

