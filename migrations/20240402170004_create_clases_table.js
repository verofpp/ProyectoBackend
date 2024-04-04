exports.up = function(knex) {
    return knex.schema.createTable('clases', function(table) {
      table.integer('id').primary();
      table.integer('Id_Profesor').nullable();
      table.integer('Id_Materia').nullable();
      table.integer('Id_Seccion').nullable();
      table.string('Horario').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('clases');
  };