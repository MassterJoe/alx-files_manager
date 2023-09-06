import { MongoClient } from "mongodb";
const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || "27017";
const dbName = process.env.DB_DATABASE || "files_manager";
const url = `mongodb://${host}:${port}`;
class DBClient {
  constructor() {
    this.client = new MongoClient(url, { useUnifiedTopology: true });
      this.isConnected = false;
      this.db = null;
      this.client
      .connect()
      .then(() => {
        this.db = this.client.db(`${dbName}`);
      })
        .catch((err) => {
          
        console.log(err);
      });
  }

  isAlive() {
    return this.isConnected;
  }

  async nbUsers() {
    const users = this.db.collection("users");
    const numUsers = await users.countDocuments();
    return numUsers;
  }
  async nbFiles() {
    const files = this.db.collection("files");
    const numFIles = await files.countDocuments();
    return numFIles;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
