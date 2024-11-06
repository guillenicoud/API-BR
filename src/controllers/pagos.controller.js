import { pool } from "../db/postgreSQL.js";

export const getPagos = async (req, res) => {

    try {
        const {rows}  = await pool.query('SELECT pagos."idPago", nombrecliente as "nombreCliente", apellidocliente as "apellidoCliente", empresas."idEmpresa", importe, metododepago as "metodoDePago", fechadepago as "fechaDePago" FROM pagos INNER JOIN empresas ON pagos."idEmpresa" = empresas."idEmpresa" ORDER BY pagos."idPago"')
        console.log(rows);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}

export const postPago = async (req, res) => {

    console.log('POST')
    console.log(req.body);
    const { idEmpresa, nombreCliente, apellidoCliente, importe, metodoDePago, fechaDePago} = req.body;
    try {
        console.log(metodoDePago)
        const { rows } = await pool.query('INSERT INTO pagos (nombrecliente, apellidocliente, importe, "idEmpresa", metododepago, fechadepago) VALUES ($1, $2, $3, $4, $5, $6)',[nombreCliente, apellidoCliente, importe, idEmpresa, metodoDePago, fechaDePago]);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}   
