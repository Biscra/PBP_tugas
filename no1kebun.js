let lahan = [
    ["subur", "kering", "subur", "subur"],
    ["kering", "kering", "subur", "kering"],
    ["subur", "subur", "subur", "kering"],
    ["tandus", "kering", "kering", "kering"]
];

// Data cuaca (object literal)
let cuaca = {
    suhu: 28,
    kelembapan: 70,
    kecepatanAngin: 10
};

let totalSubur = 0;
let totalDitanami = 0;

// Proses pengecekan tiap baris lahan
for (let i = 0; i < lahan.length; i++) {
    let baris = lahan[i];
    let jumlahSubur = 0;
    // Hitung jumlah petak subur di baris ini
    for (let j = 0; j < baris.length; j++) {
        if (baris[j] === "subur") {
        jumlahSubur++;
        }
    }
    // Cek apakah kurang dari 50% subur
    if (jumlahSubur < baris.length / 2) {
        for (let j = 0; j < baris.length; j++) {
        baris[j] = "kering";
        }
    }
}

// Hitung total petak subur dan tanam jika cuaca cocok
for (let i = 0; i < lahan.length; i++) {
    for (let j = 0; j < lahan[i].length; j++) {
        if (lahan[i][j] === "subur") {
        totalSubur++;
        }
    }
}

// Cek kondisi cuaca
if (cuaca) {
    totalDitanami = totalSubur;
    console.log(`Total petak subur: ${totalSubur}`);
    console.log(`Total petak yang ditanami: ${totalDitanami}`);
    console.log("Cuaca cocok untuk bercocok tanam.");
} 
else {
    console.log(`Total petak subur: ${totalSubur}`);
    console.log(`Total petak yang ditanami: 0`);
    console.log("Cuaca tidak cocok untuk bercocok tanam.");
}

