let papanCatur = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "K", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
];

//variabel posisi Raja (K) dan Benteng (R)
let barisR = 0, kolomR = 0;
let barisK = 0, kolomK = 0;

//mencari posisi Raja dan Benteng
for (let i = 0; i < papanCatur.length; i++) {
    for (let j = 0; j < papanCatur[i].length; j++) {
        if (papanCatur[i][j] === "R") {
        barisR = i;
        kolomR = j;
        } else if (papanCatur[i][j] === "K") {
        barisK = i;
        kolomK = j;
        }
    }
}

//mengecek apakah Raja terkena SKAK
if (barisR >= 0 && barisK >= 0 && kolomR >= 0 && kolomK >= 0) {
    if (barisK === barisR || kolomK === kolomR) {
        console.log("SKAK!");
    } else {
        console.log("Aman");
    }
} else {
    console.log("Posisi tidak valid!");
}

//mengecek posisi
console.log(`Posisi Benteng (R): baris ${barisR}, kolom ${kolomR}`);
console.log(`Posisi Raja (K): baris ${barisK}, kolom ${kolomK}`);