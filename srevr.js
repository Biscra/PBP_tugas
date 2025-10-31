const express = require('express');
const port = 8000;

const app = express();
app.use(express.json());

const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
        firstName: 'Andrea',
        lastName: 'Dovizioso',
        country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
        firstName: 'Cal',
        lastName: 'Crutchlow',
        country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
        firstName: 'Valentino',
        lastName: 'Rossi',
        country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
        firstName: 'Andrea',
        lastName: 'Dovizioso',
        country: 'Italy'
        }
    }
];

//endpoint untuk menampilkan seluruh data
app.get('/', (req, res) => {
    res.json(motoGP);
});

//endpoint untuk pengelompokan berdasarkan negara
app.get('/country', (req, res) => {
    const grouped = motoGP.reduce((acc, item) => {
        (acc[item.winner.country] = acc[item.winner.country] || []).push(item);
        return acc;
    }, {});
    res.json(grouped);
});

//endpoint untuk pengelompokan berdasarkan nama pemenang 
app.get('/name', (req, res) => {
    const grouped = motoGP.reduce((acc, item) => {
        const fullName = `${item.winner.firstName} ${item.winner.lastName}`;
        (acc[fullName] = acc[fullName] || []).push(item);
        return acc;
    }, {});
    res.json(grouped);
});

//endpoint untuk URL selain yang ditentukan, mengembalikan Bad Request
app.use((req, res) => {
    res.status(400).send('Bad Request');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
