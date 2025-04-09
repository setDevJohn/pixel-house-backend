import { Request, Response, Router } from "express";
import { Controller } from "../controller";

const controller = new Controller();

const routes = Router()

routes.post('/cadastro', controller.register)
routes.get('/login', controller.login)
routes.put('/alteracoes', controller.update)
routes.get('/pedidos', controller.getOrders)

export {routes}