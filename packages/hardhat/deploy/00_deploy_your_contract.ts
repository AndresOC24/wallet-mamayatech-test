import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Despliega un contrato llamado "MamayaToken" usando la cuenta del deployer y
 * argumentos del constructor establecidos a la direccion del deployer
 *
 * @param hre Objeto HardhatRuntimeEnvironment.
 */
const deployMamayaToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    En localhost, la cuenta del deployer es la que viene con Hardhat, y ya tiene fondos.

    Al desplegar en redes reales (por ejemplo, yarn deploy --network sepolia), la cuenta del deployer
    debe tener saldo suficiente para pagar las comisiones de gas por la creacion del contrato.

    Puedes generar una cuenta aleatoria con yarn generate o yarn account:import para importar tu
    clave privada existente, lo que llenara DEPLOYER_PRIVATE_KEY_ENCRYPTED en el archivo .env (luego usado en hardhat.config.ts)
    Puedes ejecutar el comando yarn account para verificar tu saldo en cada red.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MamayaToken", {
    from: deployer,
    // Argumentos del constructor del contrato
    args: [deployer],
    log: true,
    // autoMine: se puede pasar a la funcion deploy para acelerar el proceso de despliegue en redes locales
    // minando automaticamente la transaccion de despliegue del contrato. No tiene efecto en redes reales.
    autoMine: true,
  });

  // Obtiene el contrato desplegado para interactuar con el despues del despliegue.
  const MamayaToken = await hre.ethers.getContract<Contract>("MamayaToken", deployer);
  console.log("Inicial saludo:", await MamayaToken.greeting());
};

export default deployMamayaToken;

// Las etiquetas son utiles si tienes varios archivos de despliegue y solo quieres ejecutar uno.
// por ejemplo: yarn deploy --tags YourContract
deployMamayaToken.tags = ["MamayaToken"];
