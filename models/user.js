module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: {
            type :DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type :DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type :DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type :DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        } 
    });


    User.associate = function(models) {
        User.hasMany(models.Account, {
            onDelete: "casacade"
        });
    };
    return User;
};