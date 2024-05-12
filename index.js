import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import workExperienceRoutes from './routes/workExperienceRoutes.js';
import additionalInfoRoutes from './routes/additionalInfoRoutes.js';


const app = express ();
app.use (express.json())

dotenv.config();

const PORT = process.env.PORT;
const DATABASE_NAME = process.env.DATABASE_NAme

mongoose.connect("mongodb://localhost:27017/" + DATABASE_NAME)


app.listen(PORT, () =>{
    console.log("Sever is running...")
})


app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/work-experiences', workExperienceRoutes);
app.use('/api/additional-infos', additionalInfoRoutes);



