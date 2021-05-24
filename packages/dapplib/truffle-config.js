require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar punch grace infant flush skull'; 
let testAccounts = [
"0xa8a6bb63e3c04f97245e4ff66028794d29342dae44579c21afea2508102a3a49",
"0x459c55322392bb71ca6f7751c00c6ecac409f0f4406f0f45e123d482da3223c9",
"0xd6a96891defbffaa11567c3a7d09ebce784f315fac67967033a6af3df1dc032e",
"0x9ae1002545c1c37b2e4727d458cab8443158bc47fcd44ad95ac82a7681cf071c",
"0xc0f3e1f773242e6853ef60892531fee5e3c7bf93cb8c5c69e22a4a939936ff63",
"0xad6a347e15d1b236e3ccaf2032ecb20ad64878ff60234db441771fb8d6915ad2",
"0xf0d1bb8bc13c06360900813b25ee38ee0008faa0087de4e1e31c93fe6e4fa004",
"0x5bec042d1ccf77f5c017d0bf2d6421920f65fb777d9996cb24e303b273ebc606",
"0xeebaa087ebfe9950a6c044fa80d35ac899ba5a893f4e1d3eefb77e45f0a7e16c",
"0x567d747b4e2fe49f85e0ac994bd54a4c99792f51294b27c56f6eb0ead742f56a"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
