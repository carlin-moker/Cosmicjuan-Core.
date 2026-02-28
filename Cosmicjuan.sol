// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MiProyectoToken is ERC20 {
    // Define el nombre del token, su símbolo y la cantidad inicial
    constructor(uint256 initialSupply) ERC20("NombreDelToken", "TKN") {
        // Crea las monedas y las envía a tu billetera
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}

