class UserController {
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const users = await req.app.locals.services.user.getUser(id);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send("Error fetching users");
    }
  }
}

module.exports = UserController;
