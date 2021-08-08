var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE submission (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text, 
            phone text, 
            description text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO submission (name, email, phone, description) VALUES (?,?,?,?)';
                db.run(insert, ["testSubmission","admin@example.com","123456", "blablaba"]);
            }
        });  
    }
});


module.exports = db