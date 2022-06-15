const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FruitsDB");


const FruitSchema = new mongoose.Schema ({
    name: String,
    rating : Number,
    review : String
});

    const Fruit = mongoose.model("Fruit", FruitSchema);

    const fruit = new Fruit({
        name : "apple",
        rating : 7,
        review : "Taste good"
    })

// const PerSchema = new mongoose.Schema ({
//     name : String,
//     age : Number
// });

// const Person = mongoose.model("Person", PerSchema);

// // const person = new Person({
// //     name : "Rajesh",
// //     age : 34
// // })

// person.save();

const kiwi = new Fruit({
    name:"Kiwwi",
    score : 8,
    review : "It was great"
})

kiwi.save();
const Grapes = new Fruit({
    name:"Grapes",
    score : 8,
    review : "It was good"
})
 Grapes.save();


Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        console.log(fruits);
    }
})



  //  fruit.save();


// const url = 'mongodb://localhost:27017';


// const dbName = 'FruitsDB';


// const  client =  new MongoClient(url);


// client.connect(function(err)  {
//     assert.equal(null,err);
//     console.log("Server connected sucessftully");

//     const db = client.db(dbName);
//     insertDocuments(db,function(){

//     client.close()
// });
// });

// const insertDocuments = function(db,callback) {

//     const collection = db.collection('fruits');

//     collection.insertMany([
//         {
//             name : "Apple",
//             score : 8,
//             review : "Great fruit"
//         }
//          , {
//              name :" Grapes",
//              score :5,
//              review : "good"
//          }
//           ,{
//               name : "GreenApple",
//               score : 10,
//               review : "Excellent"
//           }
//     ],  function(err,result) {
//         assert.equal(err,null);
//         // assert.equal(3, result);
//         // assert.equal(3, result.ops.length);
//         console.log("Inserted 3 document into cillection");
//         callback(result);
//     });
// } 