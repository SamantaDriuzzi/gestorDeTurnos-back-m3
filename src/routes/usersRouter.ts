import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
  loginUser,
} from "../controllers/usersController";

const usersRouter = express.Router();
// GET /users => Obtener el listado de todos los usuarios.
//
// GET /users/:id => Obtener el detalle de un usuario específico.
//
// POST /users/register => Registro de un nuevo usuario.
//
// POST /users/login => Login del usuario a la aplicación.

usersRouter.get("/details/:id", getUserById);

usersRouter.get("/list", getUsers);

usersRouter.post("/register", createUser);

usersRouter.post("/login", loginUser);

export default usersRouter;
