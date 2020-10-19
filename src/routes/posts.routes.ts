import { Router } from 'express';
import knex from '../database/connection';

const postsRouter = Router();

postsRouter.get('/posts', async (req, res) => {
    // const { id } = req.params;
    const  post  = await knex('posts').select('id', 'post')
    // const posts = await knex('posts').select('post');
    return res.json(post)
});

postsRouter.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const [ post ] = await knex('posts').where({id})

    return res.json(post)
})

postsRouter.post('/posts', async (req, res) => {
    const { name, post} = req.body;
    const posts = { name, post};

    const newIds = await knex('posts').insert(posts);
    const postId = newIds[0];

    return res.json({
        post
    });
})

export default postsRouter;