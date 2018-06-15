const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cors = require('cors');

const extractIpParameter = () =>
    process.argv[2] ? process.argv[2] : 'localhost';

const ip = extractIpParameter();
app.set('ip', ip);

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

require('./api')(app);

const port = process.env.PORT || 1337;
app.listen(port,()=>{
    console.log('IP:'+ ip + ' porta:'+ port);

});

