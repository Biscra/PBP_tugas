//soal1
let studentsScore = [ 
    {
        name  : 'Andi',
        score : 90
    },
    {
        name  : 'Rudi',
        score : 80
    },
    {
        name  : 'Dira',
        score : 100
    },
];

let topStudent = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > topStudent.score) {
        topStudent = studentsScore[i];
    }
}

console.log(`Nama: ${topStudent.name}, Nilai: ${topStudent.score}`);

// Soal 2

let motoGP = [
  { circuit: 'Losail', location: 'Qatar', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
  { circuit: 'Autodromo', location: 'Argentina', winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
  { circuit: 'De Jerez', location: 'Spain', winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
  { circuit: 'Mugello', location: 'Italy', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } }
];

let grouped = {};

for (let i = 0; i < motoGP.length; i++) {
    let event = motoGP[i];
    let country = event.winner.country;
    let fullName = event.winner.firstName + ' ' + event.winner.lastName;

    if (!grouped[country]) {
        grouped[country] = {
        winningCircuits: [],
        totalWins: 0
        };
    }

    grouped[country].winningCircuits.push({
        circuit: event.circuit,
        location: event.location,
        winner: fullName
    });

    grouped[country].totalWins++;
}

console.log(JSON.stringify(grouped, null, 2));


