
exports.up = function(knex,promise) {
  return knex.schema.creeteTable('users', table => {
        table.incremets('id').primary();
        table.string('nome', 80).notnullable();
        table.string("email",80).notnullable();
        table.string("password",80).notnullable();
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable('users');
};
