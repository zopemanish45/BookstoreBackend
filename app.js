const express = require('express')
const app = express();

const mongoose = require('mongoose')

const cors = require('cors')

const routes = require('./routes/bookRoutes')

const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());
app.use('/books', routes);


mongoose.connect('mongodb+srv://manishzope412:Ee7M2IJEnPcDT3Hm@cluster0.svzb7cl.mongodb.net/bookData?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Database connected...')
    }).then(() => {
        app.listen(port, () => {
            console.log(`server running on http://localhost:${port}`);
        })
    })
