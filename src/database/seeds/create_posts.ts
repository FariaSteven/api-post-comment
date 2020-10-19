import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('posts').insert([
        { name: 'Steven', post: 'sssssssss' },
        { name: 'Julio', post: 'jjjjjjjjjj' },
        { name: 'Julie', post: 'JJJJJJJJJJ' },
        { name: 'Luma', post: 'LLLLLLLLLLL' }
    ]);    
}