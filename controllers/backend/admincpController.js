module.exports.index = (req, res, next) => {
    res.render('backend/admincp/index', {
        title: "Admin Control Panel",
        content: "Welcome to AdminCP"
    })
};