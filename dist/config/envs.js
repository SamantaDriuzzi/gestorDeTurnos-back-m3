"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTGRES = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.POSTGRES = process.env.POSTGRES;
