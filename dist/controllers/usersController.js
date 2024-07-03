"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.deleteUser = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
// GET /users => Obtener el listado de todos los usuarios.
//
// GET /users/:id => Obtener el detalle de un usuario específico.
//
// POST /users/register => Registro de un nuevo usuario.
//
// POST /users/login => Login del usuario a la aplicación.
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, active } = req.body;
    const newUser = yield (0, userService_1.createUserService)({ name, email, active });
    res.status(201).json(newUser);
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getUsersService)();
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    yield (0, userService_1.deleteUserService)(id);
    res.status(200).json({ message: "usuario eliminado correctamente" });
});
exports.deleteUser = deleteUser;
// GET /users/:id => Obtener el detalle de un usuario específico.
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const user = yield (0, userService_1.getUserService)(id);
    res.status(200).json(user);
});
exports.getUserById = getUserById;
// POST /users/login => Login del usuario a la aplicación.
// export const loginUser = async (req: Request, res: Response) => {
//   const { id } = req.body;
//   await
// };
