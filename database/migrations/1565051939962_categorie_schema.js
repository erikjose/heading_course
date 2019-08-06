"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CategorieSchema extends Schema {
  up() {
    this.create("categories", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table
        .integer("course_id")
        .unsigned()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table.timestamps();
    });
  }

  down() {
    this.drop("categories");
  }
}

module.exports = CategorieSchema;
