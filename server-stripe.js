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
            //Object POSTed to server contains the Stripe token from Stripe's servers.
            var transaction = req.body;
            var stripeToken = transaction.stripeToken;

            //For now, charge $10.00 to the customer.
            var charge =
            {
                amount: 10*100, //Charge is in cents
                currency: 'USD',
                card: stripeToken //Card can either be a Stripe token, or an object containing credit card properties.
            };

            stripe.charges.create(charge,
                //All stripe module functions take a callback, consisting of two params:
                // the error, then the response.
                function(err, charge)
                {
                    if(err)
                        console.log(err);
                    else
                    {
                        res.json(charge);
                        console.log('Successful charge sent to Stripe!');
                    }
                }
            );

        }
    );
};
