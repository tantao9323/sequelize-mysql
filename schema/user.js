module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(32),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        mobile_prefix: {
            type: DataTypes.CHAR(64),
            allowNull: false
        },
        mobile: {
            type: DataTypes.CHAR(64),
            allowNull: false
        },
        password: {
            type: DataTypes.CHAR(255),
            allowNull: false
        },
    }, {
        tableName: 'user'
    });
};