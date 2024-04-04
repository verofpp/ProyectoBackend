exports.up = function(knex) {
    return knex.schema.createTable('actividades', function(table) {
      table.integer('id').primary();
      table.string('Actividad').nullable();
      table.integer('Materia').nullable();
      table.integer('Semana').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('actividades');
  }