(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[509],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||s;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4302:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i=["components"],o={},d={unversionedId:"trader/SDK/javascript",id:"trader/SDK/javascript",isDocsHomePage:!1,title:"JavaScript",description:"JavaScript SDK for building trader-facing applications on top of TDEX",source:"@site/docs/trader/SDK/javascript.md",sourceDirName:"trader/SDK",slug:"/trader/SDK/javascript",permalink:"/docs/trader/SDK/javascript",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/trader/SDK/javascript.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/trader/cli"},next:{title:"Overview",permalink:"/docs/provider/intro"}},c=[{value:"\u2b07\ufe0f Install",id:"\ufe0f-install",children:[]},{value:"\ud83d\udcc4 Usage",id:"-usage",children:[{value:"Trade",id:"trade",children:[]},{value:"Identity",id:"identity",children:[]},{value:"Swap",id:"swap",children:[]},{value:"Wallet",id:"wallet",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"JavaScript SDK for building trader-facing applications on top of TDEX"),(0,s.kt)("h2",{id:"\ufe0f-install"},"\u2b07\ufe0f Install"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install with ",(0,s.kt)("strong",{parentName:"li"},"yarn"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn add tdex-sdk\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install with ",(0,s.kt)("strong",{parentName:"li"},"npm"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install --save tdex-sdk\n")),(0,s.kt)("h2",{id:"-usage"},"\ud83d\udcc4 Usage"),(0,s.kt)("h3",{id:"trade"},"Trade"),(0,s.kt)("p",null,"Trade against a Liquidity provider in the TDEX network. This fully implements ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-specs/blob/master/04-trade-protocol.md"},(0,s.kt)("strong",{parentName:"a"},"BOTD#4"))),(0,s.kt)("h4",{id:"with-private-key"},"With private key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { Trade, IdentityType, TradeType, fetchBalances } from \'tdex-sdk\';\n\n// Connect to specific provider and use Blockstream Esplora to source blockchain data.\n// Change the providerUrl with the one you want to trade with.\nconst trade = new Trade({\n  providerUrl: "provider.tdex.network:9945",\n  explorerUrl: "https://blockstream.info/liquid/api",\n  identity: {\n    chain: "liquid", // or regtest\n    type: IdentityType.PrivateKey,\n    value: {\n      signingKeyWIF: "<WIF>",\n      blindingKeyWIF: "<WIF>",\n    },\n  },\n});\n\n// Get a new address and his blinnding private key from identity interface\nconst {\n  confidentialAddress,\n  blindingPrivateKey,\n} = trade.identity.getNextAddress();\n\n// Receiving Address and Change address are the same with Identity.PrivateKey\nconst changeAddrAndBlidning = trade.identity.getNextChangeAddress();\n\n// Get the balances grouped by assetHash\nconst balances = fetchBalances(\n  confidentialAddress,\n  blindingPrivateKey,\n  "https://blockstream.info/liquid/api"\n);\n\n// Asset hash of the market to trade\nconst LBTC = "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d";\nconst USDT = "c5870288a7c9eb5db398a5b5e7221feb9753134439e8ed9f569b0eea5a423330";\n\n//BUY = quote asset as input\n// SELL = base asset as input\n//\n// If the type of the trade is BUY it means the base asset will be received by\n// the trader.\n//\n// If the type of the trade is SELL it means the base asset will be sent by\n// the trader.\nconst preview = await trade.preview({\n  market,\n  tradeType: TradeType.SELL,\n  amount: 5000000,\n});\n\nconsole.log(preview);\n/*\n{\n  "amountToBeSent": 5000000,\n  "amountToReceive": 23869047,\n  "assetToBeSent": "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n  "assetToReceive": "c5870288a7c9eb5db398a5b5e7221feb9753134439e8ed9f569b0eea5a423330",\n}\n*/\n\n// Sell some LBTCs\nconst txid = await trade.sell({\n  market: {\n    baseAsset: LBTC,\n    quoteAsset: USDT,\n  },\n  amount: 100000, //satoshis unit\n});\n\n// Buy some LBTCs\nconst txid = await trade.buy({\n  market: {\n    baseAsset: LBTC,\n    quoteAsset: USDT,\n  },\n  amount: 50000, //satoshis unit\n});\n')),(0,s.kt)("h4",{id:"with-mnemonic-hd-wallet"},"With Mnemonic (HD Wallet)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const explorerUrl = "http://localhost:3001";\n\n// Or Use HD wallet from mnemonic for both signign and blinding\nconst tradeWithMnemonic = new Trade({\n  providerUrl: "localhost:9945",\n  explorerUrl: explorerUrl,\n  identity: {\n    chain: "regtest", // or regtest\n    type: IdentityType.Mnemonic,\n    value: {\n      mnemonic:\n        "deny pyramid explain dragon crane oxygen nature flee version cat fatal kingdom tray suspect broccoli ship rival hard add cruel defy library picture unaware",\n    },\n    initializeFromRestorer: true, // Scan the blockchain and restore previous addresses\n    restorer: new EsploraIdentityRestorer(explorerUrl),\n  },\n});\n\n// Wait for restore to be be completed. Can take a while.\ntry {\n  await tradeWithMnemonic.identity.isRestored();\n} catch (e) {\n  console.error(e);\n}\n\n// Now you can get addresses\ntradeWithMnemonic.identity.getNextAddress();\ntradeWithMnemonic.identity.getNextChangeAddress();\n')),(0,s.kt)("h3",{id:"identity"},"Identity"),(0,s.kt)("h4",{id:"send-a-confidential-transaction-with-mnemonic-hd-wallet"},"Send a confidential transaction with Mnemonic (HD Wallet)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  walletFromAddresses,\n  Wallet,\n  fetchUtxos,\n  Mnemonic,\n  IdentityType,\n} from "tdex-sdk";\n\n// Let\'s send to a confidential address a transaction on regtest\n\nconst explorerUrl = "http://localhost:3001";\n\n// Create a Identity insatnce of type Mnemonic\nconst identity = new Mnemonic({\n  chain: "regtest", // or regtest\n  type: IdentityType.Mnemonic,\n  value: {\n    mnemonic:\n      "deny pyramid explain dragon crane oxygen nature flee version cat fatal kingdom tray suspect broccoli ship rival hard add cruel defy library picture unaware",\n  },\n  initializeFromRestorer: true, // Scan the blockchain and restore previous addresses\n  restorer: new EsploraIdentityRestorer(explorerUrl),\n});\n\n// Wait for restore to be be completed. Can take a while.\ntry {\n  await identity.isRestored();\n} catch (e) {\n  console.error(e);\n}\n\n// First we create a Wallet instance using the local cache of the identity abstraction\nconst senderWallet = walletFromAddresses(identity.getAddresses(), "regtest");\n\n// then we fetch all utxos\nconst arrayOfArrayOfUtxos = await Promise.all(\n  senderWallet.addresses.map((a) => fetchUtxos(a.confidentialAddress, explorerUrl))\n);\n// Flat them\nconst utxos = arrayOfArrayOfUtxos.flat();\n\n// lets enrich them with confidential proofs using the prevout tx hexes\nconst txHexes = await Promise.all(\n  utxos.map((utxo) => fetchTxHex(utxo.txid, explorerUrl))\n);\nconst outputs = txHexes.map(\n  (hex, index) => Transaction.fromHex(hex).outs[utxos[index].vout]\n);\nutxos.forEach((utxo, index) => {\n  utxo.prevout = outputs[index];\n});\n\nconsole.log("Creating and blinding transaction...");\nconst tx = senderWallet.createTx();\nconst unsignedTx = senderWallet.buildTx(\n  tx, // empty transaction\n  utxos, // enriched unspents\n  "el1qqgptwnszsecmr2klpvmqrmdmczd0gakldxef39425wtztfn7g3rsvpc8me5t8k0wkeaqh0nsnjlxd3kejtqdsln37tjrh9gvr", // recipient confidential address\n  1000, // amount to be sent\n  "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225", // nigiri regtest LBTC asset hash\n  identity.getNextChangeAddress() // change address we own\n);\n\n// Now we can sign with identity abstraction\nconst signedTx = await identity.signPset(unsignedTx);\n\n// Finalize and extract tx to be a hex encoeded string ready for broadcast\nconst txHex = Wallet.toHex(signedTx);\n')),(0,s.kt)("h3",{id:"swap"},"Swap"),(0,s.kt)("p",null,"Create manually Swap messages without connecting to a provider. This fully implements ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-specs/blob/master/03-swap-protocol.md"},(0,s.kt)("strong",{parentName:"a"},"BOTD#3"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { Swap } from "tdex-sdk";\n\nconst swap = new Swap({ chain: "regtest" });\n\nconst LBTC = "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225";\nconst USDT = "c5870288a7c9eb5db398a5b5e7221feb9753134439e8ed9f569b0eea5a423330";\n\n// Alice starts a swap proposal\n//\n// You need to create and provide an unsigned transaction that has\n// enough inputs to cover amountToBeSent and the desired output\nconst swapRequestMessage = swap.request({\n  assetToBeSent: USDT,\n  amountToBeSent: 300,\n  assetToReceive: LBTC,\n  amountToReceive: 0.05,\n  psetBase64: "...",\n});\n\n//Bob parses the request and inspect the terms\nlet json = Swap.parse({\n  message: swapRequestMessage,\n  type: "SwapRequest",\n});\n\n// Bob provides the transaction with his signed inputs and outputs\nconst swapAcceptMessage = swap.accept({\n  message: swapRequestMessage,\n  psetBase64: "...",\n});\n\n//Alice can parse again the message and inspect the terms (optional)\njson = Swap.parse({\n  message: swapAcceptMessage,\n  type: "SwapAccept",\n});\n\n// Alice adds his signed inputs to the transaction\nconst swapCompleteMessage = swap.complete({\n  message: swapAcceptMessage,\n  psetBase64: "...",\n});\n\n// Alice can sends the completed swap to Bob\n// Now Bob finalize the transaction and broadcast it\n')),(0,s.kt)("h3",{id:"wallet"},"Wallet"),(0,s.kt)("p",null,"An easy-to-use transaction builder using to create swap transactions."),(0,s.kt)("h4",{id:"create-a-wallet-from-an-identity-with-walletfromaddresses"},"Create a wallet from an Identity with ",(0,s.kt)("inlineCode",{parentName:"h4"},"walletFromAddresses")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Create the identity\nconst sender = new PrivateKey({\n  chain: "regtest",\n  type: IdentityType.PrivateKey,\n  value: {\n    signingKeyWIF: "cPNMJD4VyFnQjGbGs3kcydRzAbDCXrLAbvH6wTCqs88qg1SkZT3J",\n    blindingKeyWIF: "cRdrvnPMLV7CsEak2pGrgG4MY7S3XN1vjtcgfemCrF7KJRPeGgW6",\n  },\n});\n\n// Use the addresses to create the wallet\nconst senderWallet = walletFromAddresses(sender.getAddresses(), "regtest");\n')),(0,s.kt)("h4",{id:"create-transaction-using-the-wallet"},"Create transaction using the wallet"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// createTx returns an empty transaction.\nconst tx = senderWallet.createTx();\n\n// fetch the utxos for each wallet\'s address\nconst arrayOfArrayOfUtxos = await Promise.all(\n  // fetchUtxos is an utility function using to retreive utxos of a given address (1st argument) from an Esplora endpoint (2nd argument)\n  senderWallet.addresses.map((a) => fetchUtxos(a.confidentialAddress, "https://nigiri.network/liquid/api"))\n);\n// Flat them\nconst utxos = arrayOfArrayOfUtxos.flat();\n\n// lets enrich them with confidential proofs using the prevout tx hexes\n// /!\\ we need proofs to unblind the utxo outputs.\n// first, fetch the transaction\'s hex using another Esplora util function: fetchTxHex\nconst txHexes = await Promise.all(\n  utxos.map((utxo) => fetchTxHex(utxo.txid, explorerUrl))\n);\n// select the outputs from the hex values using liquidjs-lib\nconst outputs = txHexes.map(\n  (hex, index) => Transaction.fromHex(hex).outs[utxos[index].vout]\n);\n// assign the prevout to each utxo\nutxos.forEach((utxo, index) => {\n  utxo.prevout = outputs[index];\n});\n\n// This will add output that send 50000 LBTC satoshis to the recipient address.\n// it will also adds the inputs according to the provided utxos\nconst unsignedTx = senderWallet.buildTx(\n  tx,\n  // senderUtxos can be fetched using the explorer endpoint\n  senderUtxos,\n  // the recipient address\n  "el1qqt4rfky0utmv8durktmmg3athy4qfmtqz5xwvsnrty7zhujtxcthdqzncgk7vkfgpvm9varxetmp0mvxkl9tzgxq79n3mdn3v",\n  // the amount to send, in satoshis\n  50000,\n  // the asset hash to send\n  "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225",\n  // the change address to use\n  sender.getNextChangeAddress().confidentialAddress\n);\n')))}p.isMDXComponent=!0}}]);