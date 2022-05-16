const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json())
app.use(cors());


const URI = 'mongodb+srv://sanjay:sanjay123@cluster0.kkdls.mongodb.net/rainfallDB?retryWrites=true&w=majority';

mongoose.connect(URI,  {useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log('connected successfully')}).catch((err)=>{console.log(err);});

const db = mongoose.connection.db;
app.get("/getData", async (req, res) => {

    await mongoose.connection.db.collection('rainrecorded').find().toArray((err, result) => {
        res.send(result)
    })
    
})


app.listen(port, () => console.log(`Server started on PORT ${port}`));