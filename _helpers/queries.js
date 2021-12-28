const { query } = require("express");

module.exports = query;

query.createUsers = 'insert into users(first_name,last_name,email,password,contact_number,salt) values(?,?,?,?,?,?)';
query.emailCheck = 'SELECT * from users where email = ? AND isActive = true';
query.updatePassword = 'Update users set password = ? where email = ?';
query.getUserDetails = 'SELECT * from users where id = ? AND isActive = true';