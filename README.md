const ethers = require("ethers");
require("dotenv").config();

async function checkNetwork() {
    try {
        // Conexión usando las llaves del archivo .env que acabas de arreglar
        const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

        console.log("Conexión Exitosa a Cosmicjuan.blockchain");
        console.log("Magnate Operando:", wallet.address);
        
        const balance = await provider.getBalance(wallet.address);
        console.log("Saldo en la Red:", ethers.utils.formatEther(balance), "CJN");

    } catch (error) {
        console.error("Error de Conexión: Revisa si el nodo está encendido.");
    }
}

checkNetwork();

