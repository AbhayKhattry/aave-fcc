require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")

const SEPOLIA_RPC_URL=process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY=process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY
const MAINNET_RPC_URL=process.env.MAINNET_RPC_URL

module.exports = {
	solidity:{
		compilers:[{version:"0.8.8"},{version:"0.6.6"},{version:"0.6.12"},{version:"0.4.19"},],
	},
	defaultNetwork:"hardhat",
	networks:{
		hardhat:{
			chainId:31337,
			forking:{
				url:MAINNET_RPC_URL,
			}
		},
		sepolia:{
			url:SEPOLIA_RPC_URL,
			accounts:[PRIVATE_KEY],
			chainId:5,
			blockConfirmations:6,
		},
	},
	namedAccounts:{
		deployer:{
			default:0,
		},	
		user:{
			default:1,
		}
	},
	etherscan:{
		apiKey:ETHERSCAN_API_KEY,
	},
	  gasReporter:{
		enabled: true,
	}
};