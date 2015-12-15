import mongoose from 'mongoose';

const documentName = 'congress_report';

export default function(callback) {
  mongoose.connect(`mongodb://localhost:27017/${documentName}`);
  // connect to a database if needed
  let db = mongoose.connection;

  db.once('open', () => {
    callback(mongoose);
  });
}
