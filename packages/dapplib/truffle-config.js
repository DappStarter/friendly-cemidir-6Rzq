require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain hole hope enroll bottom tonight'; 
let testAccounts = [
"0x2d589f34876d474d4d64d7e64c85e7d68f9e4664aac63c3f2578e66b0e0a2e18",
"0xbc71ba7a998d9337bd5a78641c9ae5849d5f2d2c60907e5c03416d7f2fc368d0",
"0xaa722f385f99108fdaa8d2f163119bf5f0427191b58fc44b73bec32fe908a39f",
"0x5bc293aacaf6a11f3890ef240562244846ecdad2e83a2168504e3e27778b75c3",
"0x3d4a519d4cdb4a00961d95d211e588fd279aa799452e332d34bcf1729e1c0706",
"0x2164c74a9797fd75d1f4504fe7f86644218600be2cb12a5b4a3af86e2824edf7",
"0x169d36b9500506d4372013bf90c61dc1c905da6574de4c63374f554f06cb1c0d",
"0x0f339dae5dffa86d8f34d8473cd7acf5a2c527c9e41b38c2bc0e6714d7b88d78",
"0xce27f053b339f77b0c810cc68e48b5f4c017382c5e12419f98d678ef98c9c9b1",
"0x3c3b771c7122eb3531386a6809fff191d76ea9e9e085c01d5405e7e48a465436"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


