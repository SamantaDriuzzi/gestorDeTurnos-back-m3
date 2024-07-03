"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = require("../controllers/usersController");
const usersRouter = express_1.default.Router();
// GET /users => Obtener el listado de todos los usuarios.
//
// GET /users/:id => Obtener el detalle de un usuario específico.
//
// POST /users/register => Registro de un nuevo usuario.
//
// POST /users/login => Login del usuario a la aplicación.
usersRouter.get("/users/details/:id", usersController_1.getUserById);
usersRouter.get("/users", usersController_1.getUsers);
usersRouter.post("/users/register", usersController_1.createUser);
usersRouter.post("/users/login");
exports.default = usersRouter;
