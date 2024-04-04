exports.up = function(knex) {
  return knex.schema.hasTable('auth2').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('auth2', function(table) {
        table.integer('id').primary();
        table.string('usuario').notNullable();
        table.string('password').notNullable();
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('auth2');
};