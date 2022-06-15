import WAValidator from 'multicoin-address-validator';

/*
const supportedCoins = [
  'Ethereum',
  'EthereumClassic',
  'LiteCoin',
  'Bitcoin',
  'DogeCoin',
  'MonaCoin',
  'Ripple',
  'BitcoinCash'
];
*/

const supportedCoins = [
  '0x',
  'Aave Coin',
  'Algorand',
  'Aragon',
  'Augur',
  'AugurV2',
  'AuroraCoin',
  'Bancor',
  'Bankex',
  'Basic Attention Token',
  'BeaverCoin',
  //'Binance', (no validator is included in the library)
  'BioCoin',
  'Bitcoin',
  'Bitcoin SV',
  'BitcoinCash',
  'BitcoinGold',
  'BitcoinPrivate',
  'BitcoinZ',
  'BlockTrade',
  'BTU Protocol',
  'Callisto',
  'Cardano',
  'Chainlink',
  'Civic',
  'Compound',
  'Cred',
  'Crypto.com Coin',
  'CUSD',
  'Dash',
  'Decentraland',
  'Decred',
  'DigiByte',
  'District0x',
  'DogeCoin',
  'Enjin Coin',
  'EOS',
  'Ethereum',
  'EthereumClassic',
  'EtherZero',
  'Expanse',
  'FirmaChain',
  'FreiCoin',
  'GameCredits',
  'GarliCoin',
  'Gnosis',
  'Golem',
  'Golem (GNT)',
  'HedgeTrade',
  'Hush',
  'HyperSpace',
  'iExec RLC',
  'Komodo',
  'LBRY Credits',
  'Lisk',
  'LiteCoin',
  'loki',
  'Loom Network',
  'Maker',
  'Matchpool',
  'Matic',
  'MegaCoin',
  'Melon',
  'Metal',
  'MonaCoin',
  'Monero',
  'Multi-collateral DAI',
  'NameCoin',
  'Nano',
  'Nem',
  'Neo',
  'NeoGas',
  'Numeraire',
  'Ocean Protocol',
  'Odyssey',
  'OmiseGO',
  'Paxos',
  'PeerCoin',
  'PIVX',
  'Polkadot',
  'Polymath',
  'PrimeCoin',
  'ProtoShares',
  'Qtum',
  'Quant',
  'Quantum Resistant Ledger',
  'RaiBlocks',
  'Ripio Credit Network',
  'Ripple',
  'Salt',
  'Serve',
  'Siacoin',
  'SnowGem',
  //'Solana', (no validator is included in the library)
  'SolarCoin',
  'SOLVE',
  'Spendcoin',
  'Status',
  'Stellar',
  'Storj',
  'Storm',
  'StormX',
  'Swarm City',
  'Synthetix Network',
  'Tap',
  'TEMCO',
  'TenX',
  'Tether',
  'Tezos',
  'Tron',
  'TrueUSD',
  'Uniswap Coin',
  'USD Coin',
  'VeChain',
  'VertCoin',
  'Viberate',
  'VoteCoin',
  'Waves',
  'Wings',
  'ZCash',
  'ZClassic',
  'ZenCash'
];

function isValidCoinAddress(address) {
  for (const coin of supportedCoins) {
    if (WAValidator.validate(address, coin)) {
      return { coin: coin, valid: true };
    }
  }
  return { coin: '', valid: false };
}

export { isValidCoinAddress };
