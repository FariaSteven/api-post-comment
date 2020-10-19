import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('comments').insert([
        { comment: "Hoje o dia foi muito bom 234234"},
        { comment: "Hoje o dia foi muito bom 234234"},
        { comment: "Hoje o dia foi muito bom 234234"},
        { comment: "Hoje o dia foi muito bom 234234"}
    ]);    
}