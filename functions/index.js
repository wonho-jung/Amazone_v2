const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I9cdUFD7T9j3GXeIUJEwJMtwLBgoBkcfl77KyNwTJ0tVRR3IDyHzSTGP90xtH8R6jwo4nmr69ZDR9PaoasmCyyw00SMEr1EO4"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("backend>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "cad",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
//http://localhost:5001/v2-cb8fa/us-central1/api
