import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res)=> {
    
    res.status(200).send("Application is running");

});


app.listen(PORT, ()=> {

    console.log(`SERVER IS LIVE & Listening on ${PORT}`);

}); 
