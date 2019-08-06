"use strict";

const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table
        .string("email", 255)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table.string("profile_type").notNullable();
      table.string("token");
      table.string("token_created_at");
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
