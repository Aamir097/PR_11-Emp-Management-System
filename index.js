import express from "express";
import dotenv from "./configs/dotenv.js";
import router from "./routers/index.js";
import bodyParser from "body-parser";
import db from "./configs/database.js";
import cookieParser from "cookie-parser";
import clientRouter from "./routers/client.route.js";
import taskRouter from "./routers/task.route.js";

const app = express();

const port = dotenv.PORT || 3000;
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine','ejs');
app.use(express.static('public'));

app.use('/api',router);
app.use('/',clientRouter);
app.use('/task',taskRouter);

app.listen(port,(error) => {
    if(!error){
        console.log("Server Started.");
        console.log("http://localhost:"+port);
    } else {
        console.log(error.message);
    }
})