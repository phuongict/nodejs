const model = require('./model');

class userModel extends model{
    constructor() {
        super();
        this.collectionName = 'categories';
    }
    
    getAll() {
        return this.collection(this.collectionName).all();
    }
    insertUser(params) {
        try {
            this.collection(this.collectionName).insert(params);
        }
        catch (err) {
            console.log(err);
            return false;
        }
        return true;
    }
}
module.exports = userModel;