import { Router } from "express";
import itemsRouter from "./items.routes";
import locationsRouter from "./locations.routes";
import usersRouter from "./user.routes";
import serrionsRouter from "./sessions.routes";
const routes = Router();

routes.use("/items", itemsRouter);
routes.use("/locations", locationsRouter);
routes.use("/users", usersRouter);
routes.use("/sessions", serrionsRouter);

export default routes;
