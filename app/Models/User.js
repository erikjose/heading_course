"use strict";

const Model = use("Model");

const Hash = use("Hash");

class User extends Model {
  static get hidden() {
    return ["password", "profile_type", "token", "token_created_at"];
  }

  static boot() {
    super.boot();

    this.addHook("beforeSave", async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  tokens() {
    return this.hasMany("App/Models/Token");
  }
}

module.exports = User;
