const dbConnect = require('../config/dbConnect');

class model{
    constructor() {
        this.client = dbConnect.client;
        this.db = dbConnect.db;
        this.data = [];
    }

    collection(name) {
        this.collection = name;
        return this;
    }

    all() {
        return new Promise((resolve, reject) => {
            this.db.collection(this.collection).find({}).toArray((err, docs) => {
                if (err)
                    reject(err);
                else
                    resolve(docs);
            });
        });
    }

    insert(params) {
        if (params instanceof Array) {
            this.db.collection(this.collection).insertMany(params, (err, result) => {
                if (err)
                    throw err;
                console.log("insert success");
            });
        }
        else if (params instanceof Object) {
            this.db.collection(this.collection).insertOne(params, (err, result) => {
                if (err)
                    throw err;
                console.log("insert success");
            });
        }
        else
            throw "params is not object or array";
    }

}
module.exports = model;