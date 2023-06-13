import { Router } from "express";
import getCharById from "../handlers/getCharById";
import postUser from "../handlers/postUser";
import login from "../handlers/login";
import deleteFav from "../handlers/deleteFav";
import postFavorites from "../handlers/postFavorites";
import getFavorites from "../handlers/getFavorites";

const routes = Router();

routes.get("/character/:id", getCharById);

routes.get('/login', login);

routes.post("/login", postUser);
routes.get("/fav", getFavorites);
routes.post("/fav", postFavorites);
routes.delete("/fav/:id", deleteFav);

export default routes;