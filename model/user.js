const mysql = require('../config/mysql');
const userSchema = mysql.import('../schema/user');

const getUserById = async (id) => {
    const userInfo = await userSchema.find({
        where: {
            id
        }
    })
    return userInfo
}

module.exports = {
    getUserById
};