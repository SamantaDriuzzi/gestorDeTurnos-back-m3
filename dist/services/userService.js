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
exports.getUserByIdService = exports.getUsersService = exports.createUserService = void 0;
const data_source_1 = require("../config/data-source");
const credentialsService_1 = require("./credentialsService");
let users = [];
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredentials = yield (0, credentialsService_1.credentialsService)({
        username: userData.username,
        password: userData.password,
    });
    console.log("💙 newCredentials:", newCredentials);
    const newUser = yield data_source_1.UserModel.create(userData);
    yield data_source_1.UserModel.save(newUser);
    console.log("🧡 newUser:", newUser);
    newUser.credentials = newCredentials;
    yield data_source_1.UserModel.save(newUser);
    console.log("❤ newUser:", newUser);
    return newUser;
});
exports.createUserService = createUserService;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find();
    return users;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOne({
        where: { id },
        relations: ["appointment"],
    });
    if (user) {
        return user;
    }
    else {
        throw new Error("No se encontró el usuario");
    }
});
exports.getUserByIdService = getUserByIdService;
