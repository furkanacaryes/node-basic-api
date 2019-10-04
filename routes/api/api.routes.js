
import { Router } from 'express';
import {
  getHandler,
  postHandler,
  deleteHandler,
  putHandler
} from './api.controller';


const api = Router();

api.route('/:id?')
  .get(getHandler)
  .post(postHandler)
  .delete(deleteHandler)
  .put(putHandler)


export default api;
