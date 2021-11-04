export { errorHandler };

const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.json({status: err.status, message: err.message});
    res.end();
}
