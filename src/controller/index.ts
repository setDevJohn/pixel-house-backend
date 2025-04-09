import { Request, Response } from "express";
import { errorHandler } from "../helpers/errorHanlder";
import { RandomError, HttpStatus } from "../helpers/RandomError";

export class Controller {
  public constructor() {
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.update = this.update.bind(this)
    this.getOrders = this.getOrders.bind(this)
  }

  public register(req: Request, res: Response) {
    try {
      const { name, mail, password, origin } = req.body

      if (!name || !mail || !password || !origin) {
        throw new RandomError()
      }

      const randomNumber = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
      
      return res.status(201).json({userId: randomNumber})
    } catch (err) {
      return errorHandler(err as Error, res)
    }
  }

  public login(req: Request, res: Response) {
    try {
      const { usuarioId } = req.query

      if (!usuarioId) throw new RandomError()
      if (Number(usuarioId) % 5 === 0) throw new RandomError()
      
      return res.status(200).json({message: 'Usuário autenticado'})
    } catch (err) {
      return errorHandler(err as Error, res)
    }
  }

  public update(req: Request, res: Response) {
    try {
      const { usuarioId } = req.query

      if (!usuarioId) throw new RandomError()
      if (Number(usuarioId) % 3 === 0) throw new RandomError()
      
      return res.status(200).json({message: 'Dados atualizado'})
    } catch (err) {
      return errorHandler(err as Error, res)
    }
  }

  public getOrders(req: Request, res: Response) {
    try {
      const { usuarioId } = req.query

      if (!usuarioId) throw new RandomError()
      if (Math.random() <= 0.1) throw new RandomError()
      
      return res.status(200).json({message: 'Dados atualizado'})
    } catch (err) {
      return errorHandler(err as Error, res)
    }
  }
}