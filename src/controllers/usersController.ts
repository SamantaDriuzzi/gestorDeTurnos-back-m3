import { Request, Response } from "express";

import {
  createUserService,
  getUsersService,
  getUserByIdService,
} from "../services/userService";
import IUserDto from "../dto/user/IUserDto";
import { User } from "../entities/User";
import {
  credentialsService,
  validateCredentialService,
} from "../services/credentialsService";
import { UserModel } from "../config/data-source";

// POST /users/register => Registro de un nuevo usuario.
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password }: IUserDto =
      req.body;

    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res
      .status(400)
      .json({ error: error.message || "Los datos son incorrectos" });
  }
};

// GET /users => Obtener el listado de todos los usuarios.
export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log("<<<<<<<<<<<<<<<<<<< getUsers >>>>>>>>>>>>>>>>>");
    const users: User[] = await getUsersService();
    console.log("💚 users:", users);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: User | null = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message + "Usuario no encontrado" });
  }
};

// POST /users/login => Login del usuario a la aplicación.
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const credencial = validateCredentialService({ username, password });

    const user = await UserModel.findOneBy({
      credentials: {
        id: (await credencial).id,
      },
    });
    res.status(200).json({
      login: true,
      user,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
