import { pool } from "../db/postgreSQL.js";

export const getEmpresas = async (req, res) => {

    const { rows } = await pool.query('SELECT * FROM empresas');

    res.json(rows);
}

export const getEmpresa = async (req, res) => {

    const { id } = req.params; 
    
    const { rows } = await pool.query('SELECT * FROM empresas WHERE "idEmpresa" = ($1)',[id]);
        
    res.json(rows);
}

export const postEmpresa = async (req, res) => {
    
    const { empresa } = req.body;

    const { rows } = await pool.query('INSERT INTO empresas (empresa) VALUES ($1)', [empresa]);

    res.json(rows);
}

export const deleteEmpresa = async (req, res) => {

    const { id } = req.params;

    try {
        const { rows } = await pool.query('DELETE FROM empresas WHERE "idEmpresa" = ($1)',  [id])
        res.json(rows);

    } catch (error) {
        console.log(error);
    }
}