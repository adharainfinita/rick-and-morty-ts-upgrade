"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.get("/hola", (_req, res) => {
    try {
        res.send("Estoy funcionando AAAA");
        console.log("puta");
    }
    catch (error) {
        res.send(error.message);
    }
});
exports.default = routes;
