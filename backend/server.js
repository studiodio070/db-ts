import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';

dotenv.config();



const PORT = process.env.port || 5000

const connectPscale = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to Pscale!')
// const {errorHandler} = require('.middleware/errorMiddleware')
// const connection = require("mysql2/typings/mysql/lib/Connection")
// connection.end()

const app = express();

app.listen(3001, () => {
    console.log('app listening')
})

