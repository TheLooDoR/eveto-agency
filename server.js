const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3001
const CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_ORIGIN
    : 'http://localhost:3000'

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use(cors({
    origin: CLIENT_ORIGIN
}))

const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});