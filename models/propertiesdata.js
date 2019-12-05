module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define("propertie", {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    initialInvestment: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yearOneReturn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yield: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Property;
};
