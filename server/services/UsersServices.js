class UsersServices {
  constructor(models) {
    this.models = models;
  }

  async getUsers(search, age) {
    const regex = search ? new RegExp(search, "i") : null;
    const query = {};

    if (regex) {
      query.first_name = regex;
      let users = await this.models.users.find(query);

      if (users.length === 0) {
        delete query.first_name;
        query.last_name = regex;
        users = await this.models.users.find(query);

        if (users.length === 0) {
          delete query.last_name;
          query.email = regex;
          users = await this.models.users.find(query);
        }
      }

      if (users.length > 0) {
        return users;
      }
    }

    switch (age) {
      case "0-20":
        query.age = { $gte: 0, $lte: 20 };
        break;
      case "21-40":
        query.age = { $gte: 21, $lte: 40 };
        break;
      case "41-60":
        query.age = { $gte: 41, $lte: 60 };
        break;
      case "61-80":
        query.age = { $gte: 61, $lte: 80 };
        break;
      case "80+":
        query.age = { $gte: 80 };
        break;
      case "reset":
        query.age = {};
        break;
      default:
        break;
    }

    return await this.models.users.find(query).limit(30);
  }
}

module.exports = UsersServices;
