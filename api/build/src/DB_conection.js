"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("./models/User"));
const Favorites_1 = __importDefault(require("./models/Favorites"));
const FavoritesUser_1 = __importDefault(require("./models/FavoritesUser"));
dotenv_1.default.config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, PORT } = process.env;
if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST || !PORT) {
    throw new Error("Falta alguna variable de entorno requerida");
}
const sequelize = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: Number(PORT),
    dialect: "postgres",
    models: [User_1.default, Favorites_1.default, FavoritesUser_1.default]
});
exports.default = sequelize;
