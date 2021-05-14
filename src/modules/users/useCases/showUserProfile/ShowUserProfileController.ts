import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.body
      const user = this.showUserProfileUseCase.execute(id)
      return response.send()
    } catch (error) {
      return response.status(404).send()
    }
  }
}

export { ShowUserProfileController };
