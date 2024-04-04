exports.up = function(knex) {
    return knex.schema.createTable('trimestre', function(table) {
      table.integer('id').primary();
      table.date('Inicio').nullable();
      table.date('Fin').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('trimestre');
  };