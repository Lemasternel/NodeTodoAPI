//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server..');
        console.log(err.message);
        return;
    }

    // db.collection('Todos').deleteMany({text:'Eat lunch'});

    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id:new ObjectID("59c2f35f42f6fb7cca2a58e4")});

    //db.close();
});