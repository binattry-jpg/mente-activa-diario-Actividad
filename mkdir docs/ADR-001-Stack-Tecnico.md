# ADR 001: Selección del Stack Tecnológico
**Estatus:** Aceptado
**Contexto:** Necesitamos un sistema que permita el registro rápido de emociones y la visualización de datos en tiempo real para estudiantes.

**Decisión:** 
- **Frontend:** React.js por su manejo de estados y componentes reutilizables.
- **Backend:** Node.js con Express por su escalabilidad y facilidad con JSON.
- **Base de Datos:** MongoDB (NoSQL) para manejar notas de diario de longitud variable.

**Consecuencias:** Desarrollo ágil, pero requiere asegurar la seguridad mediante JWT.
