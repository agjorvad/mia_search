const express = require( 'express' );
const app = express();
const router = require('./router')

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.use( '/api', router );

let port = 5000 ||process.env.PORT;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up