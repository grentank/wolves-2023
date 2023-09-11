const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Post }) {
      this.belongsTo(User, { foreignKey: 'authorId' });
      this.belongsTo(Post, { foreignKey: 'postId' });
    }
  }
  Comment.init(
    {
      text: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
