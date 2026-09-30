const express = require('express');
const gameRoutes = require('./routes/game.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Servidor RPG activo y saludable",
    uptime: process.uptime()
  });
});
app.use('/basico/ejercicio-01', gameRoutes);

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: "Ruta no encontrada en el mundo del RPG"
  });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` RPG Server corriendo en puerto ${PORT} `);
  console.log(` Node Runtime Version: ${process.version} `);
  console.log(`=========================================`);
});