let tanya = true;
while (tanya) {
  // Menangkap pilihan Player
  let p = prompt("Silahkan pilih : gajah, semut dan orang");

  // Menangkap Pilihan Komputer
  // Membangkitkan Pilihan Random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  let hasil = "";

  // Menentukan Rules
  if (p == comp) {
    hasil = "Seri!";
  } else if (p == "gajah") {
    // if (comp == 'orang') {
    // 	hasil = 'MENANG!';
    // } else {
    // 	hasil = 'KALAH';
    // }

    // Menggunakan ternary
    // Cek dulu apakah komputer melilih orang, maka string 'MENANG!' akan masuk ke variabel hasil dan jika string 'KALAH!' akan masuk ke variabel hasil.
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    // if ( comp == 'gajah') {
    // 	hasil = 'KALAH!';
    // } else {
    // 	hasil = 'MENANG!';
    // }
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "Anda Memasukan Pilihan yang Salah!!!";
  }

  // Menampilkan hasilnya
  alert(
    "Kamu Memilih : " +
      p +
      " dan Komputer Memilih : " +
      comp +
      " \n Maka Hasilnya : Kamu " +
      hasil
  );
  tanya = confirm("Mau Mengulangi Bermain  LAGI???");
}

alert("Terima Kasih telah Bermain!");
