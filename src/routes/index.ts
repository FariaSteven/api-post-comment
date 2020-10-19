import { Router } from 'express';
import commentsRouter from './comments.routes';
import postsRouter from './posts.routes'

const routes = Router();

routes.use('/', postsRouter);
routes.use('/', commentsRouter);
// routes.use('/', postsRouter)
// routes.use('/', postsRouter)


export default routes;