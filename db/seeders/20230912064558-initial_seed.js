const fs = require('fs').promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const fileData = await fs.readFile('./db/students.txt', 'utf8');
    const students = fileData.split('\n').map((row) => ({
      name: row.split(',')[0],
      git: row.split(',')[1],
    }));
    await queryInterface.bulkInsert('Students', students, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
