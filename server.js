const express = require('express');
const fs = require('fs');
const path = require('path');



const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use('/api', api)

app.get('/api/notes', (req, res) => {
    let allNotes = fs.readFileSync(path.join(__dirname, './db/db.json'));
    allNotes = JSON.parse(allNotes);
    res.json(allNotes);
});

app.post('/api/notes', (req, res) => {
    let allNotes = fs.readFileSync(path.join(__dirname, './db/db.json'));
    allNotes = JSON.parse(allNotes);
    allNotes.push(req.body);
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(allNotes));
    res.json(allNotes);
    console.log(req.body)
});

app.use(express.static('public'));

// html route to homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname,'/public/index.html'))
);

// html route to notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () =>
    console.log(`app is listening at http://localhost:${PORT}`)
);