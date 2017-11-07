const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.topicNotifications = functions.https.onRequest((req, res) => {

  // Contentful will send the entry data as the request body
  const product = req.body.fields;
  const topic = "product";

  // Message details for end user
  const payload = {
    notification: {
      title: "New product Posted",
      body: `AngularFirebase.com posted a new product called ${product.title}`,
      icon: "https://goo.gl/Fz9nrQ"
    }
  };

  // Send messages via FCM
  return admin
    .messaging()
    .sendToTopic(topic, payload)
    .then(_ => {
      // successful response
      res.status(200).send("product subscribers have been notified");
    })
    .catch(err => {
      res.status(400).send("Messages failed to send");
    });
});
