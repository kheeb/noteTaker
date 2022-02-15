const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { readAndAdd, readFromFile } = require('../helpers/fsUtils');

// GET route for finding notes
notes.get('/', (req, res) =>
    readfromFiles('./db/db/.json').then((data) => res.json(json.parse(data)))
);

// POST notes route creating note
notes.post('/', (req, res) => {
    console.log(req.body) =>
    const { title, text } = req.body;

    if(req.body){
        const freshNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAdd(freshNote, './db/db/json');
        res.json('Your latest note has been added!');
    } else {
        res.error('Oops! Something went wrong!')
    }
});