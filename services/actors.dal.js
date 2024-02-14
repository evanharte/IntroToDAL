const dal = require("./pdb");

// get all actors.
var getActors = function () {
  if (DEBUG) console.log("actors.dal.getActors()");
  return new Promise(function (resolve, reject) {
    const sql =
      "SELECT actor_id, first_name, last_name FROM actor  ORDER BY actor_id DESC LIMIT 7;";

    dal.query(sql, function (err, result) {
      if (err) {
        // logging should be done here
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        if (DEBUG) console.log("inside the actors.dal.getActors() success");
        if (DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
};

var getActorById = function (theId) {
  if (DEBUG) console.log("actors.dal.getActorById()");
  if (DEBUG) console.log(`the actors id is ${theId}`);

  return new Promise(function (resolve, reject) {
    const sql =
      "SELECT actor_id, first_name, last_name FROM actor \
      WHERE actor_id = $1";

    dal.query(sql, [theId], function (err, result) {
      if (err) {
        // logging should be done here
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        if (DEBUG) console.log("inside the actors.dal.getActorById() success");
        if (DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
};

module.exports = { getActors, getActorById };
