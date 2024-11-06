import { pool } from "../db/postgreSQL.js";

export const getEmpresas = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM empresas');
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}

export const getEmpresa = async (req, res) => {
    try {
        const { id } = req.params; 
        const { rows } = await pool.query('SELECT * FROM empresas WHERE "idEmpresa" = ($1)',[id]);
        res.json(rows);    
    } catch (error) {
        console.log(error);
    }    
}

export const postEmpresa = async (req, res) => {
    try {
        const { empresa } = req.body;
        const { rows } = await pool.query('INSERT INTO empresas (empresa) VALUES ($1)', [empresa]);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}

export const deleteEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query('DELETE FROM empresas WHERE "idEmpresa" = ($1)',  [id])
        res.json(rows);

    } catch (error) {
        console.log(error);
    }
}