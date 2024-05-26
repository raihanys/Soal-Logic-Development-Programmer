/* Pada Node.js saya perlu melakukan Pemanggilan modul 'readline' 
untuk menunggu respon Input pengguna di terminal */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countLetters() {
  rl.question("Input: ", (input) => {
    const letterCount = {};

    // Tahap penghilangan spasi
    const cleanInput = input.replace(/\s/g, "");

    // Tahap mengisi 'letterCount' dengan huruf berdasarkan Inputan
    for (let char of input) {
      if (/[a-zA-Z]/.test(char)) {
        const key = char;
        letterCount[key] = (letterCount[key] || 0) + 1;
      }
    }

    // Tahap pengurutan hasil sesuai alfabet
    const sortedLetterCount = Object.entries(letterCount).sort((a, b) =>
      a[0].localeCompare(b[0])
    );

    // Menampilkan Output
    let output = "[";
    sortedLetterCount.forEach(([char, count], index) => {
      output += `"${char}":${count}`;
      if (index < sortedLetterCount.length - 1) {
        output += ", ";
      }
    });
    output += "]";

    console.log(`Output: ${output}`);

    rl.close();
  });
}

// Tahap pemanggilan fungsi
countLetters();
