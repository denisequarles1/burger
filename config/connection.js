// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
<<<<<<< HEAD
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cricket83d!',
  database: 'burgers_db'
});
=======
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'Cricket83d!',
    database: 'burgers_db'
  });
>>>>>>> 66e5bdda911703ee6f5f8c60694143358c3666ac
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

<<<<<<< HEAD
// Export connection for our ORM to use.
module.exports = connection;
=======
module.exports = connection;
>>>>>>> 66e5bdda911703ee6f5f8c60694143358c3666ac
