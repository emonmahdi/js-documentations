//Find an array of obejct chepest price product result.
const phones = [
  { name: "nokia", price: 25000, color: "black", memory: 32 },
  { name: "vivo", price: 15000, color: "blue", memory: 256 },
  { name: "samsung", price: 11000, color: "black", memory: 64 },
  { name: "oppo", price: 12500, color: "gray", memory: 120 },
  { name: "huawai", price: 18000, color: "light-gray", memory: 256 },
  { name: "shaomi", price: 25000, color: "black", memory: 256 },
];

let cheapest = phones[0];

for (const phone of phones) {
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
