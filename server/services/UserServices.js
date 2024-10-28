class UserServices {
  constructor(models) {
    this.models = models;
  }
  async getUser(id) {
    try {
      const user = await this.models.users.findById(id);
      console.log(user);
      return user;
    } catch (error) {
      throw new Error("Error fetching User");
    }
  }
}

module.exports = UserServices;
