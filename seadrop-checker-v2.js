// -------------------------------------------------------------------------
// Cosmicjuan.blockchain - SISTEMA DE MONITOREO PRIVADO V2
// "La mente y el magnate" - Registro automático incluido.
// -------------------------------------------------------------------------

const { ethers } = require("ethers");
const fs = require("fs"); // Módulo para guardar archivos

const SEADROP_ADDRESS = "0x00005EA011010604F6946d0a700020c020";
const RPC_URL = "https://mainnet.base.org";

const SEADROP_ABI = [
  "function getMintStats(address minter, address nftContract) view returns (uint256 minterNumMinted, uint256 maxTotalMintableByWallet, uint256 remainingNextAllowedDropTimestamp)"
];

// --- CONFIGURACIÓN ---
const misBilleteras = [
  "0x0000000000000000000000000000000000000000", 
  "0x0000000000000000000000000000000000000001"
];

const contratoNFT = "0x0000000000000000000000000000000000000000";
const TIEMPO_ESPERA = 300000; // 5 minutos

async function ejecutarEscaneo() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(SEADROP_ADDRESS, SEADROP_ABI, provider);
  const ahora = new Date().toLocaleString();

  console.log(`\n[${ahora}] Escaneando...`);

  for (const billetera of misBilleteras) {
    try {
      const stats = await contract.getMintStats(billetera, contratoNFT);
      const minteados = stats.minterNumMinted;
      const limite = stats.maxTotalMintableByWallet;

      if (minteados < limite && limite > 0) {
        process.stdout.write("\x07"); // SONIDO
        const mensaje = `[${ahora}] ELEGIBLE: ${billetera} (${minteados}/${limite})\n`;
        
        console.log(`🚀 ${mensaje}`);
        
        // Guarda el hallazgo en un archivo para que no se pierda
        fs.appendFileSync("oportunidades.txt", mensaje);
      } else {
        console.log(`😴 No elegible: ${billetera.substring(0,6)}...`);
      }
    } catch (error) {
      console.log(`⚠️ Error en red: ${error.message.substring(0,30)}...`);
    }
  }

  console.log(`Esperando 5 minutos para el próximo salto...`);
  setTimeout(ejecutarEscaneo, TIEMPO_ESPERA);
}

console.clear();
console.log("=========================================");
console.log("   COSMICJUAN-CORE: MODO CENTINELA V2    ");
console.log("   Guardando en: oportunidades.txt       ");
console.log("=========================================");
ejecutarEscaneo();
// -------------------------------------------------------------------------
// Cosmicjuan.blockchain - SISTEMA DE MONITOREO PRIVADO V2
// "La mente y el magnate" - Registro automático incluido.
// -------------------------------------------------------------------------

const { ethers } = require("ethers");
const fs = require("fs"); 

const SEADROP_ADDRESS = "0x00005EA011010604F6946d0a700020c020";
const RPC_URL = "https://mainnet.base.org";

const SEADROP_ABI = [
  "function getMintStats(address minter, address nftContract) view returns (uint256 minterNumMinted, uint256 maxTotalMintableByWallet, uint256 remainingNextAllowedDropTimestamp)"
];

// --- CONFIGURACIÓN DE OBJETIVOS ---
const misBilleteras = [
  "0x0000000000000000000000000000000000000000", // <--- Pon tus billeteras aquí
  "0x0000000000000000000000000000000000000001"
];

const contratoNFT = "0x0000000000000000000000000000000000000000"; // <--- El NFT a cazar
const TIEMPO_ESPERA = 300000; // 5 minutos exactos

async function ejecutarEscaneo() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(SEADROP_ADDRESS, SEADROP_ABI, provider);
  const ahora = new Date().toLocaleString();

  console.log(`\n[${ahora}] --- Iniciando Salto Cosmicjuan-Core ---`);

  for (const billetera of misBilleteras) {
    try {
      const stats = await contract.getMintStats(billetera, contratoNFT);
      const minteados = stats.minterNumMinted;
      const limite = stats.maxTotalMintableByWallet;

      if (minteados < limite && limite > 0) {
        process.stdout.write("\x07"); // ALERTA SONORA
        const mensaje = `[${ahora}] ELEGIBLE: ${billetera} (${minteados}/${limite})\n`;
        
        console.log(`🚀 ${mensaje}`);
        
        // Guarda el hallazgo en la base de datos de texto
        fs.appendFileSync("oportunidades.txt", mensaje);
      } else {
        console.log(`😴 Billetera: ${billetera.substring(0,6)}... | Estado: No elegible`);
      }
    } catch (error) {
      console.log(`⚠️ Error de conexión en: ${billetera.substring(0,6)}...`);
    }
  }

  console.log(`\nSistema en espera. Siguiente escaneo en 5 minutos...`);
  setTimeout(ejecutarEscaneo, TIEMPO_ESPERA);
}

// Arranque del sistema
console.clear();
console.log("=========================================");
console.log("   COSMICJUAN-CORE: MODO CENTINELA V2    ");
console.log("   PROYECTO PRIVADO - Tuyo y mío         ");
console.log("=========================================");
ejecutarEscaneo();
// -------------------------------------------------------------------------
// Cosmicjuan.blockchain - SISTEMA DE MONITOREO PRIVADO V2
// "La mente y el magnate" - Registro automático incluido.
// -------------------------------------------------------------------------

const { ethers } = require("ethers");
const fs = require("fs"); 

const SEADROP_ADDRESS = "0x00005EA011010604F6946d0a700020c020";
const RPC_URL = "https://mainnet.base.org";

const SEADROP_ABI = [
  "function getMintStats(address minter, address nftContract) view returns (uint256 minterNumMinted, uint256 maxTotalMintableByWallet, uint256 remainingNextAllowedDropTimestamp)"
];

// --- CONFIGURACIÓN DE OBJETIVOS ---
const misBilleteras = [
  "0x0000000000000000000000000000000000000000", // <--- Tus billeteras aquí
  "0x0000000000000000000000000000000000000001"
];

const contratoNFT = "0x0000000000000000000000000000000000000000"; // <--- NFT objetivo
const TIEMPO_ESPERA = 300000; // 5 minutos exactos

async function ejecutarEscaneo() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(SEADROP_ADDRESS, SEADROP_ABI, provider);
  const ahora = new Date().toLocaleString();

  console.log(`\n[${ahora}] --- Iniciando Salto Cosmicjuan-Core ---`);

  for (const billetera of misBilleteras) {
    try {
      const stats = await contract.getMintStats(billetera, contratoNFT);
      const minteados = stats.minterNumMinted;
      const limite = stats.maxTotalMintableByWallet;

      if (minteados < limite && limite > 0) {
        process.stdout.write("\x07"); // ALERTA SONORA
        const mensaje = `[${ahora}] ELEGIBLE: ${billetera} (${minteados}/${limite})\n`;
        
        console.log(`🚀 ${mensaje}`);
        
        // Guarda el hallazgo en la base de datos de texto
        fs.appendFileSync("oportunidades.txt", mensaje);
      } else {
        console.log(`😴 Billetera: ${billetera.substring(0,6)}... | Estado: No elegible`);
      }
    } catch (error) {
      console.log(`⚠️ Error de conexión en: ${billetera.substring(0,6)}...`);
    }
  }

  console.log(`\nSistema en espera. Siguiente escaneo en 5 minutos...`);
  setTimeout(ejecutarEscaneo, TIEMPO_ESPERA);
}

// Arranque del sistema
console.clear();
console.log("=========================================");
console.log("   COSMICJUAN-CORE: MODO CENTINELA V2    ");
console.log("   PROYECTO PRIVADO - Tuyo y mío         ");
console.log("=========================================");
ejecutarEscaneo();

