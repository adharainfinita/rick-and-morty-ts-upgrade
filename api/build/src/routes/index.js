"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getCharById_1 = __importDefault(require("../handlers/getCharById"));
const postUser_1 = __importDefault(require("../handlers/postUser"));
const login_1 = __importDefault(require("../handlers/login"));
const deleteFav_1 = __importDefault(require("../handlers/deleteFav"));
const routes = (0, express_1.Router)();
routes.get("/character/:id", getCharById_1.default);
routes.get('/login', login_1.default);
routes.post("/login", postUser_1.default);
routes.delete("/fav/:id", deleteFav_1.default);
exports.default = routes;
