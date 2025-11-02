// SPDX-License-Identifier: MIT
// Licencia del código: MIT (permite uso libre con atribución)
pragma solidity >=0.8.0 <0.9.0;

// Útil para depuración. Eliminar al desplegar en una red en vivo.
import "hardhat/console.sol";

// Usa OpenZeppelin para heredar implementaciones probadas (ERC20, ERC721, etc.)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * Un contrato inteligente que permite cambiar una variable de estado del contrato y rastrear los cambios.
 * También permite al propietario retirar el Ether del contrato.
 * @author BuidlGuidl
 */
contract MamayaToken {
    // Variables de estado
    address public immutable owner; // Dirección del dueño (no cambia nunca)
    string public greeting = "Hola MamayaTech"; // Mensaje inicial
    bool public premium = false; // Indica si el último cambio fue "premium" (con pago)
    uint256 public totalCounter = 0; // Contador total de cambios
    mapping(address => uint) public userGreetingCounter; // Contador por usuario

    // Eventos: forma de emitir logs que pueden ser escuchados externamente
    event GreetingChange(
        address indexed greetingSetter, 
        string newGreeting, 
        bool premium, 
        uint256 value
    );

    // Constructor: se ejecuta una sola vez al desplegar el contrato
    // Ver: packages/hardhat/deploy/00_deploy_your_contract.ts
    constructor(address _owner) {
        owner = _owner;
    }

    // Modificador: define reglas que deben cumplirse antes de ejecutar una función
    // Ver la función withdraw()
    modifier isOwner() {
        // msg.sender: variable global que representa la dirección que llamó la función
        require(msg.sender == owner, "No eres el propietario");
        _; // Continúa con la ejecución de la función
    }

    /**
     * Función que permite a cualquiera cambiar la variable de estado "greeting" del contrato
     * e incrementar los contadores.
     *
     * @param _newGreeting (string memory) - nuevo saludo a guardar en el contrato
     */
    function setGreeting(string memory _newGreeting) public payable {
        // Imprime datos en la consola de Hardhat. Eliminar al desplegar en red real.
        console.log("Estableciendo nuevo saludo '%s' desde %s", _newGreeting, msg.sender);

        // Cambia las variables de estado
        greeting = _newGreeting;
        totalCounter += 1;
        userGreetingCounter[msg.sender] += 1;

        // msg.value: variable global que representa la cantidad de ETH enviada con la transacción
        if (msg.value > 0) {
            premium = true;
        } else {
            premium = false;
        }

        // emit: palabra clave para disparar un evento
        emit GreetingChange(msg.sender, _newGreeting, msg.value > 0, msg.value);
    }

    /**
     * Función que permite al propietario retirar todo el Ether del contrato.
     * Solo puede ser llamada por el propietario (definido por el modificador isOwner).
     */
    function withdraw() public isOwner {
        (bool success, ) = owner.call{ value: address(this).balance }("");
        require(success, "Fallo el envio de Ether");
    }

    /**
     * Función que permite al contrato recibir ETH directamente (sin llamar a una función específica).
     */
    receive() external payable {}
}