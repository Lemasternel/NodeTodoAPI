//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server..');
        console.log(err.message);
        return;
    }

    console.log('Connected to MongoDB server.');

    db.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    }, (error,result) => {
        if (error) {
            console.log('Unable to insert.');
            console.log(error.message);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name:'Leonel',
        age:26,
        location:'Brazil'
    },(error, result)=>{
        if (error) {
            console.log('Unable to insert user.');
            console.log(error);
            return;
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});