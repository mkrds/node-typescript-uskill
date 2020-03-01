import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "local";

// Use connect method to connect to the server
let db;

const connectToDB = (): void =>
  MongoClient.connect(url, (err, client) => {
    if (err) throw err;

    console.log("Connected successfully to Database");

    db = client.db(dbName);
  });

export { db, connectToDB };
