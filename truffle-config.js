require("babel-register");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
module.exports = {
    // contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    networks: {
        goerli: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    process.env.PROJECT_ENDPOINT,
                    address_index=0,
                    num_addresses=2
                );
            },
            network_id: 5,
            gas: 4500000,
            gasPrice: 10000000000,
        },
        development: {
            // port: process.env.PROJECT_ENDPOINT.split(":")[2],
            // host: process.env.PROJECT_ENDPOINT.split(":")[1].slice(2),
                port: process.env.LOCAL_ENDPOINT.split(":")[2],
                host: process.env.LOCAL_ENDPOINT.split(":")[1].slice(2),
            
            network_id: "*",
        },
        compilers: {
            solc: {
                version: "^0.4.24",
            },
        },
    },
};
