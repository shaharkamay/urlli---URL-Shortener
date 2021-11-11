export { userHandler };
import { Database } from '../database/database.js';

// not working for some reasons
const userHandler = (err, req, res, next) => {
    try {
        const userEmail = req.body.userEmail;
        const db = new Database('./users');
        if(db.isKeyExists(userEmail)) next();
        else next({ status: 401, message: 'Unauthorized email' })
    } catch (error) {
        next(error);
    }

}
