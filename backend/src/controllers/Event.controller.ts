import * as express from 'express';
import IController from "../config/IController";

class EventController implements IController {

  path = '/events';
  router = express.Router();

  constructor() {
    this.initializeRoutes();
  }
 
  initializeRoutes() {
    this.router.get(this.path, this.getSignedUpUsers);
    this.router.post(this.path, this.signUp);
  }

  async getSignedUpUsers(request: express.Request, response: express.Response, next: express.NextFunction) {
    response.json({user: 'XD'});
  }

  async signUp(req, res, next) {
    return 'zapisani'
  }

}

export default EventController;