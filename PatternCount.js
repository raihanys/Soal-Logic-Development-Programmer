/* 
Soal

Silakan tulis kode yang mengandung setidaknya satu fungsi/metode utama
yang disebut pattern_count yang menerima dua string atau dua array karakter
dengan panjang antara 0 dan 100 karakter. Pertama parameter adalah teks
dan parameter kedua adalah pattern. Fungsi ini akan mengembalikan angka
bagaimana banyak pola ada di dalam teks. Asumsikan parameter input selalu
tidak nol. Solusi Anda tidak boleh menggunakan fungsi pembantu yang telah
ditentukan sebelumnya seperti substr_count di PHP atau panjang
kecocokan regex dalam JavaScript.
*/

/* Pada Node.js saya perlu melakukan Pemanggilan modul 'readline' 
untuk menunggu respon Input pengguna di terminal */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Tahap memasukan text dan pola
function pattern_count() {
  rl.question("Masukkan teks: ", (text) => {
    rl.question("Masukkan pola: ", (pattern) => {
      let count = 0;
      const textLength = text.length;
      const patternLength = pattern.length;

      // Tahap mencari dan meghitung pola yang muncul sesuai Inputan
      for (let i = 0; i <= textLength - patternLength; i++) {
        let found = true;
        for (let j = 0; j < patternLength; j++) {
          if (text[i + j] !== pattern[j]) {
            found = false;
            break;
          }
        }
        if (found) {
          count++;
        }
      }

      // Menampilkan input dan hasil hitung pola
      console.log();
      console.log(`Input: "${text}", "${pattern}"`);
      console.log(`Output: ${count}`);

      rl.close();
    });
  });
}

// Tahap pemanggilan fungsi
pattern_count();
