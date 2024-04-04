exports.up = function(knex) {
    return knex.schema.createTable('actividades_seccion', function(table) {
      table.integer('id').primary();
      table.integer('Id_Actividad').nullable();
      table.integer('Id_Clase').nullable();
      table.integer('Trimestre').nullable();
      table.date('Fecha').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('actividades_seccion');
  };