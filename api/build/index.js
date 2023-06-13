"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const DB_conection_1 = __importDefault(require("./src/DB_conection"));
const PORT = 3001;
DB_conection_1.default.sync({ force: false }).then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server raised on port ${PORT}♥`);
    });
}).catch((error) => {
    console.log(error.message);
});
