const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cors = require('cors');

const extractIpParameter = () => 
    process.argv[2] ? process.argv[2] : 'localhost';

const ip = "wsaluracar.azurewebsites.net";//extractIpParameter();
const port = process.env.PORT || 1337;   

app.set('ip', ip); 

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

require('./api')(app);

app.listen(port);

