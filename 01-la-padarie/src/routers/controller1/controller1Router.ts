import { NextFunction, Request, Response, Router } from 'express'

import Controller1 from '../../user/controller/controller1'

class Controller1Router {
  private _router = Router()

  private _controller = Controller1

  get router() {
    return this._router
  }

  constructor() {
    this._configure()
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod())
    })
  }
}

export = new Controller1Router().router
