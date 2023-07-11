import { Router } from "express";
import { compare } from "bcryptjs";
import knex from "../database/connection";

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const user = await knex("users").where("email", email).first();

  if (!user) {
    return response.status(400).json({ message: "Credentials not found." });
  }

  const comparePassword = compare(password, user.password);

  if (!comparePassword) {
    return response.status(400).json({ message: "Credentials not found." });
  }

  return response.json(user)
});

export default sessionsRouter;
