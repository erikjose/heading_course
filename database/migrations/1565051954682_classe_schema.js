"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClasseSchema extends Schema {
  up() {
    this.create("classes", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table.integer("duration").notNullable();
      table.string("video").notNullable();
      table
        .integer("course_id")
        .unsigned()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("classes");
  }
}

module.exports = ClasseSchema;
