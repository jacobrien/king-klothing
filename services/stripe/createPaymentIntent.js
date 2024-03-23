const stripe = require('stripe')(process.env.stripeSecretKey);

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'https://spontaneous-pony-201652.netlify.app/',
];

module.exports.handler = async (event) => {
  console.log(event);
  const { amount } = JSON.parse(event.body);

  const origin = event.headers.origin;
  let headers;

  if (ALLOWED_ORIGINS.includes(origin)) {
    headers = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Credentials': true,
    };
  } else {
    headers = {
      'Access-Control-Allow-Origin': '*',
    };
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (err) {
    console.log({ err });
    return {
      status: 400,
      body: JSON.stringify({ err }),
    };
  }
};
