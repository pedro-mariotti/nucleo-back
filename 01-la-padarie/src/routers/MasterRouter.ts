import { Router } from 'express'

import controller1Router from './controller1/controller1Router'

class MasterRouter {
  private _router = Router()

  private _subrouterA = controller1Router

  get router() {
    return this._router
  }

  constructor() {
    this._configure()
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/controller1', this._subrouterA)
  }
}

export = new MasterRouter().router
