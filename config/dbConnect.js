const mongoose = require("mongoose");
class dbConnect{
    constructor(url, port, dbName) {
        this.url = url;
        this.port = port;
        this.dbName = dbName;
        this.connectDB(); 
    }
    connectDB() {
        try {
            await mongoose.connect(
                this.url + ":" + this.port + "/" + this.dbName,
                { useNewUrlParser: true }
            );
        } catch (error) {
            handleError(error);
        }
    }
}
module.exports = dbConnect;