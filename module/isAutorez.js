function isAdmin (req, res, next) {
    if (req.session.nameUser == "user") {
        // res.render('adminPage');
        next();
    } else {
        res.redirect("/");
    }
}

module.exports = isAdmin;
