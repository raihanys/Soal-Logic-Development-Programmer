// Tahap Deklarasi isi Array
const array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

// Tahap memisahkan huruf dan angka
const sortedArray = [
  ...array.filter((item) => typeof item === "string").sort(),
  ...array.filter((item) => typeof item === "number").sort((a, b) => a - b),
];

// Tahap pengurutan dngan aturan huruf dulu kemudian angka
console.log(JSON.stringify(sortedArray));
