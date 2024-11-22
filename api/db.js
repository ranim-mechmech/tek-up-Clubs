import mysql from "mysql"
export const db=mysql.createConnection({
   host:"localhost" ,
   user:'root',
   password:'Ranim2023!',
   database:"blog"
})