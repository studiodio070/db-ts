import dotenv from 'dotenv';
import express from 'express';


require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL);

console.log('Connected to PlanetScale!');

connection.end();

const app = express();

app.listen(3001, () => {
    console.log('listening planetscale')
})
