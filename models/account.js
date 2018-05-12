module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("account", {
        account_type: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    Account.associate = function(models) {
        Account.hasMany(models.Transaction, {
            onDelete: "casacade"
        });
    };
    Account.associate = function(models) {
        Account.belongsTo(models.User, {
            foreignKey: {
                allowNull:false
            }
        });
    };

    return Account;
};