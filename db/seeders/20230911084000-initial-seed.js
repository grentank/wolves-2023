/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        title: 'First comment',
        message: 'This is the first comment',
      },
      {
        title: 'Second comment',
        message: 'This is the second comment',
      },
      {
        title: 'Third comment',
        message: 'This is the third comment',
      },
    ], {});
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
