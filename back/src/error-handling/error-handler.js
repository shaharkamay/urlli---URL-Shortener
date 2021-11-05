export { errorHandler };

const errorHandler = (err, req, res, next) => {
    console.log(err);
    // res.json({status: err.status, message: err.message});
    // res.end();
    switch (err) {
		case 400:
			res.status(400);
			res.json('No URL was provided / The URL that was provided is not valid');
            res.end();
			break;
		case 404:
			res.status(404);
			res.json('The URL provided was not found');
            res.end();
			break;

		default:
			res.status(500);
			res.json('Server error, please try again later');
            res.end();
			break;
    }

}
