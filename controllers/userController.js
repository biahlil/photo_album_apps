const { User, Photo } = require('../models');
const bcrypt = require('bcrypt');
const {generateToken} = require('../helpers/jwt');

class UserController {

    static register(req,res) {
        let { email,password,username } = req.body;
        password = bcrypt.hashSync(password,10);
        console.log(password);
        User.create({ email, password, username})
        .then(result => {
            let response ={
                id: result.id,
                username: result.username,
                password: result.password,
                email: result.email
            }
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }

    static login(req, res) {
        let { email, password } = req.body;
        User.findOne({
            where: {email}
        })
        .then(user => {
            if (!user) {
                throw {
                    name: 'User Login Failed',
                    devMessage: 'User with email ' + email + ' is not found'
                }
            }
            const isCorrect = bcrypt.compareSync(password, user.password);
            console.log(isCorrect);
            if(!isCorrect) {
                throw {
                    name: 'User Login Failed',
                    devMessage: 'User password with email ' + user.email + ' does not match'
                }
            }
            let payload = {
                id: user.id,
                email: user.email
            }
            console.log(payload);
            const token = generateToken(payload);
            console.log(token);
            return res.status(200).json({token})
        })
        .catch(err => {
            return res.status(500).json(err)
        })
    }
}
module.exports = UserController;