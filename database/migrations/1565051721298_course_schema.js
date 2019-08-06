"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CourseSchema extends Schema {
  up() {
    this.create("courses", table => {
      table.increments();
      table.string("name", 255).notNullable();
      table.text("description").notNullable();
      table.text("requirements");
      table.string("photo");
      table.integer("work_load");
      table.timestamps();
    });
  }

  down() {
    this.drop("courses");
  }
}

module.exports = CourseSchema;
