const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Comment }) {
      this.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
      this.hasMany(Comment, { foreignKey: 'postId' });
      this.belongsToMany(User, { through: 'PostsLikes', foreignKey: 'postId', as: 'likedBy' });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Post',
    },
  );
  return Post;
};
