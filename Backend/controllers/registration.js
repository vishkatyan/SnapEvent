// import the model
const register = require("../models/register");

//define the route handler
exports.registration = async (req, res) => {
    try {
        //extract title and desc from request body
        console.log("=======================================")
        console.log(req.body);
        const { fname, lname, mail, branch, msg } = req.body;

        //create a new todo object and insert it into db
        const response = await register.create({ fname, lname, mail, branch, msg });
        if (response) {

            //send a json response with a success flag
            res.status(200).json(
                {
                    success: true,
                    data: response,
                    message: 'Registration Success!'
                }
            );
        }else{
            res.status(500).json(
                {
                    success: false,
                    message: 'Please Try Again'
                }
            );

        }
    }
    catch (err) {
        // console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message,
        })
    }
}