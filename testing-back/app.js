const express = require('express');
const logger = require('morgan');
const solve = require('./mathModule');
const cors = require('cors')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    try {
        const a = Number(req.query['a']);
        const b = Number(req.query['b']);
        const c = Number(req.query['c']);

        res.send(solve(a,b,c));
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

app.listen(3001);
