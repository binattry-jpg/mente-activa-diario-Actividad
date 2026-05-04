const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de Swagger[cite: 1]
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Mente Activa API', version: '1.0.0' },
  },
  apis: ['./index.js'],
};
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /emociones:
 *   post:
 *     summary: Registrar una emoción diaria
 *     responses:
 *       201:
 *         description: Emoción guardada exitosamente[cite: 1].
 */
app.post('/emociones', (req, res) => {
  const { emocion, nota } = req.body;
  console.log(`Registro recibido: ${emocion} - ${nota}`);
  res.status(201).json({ mensaje: "Registro guardado correctamente" });
});

app.listen(5000, () => console.log('Servidor en puerto 5000'));
