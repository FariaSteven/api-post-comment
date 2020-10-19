import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('post_comments', table => {
        table.increments('id').primary();
        
        table.integer('posts_id')
            .notNullable()
            .references('id')
            .inTable('posts');

        table.integer('comments_id')
            .notNullable()
            .references('id')
            .inTable('comment');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('post_comments')
}