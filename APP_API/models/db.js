const mongoose = require('mongoose');


const dbURI = 'mongodb+srv://fmmoliver:dbacourse@cluster0.swesh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName: 'RelieveItOut'});


mongoose.connection.on('connected', () => { 
    console.log(`Mongoose connected to ${dbURI}`); 
   }); 
   mongoose.connection.on('error', err => { 
    console.log('Mongoose connection error:', err); 
   }); 
   mongoose.connection.on('disconnected', () => { 
    console.log('Mongoose disconnected'); 
   });

   require('./user');
   require('./appointment');