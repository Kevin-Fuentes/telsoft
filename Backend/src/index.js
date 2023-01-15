import { config } from "dotenv";
config({ path: process.ENV })
import express from 'express';
import cors from 'cors';
import product from './routes/product/index.js'
import './db/mongoDb/connection.js'
const app = express();

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/api',product)
app.use('/', (req,res) => {
     res.send('the services is running')
})




export default app;