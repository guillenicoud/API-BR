import mysql from "mysql2/promise";

export const con = await mysql.createConnection({
    host: "mysql5045.site4now.net",
    user: "a44a50_banco",
    password: "Password1!", // Asegúrate de poner la contraseña si es necesaria
    database: "db_a44a50_banco",
});
  


