const {User, UserSchema } = require('./user.models');
//aca irian todos nuestros modelos


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;

