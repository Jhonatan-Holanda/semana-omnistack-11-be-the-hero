exports.up = function(knex) {
  return knex.schema.createTable('incidents',function(table){
    //Primary key, com autoincrement
    table.increments();
    //Campos da tabela
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    //Relacionamento
    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
