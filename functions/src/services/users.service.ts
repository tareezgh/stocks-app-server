import { UsersDal } from "../dal/users.dal";
const bcrypt = require("bcrypt");

export class UsersService {
  public async login(user: any) {
    const dal = new UsersDal();
    const hashedPasswordFromDB = await dal.getUserPassword(user);
    if (!hashedPasswordFromDB)
      return { status: "failure", message: "User doesn't exist!!" };
    const response = await bcrypt.compare(user.password, hashedPasswordFromDB);

    if (response)
      return {
        status: "success",
        message: "User logged in",
      };
    else
      return { status: "failure", message: "Incorrect username or password" };
  }

  public async register(user: any) {
    const dal = new UsersDal();
    const saltRounds = 10;
    const isUserExist = await dal.checkUser(user);
    if (isUserExist)
      return { status: "failure", message: "Username already used!" };

    bcrypt.hash(user.password, saltRounds, async (err: any, hash: any) => {
      user["password"] = hash;
      await dal.createUser(user);
    });
    return { status: "success", message: "success!" };
  }

  public async getStocks(user: any) {
    const dal = new UsersDal();
    const userStocks: any = await dal.getUserStocks(user);
    // return { status: "success", message: "success!", data: userStocks };
    return userStocks;
  }

  public async updateStocks(params: any) {
    const dal = new UsersDal();
    const status = await dal.updateUserStocks(params);
    if (status) {
      const userStocks: any = await dal.getUserStocks(params);
      return { status: "success", message: "success!", data: userStocks };
    }
    return null;
  }

  public async getUsers() {
    const dal = new UsersDal();
    const res = await dal.findAll();
    return res;
  }

  public async createUser(user: any) {
    const dal = new UsersDal();
    const res = dal.createUser(user);
    return res;
  }
}
