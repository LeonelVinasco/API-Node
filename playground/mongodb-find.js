//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

var obj=new ObjectID();
console.log(obj);

//se crea el cliente de mongo, se conecta al servidor
//mongo y se crea la bd
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').find().count().then( (count)=>{
    console.log(`Todos count: ${count}`);
  }, (err)=>{
    console.log('Error: Unable to fetch Todos', err);
  });

  //client.close();
});
