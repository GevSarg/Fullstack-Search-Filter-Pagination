class UsersControllers {
  async getUsers(req, res) {
    const { search, age } = req.query;
    console.log(req.query);

    try {
      const users = await req.app.locals.services.users.getUsers(search, age);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send("Error fetching users");
    }
  }
}

module.exports = UsersControllers;
