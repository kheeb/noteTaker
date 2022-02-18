const express = require('express');

const notesRouter = require('./notes');

const app = express();

// import router for notes
app.use('/notes', notesRouter);

module.exports = app;