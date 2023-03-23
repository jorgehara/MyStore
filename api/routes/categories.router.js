const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => res.json({
    name : 'Categoria 1',
    description : 'Categoria 1'
    }));

module.exports = router;
