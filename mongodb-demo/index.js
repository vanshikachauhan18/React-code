import express from 'express';
import connectDb from './config/db.js';

const app = express();

app.use(express.json());

connectDb();

app.listen(5000, () => {
    console.log("Server running");
})