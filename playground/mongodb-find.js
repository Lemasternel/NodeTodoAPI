//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server..');
        console.log(err.message);
        return;
    }

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}.`);
    // });
    
    db.collection('Todos').find({
        completed:false
        //_id: new ObjectID("59bef8d56506981d0ca914a6")
    }).toArray().then((docs) => {
        console.log(`Todos (count:${docs.length})`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch data. ', error);
    });

    db.collection('Users').find({name:'Leonel'}).toArray().then((docs) => {
        console.log(`Users (count:${docs.length})`);
        console.log(JSON.stringify(docs, undefined, 2));
    },(error)=>{
        console.log('Unable to fetch data. ', error);
    });

    //db.close();
});