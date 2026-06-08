const request = require('supertest');
const app = require('../app'); // Tu archivo principal de express

describe('Pruebas de Integración - Registro de Emoción', () => {
  it('Debe registrar una nueva emoción correctamente (Status 200)', async () => {
    const res = await request(app)
      .post('/api/emociones')
      .set('Authorization', `Bearer token_de_prueba`)
      .send({
        tipo_emocion: 'Feliz',
        nota: 'Hoy tuve un excelente día en la universidad'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id_emocion');
  });
});
