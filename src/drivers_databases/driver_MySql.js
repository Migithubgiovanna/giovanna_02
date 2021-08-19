const mysql = require('mysql');
const connection = mysql.createConnection({ 
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'administrador_de_datos'
});
connection.connect((err) => { 
    if (err) throw err;
    console.log('mi_proyecto_giovanna');
});

module.exports = mysql;