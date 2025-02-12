import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config()

const app=express();

// rate limiter - to limit the number of requests
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // ⏳ Limit each IP to 100 requests per `windowMs`
    message: "Too many requests, please try again later.",
    headers: true, // 📊 Send rate limit info in headers
});
app.use(limiter);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allow all necessary methods
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"], // ✅ Allow cookies
}));

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

// routes 
import UserRoutes from './routes/user.route.js';

app.use('/api/auth',UserRoutes);

export { app}