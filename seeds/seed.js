const sequelize = require('../config/connection');
const { User, Favorites, ThingsToDo } = require('../models');

const thingsToDoSeedData = require('./thingToDoSeedData.json');
const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of user) {
    const newFavorite = await Favorites.create({
      user_id: id,
    });
  }

  for (const thingsToDo of thingsToDoSeedData) {
    const newThing = await ThingsToDo.create({
      ...thingsToDo,
      // Attach a random user id to each thing to do
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
