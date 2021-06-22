const { User } = require('../models');

const userData = [
    {
        username: 'BootCramp',
        email: 'BootCramp2@hotmail.com',
        password: '1Humpdy'
    },
    {
        username: 'Work2Learn',
        email: 'WerkbyDay2@gmailcom',
        password: 'TwinkleToes'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;