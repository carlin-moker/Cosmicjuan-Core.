// ---------------------------------------------------------
// Cosmicjuan.blockchain - Herramienta de Infraestructura Base
// Proyecto: de nosotros, tuyo y mío. 
// ---------------------------------------------------------

const { ethers } = require("ethers");

// Dirección oficial del contrato SeaDrop en la red Base
const SEADROP_ADDRESS = "0x00005EA011010604F6946d0a700020c02010c0bb";

// ABI optimizada para velocidad de consulta
const SEADROP_ABI = [
  "function getMintStats(address minter, address nftContract) view returns (uint256 minterNumMinted, uint256 currentMaxQueueSize, uint256 lastMaxQueueSize, uint256 maxTotalMintableByWallet)"
];

async function verificarElegibilidad(billetera, contratoNFT) {
  // Conexión directa al nodo de Base (Alta Velocidad)
  const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
  const contract = new ethers.Contract(SEADROP_ADDRESS, SEADROP_ABI, provider);

  try {
    const stats = await contract.getMintStats(billetera, contratoNFT);
    
    console.log("--- Reporte Cosmicjuan.blockchain ---");
    console.log(`Billetera: ${billetera}`);
    console.log(`Minteados: ${stats.minterNumMinted.toString()}`);
    console.log(`Límite máximo: ${stats.maxTotalMintableByWallet.toString()}`);
    
    if (stats.minterNumMinted < stats.maxTotalMintableByWallet) {
      console.log("Estado: ELEGIBLE ✅");
    } else {
      console.log("Estado: NO ELEGIBLE ❌");
    }
  } catch (error) {
    console.error("Error en la ruta de datos de Cosmicjuan:", error);
  }
}

// Para usarlo, Cosmicjuan solo necesita la dirección de la wallet y el NFT
// verificarElegibilidad("0x...", "0x...");

