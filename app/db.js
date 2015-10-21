import mongoose from 'mongoose';

export default function(callback) {
  mongoose.connect('mongodb://localhost:27017/congress-report');
  // connect to a database if needed
  let db = mongoose.connection;

  db.once('open', () => {
    console.log('mongoose connected!');
    
    callback(mongoose);
  });
}
