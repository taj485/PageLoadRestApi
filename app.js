
const morgan = require('morgan');
const webInfoRoutes = require('./api/routes/web-info-router')
const express = require('express');
const app = express();

// app.use() middlewear
app.use(morgan('tiny'));

app.use('/webinfo', webInfoRoutes)

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
