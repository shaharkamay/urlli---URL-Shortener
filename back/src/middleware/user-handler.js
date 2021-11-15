export { userHandler };
import session from 'express-session';

// not working for some reasons
const userHandler = (req, res, next) => {
    next();
    // console.log(req.session)
    // if(req.isAuthenticated()) {
        // return next();
        // return next({ status: 404, message: 'son of a bitch' });
    // }
    // res.redirect('/log-in');
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