import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.body
      const all = this.listAllUsersUseCase.execute(id)
      return response.send(all)
    } catch (error) {
      return response.status(400).json({error: error.message})
    }

  }
}

export { ListAllUsersController };
