import { UserModel } from "../config/data-source";
import IUserDto from "../dto/user/IUserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

import IUser from "../interfaces/IUser";
import { credentialsService } from "./credentialsService";

let users: IUser[] = [];

export const createUserService = async (userData: IUserDto): Promise<User> => {
  const newCredentials: Credential = await credentialsService({
    username: userData.username,
    password: userData.password,
  });
  console.log("💙 newCredentials:", newCredentials);

  const newUser: User = await UserModel.create(userData);
  await UserModel.save(newUser);
  console.log("🧡 newUser:", newUser);

  newUser.credentials = newCredentials;
  await UserModel.save(newUser);
  console.log("❤ newUser:", newUser);

  return newUser;
};

export const getUsersService = async (): Promise<User[]> => {
  const users: User[] = await UserModel.find();
  return users;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  const user: User | null = await UserModel.findOne({
    where: { id },
    relations: ["appointment"],
  });
  if (user) {
    return user;
  } else {
    throw new Error("No se encontró el usuario");
  }
};
