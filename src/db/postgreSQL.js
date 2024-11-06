import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user: 'bd_banco_user',
    password: 'rEpLvq2YKDlz2sTDazSahuTExoZT6Kpl',
    host: 'dpg-cscpfpjv2p9s73flf4g0-a.oregon-postgres.render.com',
    port: 5432,
    database: 'bd_banco',
    ssl: {
        rejectUnauthorized: false, // Acepta certificados SSL no verificados
    },
})