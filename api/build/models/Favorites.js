"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("./User"));
const FavoritesUser_1 = __importDefault(require("./FavoritesUser"));
let Favorites = class Favorites extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], Favorites.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM("Female", "Male", "unknown", "Genderless"),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "species", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM("Alive", "Dead", "unknown"),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "origin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => User_1.default, () => FavoritesUser_1.default),
    __metadata("design:type", Array)
], Favorites.prototype, "users", void 0);
Favorites = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'favorites',
    }),
    (0, sequelize_typescript_1.Scopes)(() => ({
        users: {
            include: [
                {
                    model: User_1.default,
                    through: { attributes: [] },
                },
            ],
        },
    }))
], Favorites);
exports.default = Favorites;
