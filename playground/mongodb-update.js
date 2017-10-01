//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server..');
        console.log(err.message);
        return;
    }

    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID("59c2ef9142f6fb7cca2a5896") }, 
        { $set: {completed: true} }, 
        { returnOriginal: false })
        .then((result) => {
            console.log(result);
    });

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID("59bef9617b59f2152cc28167") },
        { $set: { name:'Joel' }, $inc: { age:1 } },
        { returnOriginal: false })
        .then((result) => {
            console.log(result);
        });
});