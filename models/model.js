require("dotenv").config();
const mongoose = require("mongoose");
const dbConnect = require('../config/dbConnect');

class model extends dbConnect{
    constructor() {
        super(process.env.DB_URL, process.env.DB_PORT, process.env.DB_NAME);
        this.data = [];
        this.collection = '';
        this.schema
    }

    collection(name) {
        this.collection = name;
        return this;
    }

    all() {
        
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