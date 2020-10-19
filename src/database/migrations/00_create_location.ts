import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('post').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('posts')
}