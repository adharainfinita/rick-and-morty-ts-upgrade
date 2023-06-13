
import dotenv from 'dotenv';
import { Sequelize } from "sequelize-typescript";
import User from './models/User';
import Favorites from './models/Favorites';
import FavoritesUsers from "./models/FavoritesUser"

dotenv.config();

const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, PORT} = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST || !PORT) {
  throw new Error("Falta alguna variable de entorno requerida");
}


const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
      host: DB_HOST,
      port: Number(PORT),
      dialect: "postgres",
      models: [User,Favorites, FavoritesUsers]
    }
  );


export default sequelize;