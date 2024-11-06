import express from 'express';
import empresasRouter from './routes/empresas.routes.js';
import pagosRouter from './routes/pagos.routes.js';
import cors from 'cors';

const app = express();

const PORT = 3000;

// Middleware para analizar cuerpos JSON
app.use(express.json());
app.use(cors());


// RUTAS

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación!');
});

app.use('/api/', empresasRouter);
app.use('/api/', pagosRouter);

app.listen(PORT, () => {
    console.log(`API escuchando en el puerto http://localhost:${PORT}`)
})
