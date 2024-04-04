exports.up = function(knex) {
    return knex.schema.createTable('eventos', function(table) {
      table.integer('id').primary();
      table.string('Tipo').nullable();
      table.string('Motivo').nullable();
      table.date('Fecha').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('eventos');
  };