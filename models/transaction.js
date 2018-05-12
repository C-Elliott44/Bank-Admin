module.exports = function(sequelize, DataTypes) {
    var Transaction = sequelize.define("transaction", {
        transaction_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    Transaction.associate = function(models) {
        Transaction.belongsTo(models.Account, {
            foreignKey: {
                allowNull:false
            }
        });
    };

    return Transaction;
};