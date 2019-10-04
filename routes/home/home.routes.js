import { Router } from 'express';
import { getHandler, postHandler } from './home.controller';


const home = Router();

home.route('/')
  .get(getHandler)
  .post(postHandler)

export default home;
