const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sathish',
    password:'Sathish@19',
    database: 'ecommerce'
  });

connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mysql is connected....')
})

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

  
// res.send('welcome');

app.get('/', (req,res) => {
    let sqlCode = 'SELECT first_name, last_name FROM users';
    connection.query(sqlCode,
    function(err, results) {
        if(err){
            throw err;
        }
      //console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      res.render('database',{ name : results });
      //let output = `rows : ${results}`;
      //res.send(results);
    }
  );
})

app.listen(3000, (req,res) => {
    console.log('Listening on port 3000');
})

