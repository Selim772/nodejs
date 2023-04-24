'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wood.init({
    name: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM('softwood', 'exotic wood', 'noble and hardwoods'),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Veuillez entrer le type de bois'
        }
      }
    },
    hardness: {
      type: DataTypes.ENUM('tender', 'medium-hard', 'hard'),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Veuillez entrer la dureté du bois'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Wood',
  });
  return Wood;
};
