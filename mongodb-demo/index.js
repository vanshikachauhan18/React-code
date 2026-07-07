import express from 'express';
import connectDb from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

app.use(express.json());

connectDb();

app.use("/students", studentRoutes);

app.listen(3000, () => {
    console.log("Server running");
})

export default app;