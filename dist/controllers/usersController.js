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
exports.loginUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const credentialsService_1 = require("../services/credentialsService");
const data_source_1 = require("../config/data-source");
// POST /users/register => Registro de un nuevo usuario.
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser = yield (0, userService_1.createUserService)({
            name,
            email,
            birthdate,
            nDni,
            username,
            password,
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res
            .status(400)
            .json({ error: error.message || "Los datos son incorrectos" });
    }
});
exports.createUser = createUser;
// GET /users => Obtener el listado de todos los usuarios.
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("<<<<<<<<<<<<<<<<<<< getUsers >>>>>>>>>>>>>>>>>");
        const users = yield (0, userService_1.getUsersService)();
        console.log("💚 users:", users);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getUsers = getUsers;
// GET /users/:id => Obtener el detalle de un usuario específico.
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserByIdService)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ message: error.message + "Usuario no encontrado" });
    }
});
exports.getUserById = getUserById;
// POST /users/login => Login del usuario a la aplicación.
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const credencial = (0, credentialsService_1.validateCredentialService)({ username, password });
        const user = yield data_source_1.UserModel.findOneBy({
            credentials: {
                id: (yield credencial).id,
            },
        });
        res.status(200).json({
            login: true,
            user,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
