const { MongoClient } = require("mongodb");
const URL =
  "mongodb+srv://Decode:admin123@cluster0.exarx.mongodb.net/passwordreset?retryWrites=true&w=majority";
// const URL = process.env.URL;
console.log(URL);
// const DB_NAME = "password-reset";
const MONGO_URI = process.env.MONGO_URI;
const client = new MongoClient(URL);

const mongodb = {
  db: null,
  users: null,

  async connect() {
    await client.connect();
    this.db = client.db(MONGO_URI);
    this.users = this.db.collection("users");
  },
};

module.exports = mongodb;
