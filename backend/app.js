import express from "express";
import connectDB from "./src/config/monogo.config.js"
import urlRouter from "./src/routes/short_url.route.js"
import healthRouter from "./src/routes/health.route.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors"

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/healthz",healthRouter)
app.use("/api/links",urlRouter)
app.get("/:code",redirectFromShortUrl)

app.use(errorHandler)

app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
