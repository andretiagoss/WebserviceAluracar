const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cors = require('cors');

const extractIpParameter = () => 
    process.argv[2] ? process.argv[2] : 'andretiagoss.azurewebsites.net';

const ip = extractIpParameter();
app.set('ip', ip); 

const port = process.env.PORT || 1337;   

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

require('./api')(app);

app.listen(port);