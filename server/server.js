const express = require('express');
const cors = require('cors');
const firebase = require('firebase')

import configServer from './config';

const config = {
    apiKey: configServer.apiKey,
    authDomain: configServer.authDomain,
    databaseURL: configServer.databaseURL,
    storageBucket: configServer.storageBucket,
};
firebase.initializeApp(config);
const database = firebase.database();


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'meow 😹'
    });
});

function isValid(mew) {
    return mew.name && mew.name.toString().trim() !== "" &&
    mew.content && mew.content.toString().trim() !== ""; 
}

function wirteData(name, content) {
    database.ref('name/' + name).set({
        name: name,
        content: content
    });
}

app.post('/mews', (req, res) => {
    if(isValid(req.body)) {
        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        }
        wirteData(mew.name, mew.content);
    } else {
        res.status(422);
        res.json({
            message: `Name And Content are required`
        });
    }
})

app.listen(5000, () => {
    console.log('Listen on port 5000');
});