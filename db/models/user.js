const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post, Comment }) {
      this.hasMany(Comment, { foreignKey: 'authorId' });
      this.hasMany(Post, { foreignKey: 'authorId', as: 'posts' });
      this.belongsToMany(Post, { through: 'PostsLikes', foreignKey: 'userId', as: 'likedPosts' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
