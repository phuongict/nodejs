require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
class dbConnect{
    constructor(url, port, dbName) {
        this.url = url;
        this.port = port;
        this.dbName = dbName;
        this.connectDB(); 
    }
    connectDB() {
        const client = new MongoClient(this.url + ":" + this.port, { useUnifiedTopology: true });
        client.connect((err) => {
            assert.equal(null, err);
            this.client = client;
            this.db = client.db(this.dbName);
            // console.log("Connected successfully to server");
            // client.close();
        });
    }
}
module.exports = new dbConnect(process.env.DB_URL, process.env.DB_PORT, process.env.DB_NAME);