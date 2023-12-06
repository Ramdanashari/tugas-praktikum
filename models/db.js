const mysql =require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mahasiswa'
});

connection.connect((err)=>{
    if(err) {
        console.error('error conncecting to Mysql database :',err)
    } else {
        console.log('connected to Mysql database');
    }
});

module.exports = connection