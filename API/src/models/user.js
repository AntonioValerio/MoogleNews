module.exports = (connection, Sequelize) => {
    class User extends Sequelize.Model {}
    User.init(
      {
        _id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true,
        },
        username: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        dataIv: {
          type: Sequelize.STRING,
        },
        role: {
          type: Sequelize.NUMBER(1),
        },
      },
      { sequelize: connection }
    );
    User.associate = (models) => {
      User.belongsToMany(models.articles, { through: "UserBooks" });
    };
    return User;
  };
  