/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        { name: 'Alex', email: '1@1' },
        { name: 'Bob', email: '2@2' },
        { name: 'Carl', email: '3@3' },
        { name: 'Danny', email: '4@4' },
        { name: 'Eddie', email: '5@5' },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Posts',
      [
        { title: 'Hello', body: 'Hello, everyone!', authorId: 1 },
        { title: 'Hi', body: 'Hi, everyone!', authorId: 2 },
        { title: 'Hey', body: 'Hey, everyone!', authorId: 3 },
        { title: 'Hola', body: 'Hola, everyone!', authorId: 4 },
        { title: 'Yo', body: 'Yo, everyone!', authorId: 4 },
        { title: 'Whats up', body: 'Whats up, everyone!', authorId: 5 },
        { title: 'How are you?', body: 'How are you, everyone?', authorId: 5 },
        { title: 'How are you doing?', body: 'How are you doing, everyone?', authorId: 1 },
        { title: 'Plz stop spam', body: 'No spamming doods', authorId: 2 },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Comments',
      [
        { text: 'Nice post!', authorId: 1, postId: 2 },
        { text: 'Great post!', authorId: 2, postId: 3 },
        { text: 'Awesome post!', authorId: 3, postId: 4 },
        { text: 'Awesome post!', authorId: 5, postId: 4 },
        { text: 'Nice post!', authorId: 4, postId: 3 },
        { text: 'Great post!', authorId: 5, postId: 3 },
        { text: 'That is wrong!', authorId: 5, postId: 1 },
        { text: 'Nice post!', authorId: 1, postId: 1 },
        { text: 'Great post!', authorId: 2, postId: 1 },
        { text: 'TEST COMMENT', authorId: 5, postId: 3 },
        { text: 'TEST COMMENT2', authorId: 5, postId: 3 },
        { text: 'TEST COMMENT3', authorId: 5, postId: 3 },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'PostsLikes',
      [
        { userId: 1, postId: 2 },
        { userId: 2, postId: 3 },
        { userId: 3, postId: 4 },
        { userId: 4, postId: 4 },
        { userId: 4, postId: 5 },
        { userId: 5, postId: 2 },
        { userId: 5, postId: 3 },
        { userId: 5, postId: 3 },
        { userId: 5, postId: 3 },
        { userId: 1, postId: 1 },
        { userId: 2, postId: 1 },
        { userId: 3, postId: 1 },
        { userId: 4, postId: 1 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
