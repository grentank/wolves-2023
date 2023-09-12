

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Review}) {
      this.hasMany(Review, { foreignKey: 'studentId' });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    git: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};