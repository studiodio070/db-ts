"use strict";

require('dotenv').config();

var mysql = require('mysql2');

var connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');
connection.end();