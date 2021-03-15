// import * as dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
// import express from 'express';
const routes = require('./src/routes');
//import routes from './src/routes';
// import cors from 'cors';
const cors = require('cors');

import './database';

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);

app.get('/test', (req, res) => res.json({ message: 'foi' }));

app.listen(3333, () => console.log('Entrou'));
