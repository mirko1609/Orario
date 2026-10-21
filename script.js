const settimana = document.getElementById('settimana');

const giorni = [
    {
        nome: 'Lunedì',
        impegni: [
            {
                nome: 'Scuola',
                inizio: '08:00',
                fine: '13:30'
            }
        ]
    },
    {
        nome: 'Martedì',
        impegni: [
            {
                nome: 'Scuola',
                inizio: '08:00',
                fine: '13:30'
            }
        ]
    },
    {
        nome: 'Mercoledì',
        impegni: [
            {
                nome: 'Scuola',
                inizio: '08:00',
                fine: '13:30'
            },
            {
                nome: 'Danza',
                inizio: '18:00',
                fine: '19:00'
            }
        ]
    },
    {
        nome: 'Giovedì',
        impegni: [
            {
                nome: 'Scuola',
                inizio: '08:00',
                fine: '13:30'
            },
            {
                nome: 'Pianoforte',
                inizio: '15:00',
                fine: '16:00'
            }
        ]
    },
    {
        nome: 'Venerdì',
        impegni: [
            {
                nome: 'Scuola',
                inizio: '08:00',
                fine: '13:30'
            },
            {
                nome: 'Danza',
                inizio: '17:30',
                fine: '18:30'
            }
        ]
    },
    {
        nome: 'Sabato',
        impegni: [
            {
                nome: 'Post Cresima',
                inizio: '18:30',
                fine: '20:00'
            }
        ]
    },
    {
        nome: 'Domenica',
        impegni: []
    }
];


// CREAZIONE SETTIMANA

for (let i = 0; i < giorni.length; i++) {

    const giorno = document.createElement('div');
    giorno.classList.add('giorno');

    const titoloGiorno = document.createElement('h2');
    titoloGiorno.textContent = giorni[i].nome;

    giorno.appendChild(titoloGiorno);


    for (let j = 0; j < giorni[i].impegni.length; j++) {

        const impegno = document.createElement('div');
        impegno.classList.add('impegno');

        const titoloImpegno = document.createElement('h3');
        titoloImpegno.textContent = giorni[i].impegni[j].nome;

        impegno.appendChild(titoloImpegno);


        const orarioImpegno = document.createElement('p');

        orarioImpegno.textContent =
            `${giorni[i].impegni[j].inizio} - ${giorni[i].impegni[j].fine}`;

        impegno.appendChild(orarioImpegno);

        giorno.appendChild(impegno);
    }

    settimana.appendChild(giorno);
}


// ORARIO SCOLASTICO

const orario = document.getElementById('orario');

const ore = [
    '08:00 - 8:55',
    '08:55 - 09:50',
    '09:50 - 10:30',
    '10:45 - 11:40',
    '11:40 - 12:35',
    '12:35 - 13:30'
];


const giorniOrario = [
    {
        nome: 'Lunedì',
        materie: [
            'Inglese',
            'Grammatica',
            'Antologia',
            'Religione',
            'Storia/Geografia',
            'Tecnologia'
        ]
    },
    {
        nome: 'Martedì',
        materie: [
            'Algebra',
            'Geometria',
            'Letteratura',
            'Educazione Fisica',
            'Storia',
            'Inglese'
        ]
    },
    {
        nome: 'Mercoledì',
        materie: [
            'Scienze',
            'Arte',
            'Storia/Geografia',
            'Spagnolo',
            'Algebra',
            'Antologia'
        ]
    },
    {
        nome: 'Giovedì',
        materie: [
            'Arte',
            'Grammatica',
            'Inglese',
            'Educazione Fisica',
            'Musica',
            'Antologia'
        ]
    },
    {
        nome: 'Venerdì',
        materie: [
            'Letteratura',
            'Tecnologia',
            'Storia/Geografia',
            'Scienze',
            'Musica',
            'Spagnolo'
        ]
    }
];


// INTESTAZIONE ORARIO

const intestazione = document.createElement('div');
intestazione.classList.add('intestazione');


// Spazio vuoto sopra la colonna delle ore

const spazioVuoto = document.createElement('div');

intestazione.appendChild(spazioVuoto);


// Nomi dei giorni

for (let i = 0; i < giorniOrario.length; i++) {

    const giorno = document.createElement('div');

    giorno.textContent = giorniOrario[i].nome;

    intestazione.appendChild(giorno);
}

orario.appendChild(intestazione);


// CREAZIONE ORARIO

for (let i = 0; i < ore.length; i++) {

    const ora = document.createElement('div');
    ora.classList.add('ora');


    // Ora

    const titoloOra = document.createElement('h2');

    titoloOra.textContent = ore[i];

    ora.appendChild(titoloOra);


    // Materie

    for (let j = 0; j < giorniOrario.length; j++) {

        const materia = document.createElement('div');
        materia.classList.add('materia');

        const titoloMateria = document.createElement('h3');

        titoloMateria.textContent = giorniOrario[j].materie[i];

        materia.appendChild(titoloMateria);

        ora.appendChild(materia);
    }

    orario.appendChild(ora);
}