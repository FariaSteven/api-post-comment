import { Router } from 'express';
import knex from '../database/connection';

const commentsRouter = Router();

commentsRouter.get('/post/:id/comments', async (req, res) => {
    const { id } = req.params;
    const [ comment ] = await knex('comments').select('comment').where({id})

    return res.json({comment})
})

commentsRouter.post('/post/:id/comments', async (req, res) => {
    const comment = req.body
    console.log(comment)
    const { id } = req.params;
    const addComments = await knex('comments').insert(comment).where({ id });
    
    return res.json(addComments);
})

export default commentsRouter;