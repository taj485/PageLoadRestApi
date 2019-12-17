
const morgan = require('morgan');
const pageSpeedRoutes = require('./api/routes/page-speed')
const express = require('express');
const app = express();

// app.use() middlewear
app.use(morgan('tiny'));

app.use('/pagespeed', pageSpeedRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;
