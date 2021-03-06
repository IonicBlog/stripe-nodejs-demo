var express = require('express');
var app = express();

//Express Middleware used to be able to parse objected through POST commands
app.use(express.bodyParser());

require('./server-stripe.js')(app);

//Serve out index.html to root and /index.html GET requests
app.get(['/','/index.html'],
    function(req,res)
    {
        res.sendfile('index.html');
    }
);

//Serve out the demo.css file that overrides the CSS reset.
app.get('/demo.css',
    function(req,res)
    {
        res.sendfile('demo.css');
    }
);

//Port server is on. Defaulted to 8080.
app.listen(8080);
console.log('Stripe demo server is up and running!');