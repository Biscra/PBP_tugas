// Daftar koin yang tersedia
let koin = [1000, 500, 200, 100, 50];
let jumlahUang = 2850;

for (let i = 0; i < koin.length - 1; i++) {
    for (let j = i + 1; j < koin.length; j++) {
        if (koin[i] < koin[j]) {
            let temp = koin[i];
            koin[i] = koin[j];
            koin[j] = temp;
        }
    }
}

let hasil = [];
let sisa = jumlahUang;

for (let i = 0; i < koin.length; i++) {
    while (sisa >= koin[i]) {
        sisa -= koin[i];
        hasil.push(koin[i]);
    }
}

console.log("Jumlah uang:", jumlahUang);
console.log("Koin yang digunakan:", hasil);
console.log("Total koin:", hasil.length);



