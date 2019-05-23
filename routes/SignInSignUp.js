const User = require('../models/user');

module.exports = (app) => {
    app.post('/users/signUp_check', (req, res, next) => {
        let name = req.body.name;
        let address = req.body.address;
        let mobileNum = req.body.mobileNum;
        let email = req.body.email;
        let password = req.body.password;
        let idNum = req.body.idNum;

        if (!name) {
            return res.send({
                success: false,
                message: 'Error : Name Cannot be Empty !'
            });
        }
        if (!address) {
            return res.send({
                success: false,
                message: 'Error : Address Cannot be Empty !'
            });
        }
        if (!mobileNum) {
            return res.send({
                success: false,
                message: 'Error : MobileNum Cannot be Empty !'
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'Error : Email Cannot be Empty !'
            });
        }


        if (!password) {
            return res.send({
                success: false,
                message: 'Error : Password Cannot be Empty !'
            });
        }
        if (!idNum) {
            return res.send({
                success: false,
                message: 'Error : ID number Cannot be Empty !'
            });
        }

        mobileNum = mobileNum.toLowerCase();

        User.find({mobileNum: mobileNum}, (err, previousUsers) => {
            if (err) {
                return res.send('Error : Server Error !');
            } else if (previousUsers.length > 0) {
                return res.send('Error : Account Already exists !');
            }
            const newUser = new User();
            newUser.name = name;
            newUser.address = address;
            newUser.mobileNum = mobileNum;
            newUser.email = email;
            newUser.password = password;
            newUser.idNum = idNum;

            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error : Server Error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Successfully Registered !',
                    user: user
                })
            })
        })
    });


    app.post('/users/signIn_check', (req, res, next) => {

        let mobile = req.body.mobile_Num;
        let pwd = req.body.user_password;

        if (!mobile) {
            return res.send({
                success: false,
                message: 'Error : mobile number Cannot be Empty !'
            });
        }
        if (!pwd) {
            return res.send({
                success: false,
                message: 'Error : Password Cannot be Empty !'
            });
        }
        User.find({mobile: mobile}, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error : Server Error'
                });
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error : Invalid'
                });
            }

            const user = users[0];
            if (!user.validPassword(pwd, user.pwd)) {
                return res.send({
                    success: false,
                    message: 'Error : Invalid'
                });
            }
            return res.send({
                success: true,
                message: 'Successfully Logged In'
            })


            });

    });

}