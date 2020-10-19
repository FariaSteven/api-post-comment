import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('comments', table => {
        table.increments('id').primary();
        table.string('comment').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('comments')
}