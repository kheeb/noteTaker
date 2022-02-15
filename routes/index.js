const express = require('express');

const notesRoutes = require('./notes');

const app = express();

// import routes for notes
app.use('/notes', notesRoutes)

module.exports = app;