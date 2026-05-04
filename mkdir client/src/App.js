import React, { useState } from 'react';

function App() {
  const [emocion, setEmocion] = useState('Feliz');
  const [nota, setNota] = useState('');

  const enviarRegistro = async () => {
    const respuesta = await fetch('http://localhost:5000/emociones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emocion, nota })
    });
    if (respuesta.ok) alert('¡Emoción registrada con éxito!');
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Mente Activa: Diario Emocional</h1>
      <label>¿Cómo te sientes hoy?</label><br/>
      <select value={emocion} onChange={(e) => setEmocion(e.target.value)}>
        <option>Feliz</option>
        <option>Estresado</option>
        <option>Triste</option>
      </select>
      <br/><br/>
      <textarea 
        placeholder="Añade una nota sobre tu día..." 
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      /><br/>
      <button onClick={enviarRegistro}>Guardar Registro</button>
    </div>
  );
}

export default App;
