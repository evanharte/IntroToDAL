const dal = require("./pdb");

// get all actors.
var getAllFilmsForAllActors = function () {
  if (DEBUG) console.log("films.dal.getFilms()");
  return new Promise(function (resolve, reject) {
    // using views in postgresql to simplify the query
    const sql = "SELECT * FROM actor_films WHERE last_name = 'Chase';";

    dal.query(sql, [], function (err, result) {
      if (err) {
        // logging should be done here
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        if (DEBUG)
          console.log("inside the film.dal.getAllFilmsForAllActors() success");
        if (DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
};

var getFilmByID = function () {
  if (DEBUG) console.log("films.dal.getFilmByID()");
};

var addFilm = function () {
  if (DEBUG) console.log("films.dal.addFilm()");
};

module.exports = { getAllFilmsForAllActors };
