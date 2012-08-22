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

<<<<<<< HEAD
//Serve out the demo.css file that overrides the CSS reset.
=======
//Serve out the css file that overrides the CSS reset.
>>>>>>> ae470d840afe6c40986693c19ecbd4b5efe958c8
app.get('/demo.css',
    function(req,res)
    {
        res.sendfile('demo.css');
    }
);

//Port server is on. Defaulted to 8080.
app.listen(8080);
console.log('Stripe demo server is up and running!');