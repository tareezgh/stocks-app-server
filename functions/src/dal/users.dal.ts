import Users from "../db/models/users";

export class UsersDal {
  public async createUser(user: any) {
    try {
      const newUser = new Users({
        username: user.username,
        password: user.password,
      });
      const savedUser = await newUser.save();
      return savedUser;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public async getUserPassword(user: any) {
    const data = await Users.findOne({
      username: user.username,
    });

    return data?.password;
  }

  public async getUserStocks(user: any) {
    const data = await Users.findOne({
      username: user.username,
    });

    return data?.stocks;
  }

  public async updateUserStocks(user: any) {
    const data = await Users.findOneAndUpdate(
      { username: user.username },
      { $push: { stocks: user.stockToAdd } },
      { new: true }
    );
    return data;
  }

  public async checkUser(user: any) {
    const data = await Users.findOne({
      username: user.username,
    });
    return data?.username === user.username;
  }

  public findAll(query: any = null) {
    return Users.find(query);
  }
}
