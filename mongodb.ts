import { MongoClient, Db } from "mongodb";
import config from "./config";

let db: Db;

const connectToDB = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    MongoClient.connect(
      `mongodb://${config.db.host}:${config.db.port}`,
      { useNewUrlParser: true },
      (err, client: MongoClient) => {
        if (err) {
          reject(err);
        } else {
          console.log("Connected successfully to Database");

          db = client.db(config.db.name);
          resolve();
        }
      }
    );
  });
};

export { db, connectToDB };
