const express = require('express');
const app = express();
app.use(express.json());

// Simulación de base de datos para el prototipo inicial
let registros = [];

/**
 * @swagger
 * /api/emociones:
 *   post:
 *     summary: Registrar una nueva emoción
 */
app.post('/api/emociones', (req, res) => {
    const { emocion, nota, fecha } = req.body;
    const nuevoRegistro = { id: Date.now(), emocion, nota, fecha };
    registros.push(nuevoRegistro);
    res.status(201).send(nuevoRegistro);
});

app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
