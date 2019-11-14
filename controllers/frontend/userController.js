const controller = require('../controller');
const userModel = require('../../models/userModel');
class userController extends controller {
    constructor() {
        super();
    }
    async listUser(req, res, next) {
        const user = new userModel();
        let lists = await user.getAll();
        res.render('index', { lists });
    }
    insertUser() {
        const user = new userModel();
        user.insertUser({ title: "abc", content: '123' });
    }
}
module.exports = new userController();