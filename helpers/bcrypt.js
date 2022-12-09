const bcrypt = require('bcrypt');

function hashPassword(userPassword) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(userPassword, salt);
    return hash;
}

function comparePassword(userPassword, hashPassword) {
    return bcrypt.compareSync(userPassword, hashPassword);
}

module.exports = {
    hashPassword, 
    comparePassword
}