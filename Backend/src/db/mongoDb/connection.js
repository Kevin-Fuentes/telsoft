import mongoose from 'mongoose';
import { config } from "dotenv";
config({ path: process.ENV })

const url = process.env.MONGO_URL

mongoose.set('strictQuery', false)

mongoose.connect(url,{ useUnifiedTopology: true}).then(() => {
     console.log('mongo db connection established')
}).catch(console.log)
     

