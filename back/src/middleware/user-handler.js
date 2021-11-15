const { Database } = require('../database/database.js');

// not working for some reasons
const userHandler = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/log-in');
    // try {
    //     if(req.isAuthenticated()) {

    //     }
    //     console.log(localStorage.getItem('name'));
    //     const userEmail = req.body.userEmail;
    //     const db = new Database('./users');
    //     if(db.isKeyExists(userEmail)) next();
    //     else next({ status: 401, message: 'Unauthorized email' })
    // } catch (error) {
    //     next(error);
    // }

}

module.exports = { userHandler };