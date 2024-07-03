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
exports.validateCredentialService = exports.credentialsService = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
let credentials = [];
let credentialsId = 1;
const credentialsService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = new Credential_1.Credential();
    newCredential.password = params.password;
    newCredential.username = params.username;
    data_source_1.AppDataSource.manager.save(newCredential);
    return newCredential;
});
exports.credentialsService = credentialsService;
const validateCredentialService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = params;
    const credentail = yield data_source_1.CredentialModel.findOneBy({
        username,
    });
    if (!credentail) {
        throw Error("Credenciales incorrectas");
    }
    if (credentail.password !== password) {
        throw Error("Credenciales incorrectas");
    }
    return credentail;
});
exports.validateCredentialService = validateCredentialService;
