'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Woods', [{
name: 'Bois',
type: 'noble and hardwoods',
hardness: "hard",
}], {});
},

async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Woods', null, {});
}
};