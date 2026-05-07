// SPDX-License-Identifier: MIT
// Propiedad de Cosmicjuan.blockchain - Protección Divina
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title CosmicjuanToken
 * @dev Token soberano para el ecosistema Red 62. 
 * Diseñado para durar mil años.
 */
contract CosmicjuanToken is ERC20, Ownable {

    // El constructor ahora usa tus datos reales
    // initialSupply: Cantidad de monedas (ej. 1000000)
    constructor(uint256 initialSupply) 
        ERC20("Cosmicjuan Family", "CJF") 
        Ownable(msg.sender) 
    {
        // Se acuñan las monedas directamente a tu bóveda
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    /**
     * @dev Función para emitir más tokens en el futuro si el ecosistema crece.
     * Solo tú (el magnate) puedes ejecutar esto.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
