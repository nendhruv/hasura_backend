const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.envs = require("./envs.model.js")(mongoose);

db.user = require("./user.model");


module.exports = db;