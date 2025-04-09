// Função para retornar o erro para o cliente
import { Response } from "express";
import { RandomError, HttpStatus } from "./RandomError";

export function errorHandler(err: Error, res: Response) {
  if (err instanceof RandomError) {
    return res.status(err.statusCode).json({ message: err.message })
  } 

  console.error(err);
  return res.status(500).json({ message: HttpStatus[500] });
}