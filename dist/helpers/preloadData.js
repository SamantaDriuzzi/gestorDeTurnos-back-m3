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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preLoadData = void 0;
const data_source_1 = require("../config/data-source");
const preloadUsers = [
    {
        id: 1,
        name: "samanta",
        email: "samanta@gmail.com",
        birthdate: "1/9/1998",
        nDni: "192837465",
    },
    {
        id: 2,
        name: "samanta2",
        email: "samanta2@gmail.com",
        birthdate: "1/9/1997",
        nDni: "1846538",
    },
];
const preLoadAppointmens = [
    {
        id: 1,
        date: "10/05/24",
        time: "12hs",
        userId: 1,
    },
    {
        id: 2,
        date: "12/12/2024",
        time: "10hs",
        userId: 2,
    },
];
const appointment1 = {
    id: 1,
    date: "22/2/2024",
    time: "15hs",
};
const appoitnment2 = {
    id: 2,
    date: "24/1/2024",
    time: "16hs",
};
const preLoadData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const usersDB = yield data_source_1.UserModel.find();
        if (usersDB.length)
            return console.log("Ya existen usuarios en la base de datos");
        try {
            for (var _d = true, preloadUsers_1 = __asyncValues(preloadUsers), preloadUsers_1_1; preloadUsers_1_1 = yield preloadUsers_1.next(), _a = preloadUsers_1_1.done, !_a; _d = true) {
                _c = preloadUsers_1_1.value;
                _d = false;
                const user = _c;
                const newUser = yield data_source_1.UserModel.create(user);
                yield transactionalEntityManager.save(newUser);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadUsers_1.return)) yield _b.call(preloadUsers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log("Precarga de datos realizada");
    }));
});
exports.preLoadData = preLoadData;
