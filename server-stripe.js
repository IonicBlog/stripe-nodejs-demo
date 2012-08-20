/*IMPORTANT: Make sure you fill in your secret API key into the stripe module.*/
var stripe = require('stripe')('SECRET_API_KEY_GOES_HERE');

module.exports = function(app){
    app.get('/stripe',
        function(req,res)
        {
            res.json({}); //Send out blank data for now.
        }
    );

    app.post('/stripe',
        function(req,res)
        {
            var transaction = req.body;
            console.log(transaction);
            res.json({});
        }
    );
}
