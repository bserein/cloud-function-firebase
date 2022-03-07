const functions = require("firebase-functions");

exports.sayHello = functions.https.onRequest((request, response) => {
    const message = 'Hello my little friend.';
    response.send(message);
});

exports.showStudent = functions.https.onRequest((request, response) => {
    const student = {
        firstName: 'Brian',
        lastName: 'Serein',
        email: 'thisguy@hotmail.com',
        phone: '346-CALL-PETE'
    }
    response.send(student);
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
