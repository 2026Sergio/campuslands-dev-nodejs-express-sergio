const gameInfo = {
  engine: "Node.js Runtime",
  version: process.version,
  platform: process.platform,
  activeSession: {
    hero: "Paladin de Acero",
    level: 12,
    health: 150,
    currentZone: "Mazmorra de los Susurros"
  }
};

const getGameRuntimeStatus = () => {
  return {
    ok: true,
    message: "Motor del RPG ejecutado correctamente en el runtime",
    topic: "Node runtime y consola",
    data: gameInfo
  };
};

module.exports = {
  getGameRuntimeStatus
};