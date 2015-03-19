var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('a3d1ace2'),
  addressVersion: 80,
  privKeyVersion: 208,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('51bc02c17ba4f06b8e22869a29a99bdf3a901ca093aa1ccb22dc247e34000000'),
    merkle_root: hex('1ee977ab330b8010c914f5b4cc7509eb02a2b94a8b3df2349e3495431247a6a9'),
    height: 0,
    nonce: 420748,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1426363040,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'zirkcoin.com',
    'seed.zirkcoin.com'
  ],
  defaultClientPort: 335554
};

exports.testnet = {
  name: 'testnet',
  magic: hex('a3d1ace2'),
  addressVersion: 80,
  privKeyVersion: 208,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('51bc02c17ba4f06b8e22869a29a99bdf3a901ca093aa1ccb22dc247e34000000'),
    merkle_root: hex('1ee977ab330b8010c914f5b4cc7509eb02a2b94a8b3df2349e3495431247a6a9'),
    height: 0,
    nonce: 420748,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1426363040,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'testnet.zirkcoin.com'
  ],
  defaultClientPort: 44554
};
