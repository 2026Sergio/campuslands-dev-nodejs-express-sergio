const gameService = require('../services/game.service');

const getStatus = (req, res) => {
  try {
    const result = gameService.getGameRuntimeStatus();
    
    console.log(`[RPG_SERVER] Peticion recibida exitosamente desde IP: ${req.ip}`);
    
    return res.status(200).json(result);
  } catch (error) {
    console.error("[RPG_ERROR] Fallo al obtener el estado del runtime:", error.message);
    return res.status(500).json({
      ok: false,
      message: "Error interno en el servidor del RPG"
    });
  }
};

module.exports = {
  getStatus
};