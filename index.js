import Express from "express";
import dotenv from "dotenv"
import cors from "cors"
import session from "express-session";

const app = Express()
dotenv.config()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}))
app.use(Express.json())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:5174"] //domain yang di izinkan di api kita
}))

app.listen(process.env.APP_PORT , () => {
    console.log("App listen on port: ",process.env.APP_PORT);
})

