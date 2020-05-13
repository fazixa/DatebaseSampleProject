var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'password',
  database        : 'musicservice'
});

let musicservicedb = {}

musicservicedb.getAllMusics = () => {

    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM music', (error, results) => {
            if (error) {
                return reject(error)
            }
            return resolve(results)
        })
    })
}

musicservicedb.getMusicByID = (id) => {

    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM music WHERE id=?' , [id], (error, results) => {
            if (error) {
                return reject(error)
            }
            return resolve(results)
        })
    })
}


musicservicedb.addArtist = (body) => {

    return new Promise((resolve, reject) =>{
        pool.query('INSERT INTO artist(username,name) VALUES (?,?)' , [body.username, body.name], (error, results) => {
            if (error) {
                return reject(error)
            }
            return resolve(results)
        })
    })
}




module.exports = musicservicedb