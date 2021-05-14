(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(109)),s={title:"Daemon",sidebar_position:2},l={unversionedId:"provider/daemon",id:"provider/daemon",isDocsHomePage:!1,title:"Daemon",description:"Daemon implementation to execute automated market marking strategies on top of TDEX",source:"@site/docs/provider/daemon.md",sourceDirName:"provider",slug:"/provider/daemon",permalink:"/docs/provider/daemon",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/website/docs/provider/daemon.md",version:"current",sidebarPosition:2,frontMatter:{title:"Daemon",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/provider/intro"},next:{title:"Registry",permalink:"/docs/provider/registry"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Data directory",id:"data-directory",children:[]},{value:"Run",id:"run",children:[]},{value:"Run with Docker",id:"run-with-docker",children:[{value:"Check the Logs",id:"check-the-logs",children:[]},{value:"Use the operator CLI",id:"use-the-operator-cli",children:[]}]},{value:"Run standalone",id:"run-standalone",children:[{value:"Use the operator CLI",id:"use-the-operator-cli-1",children:[]}]},{value:"Environment variables",id:"environment-variables",children:[]},{value:"Deposit funds",id:"deposit-funds",children:[{value:"NEW: CONCURRENT SWAP REQUESTS",id:"new-concurrent-swap-requests",children:[]}]},{value:"Manage markets",id:"manage-markets",children:[]}],i={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Daemon implementation to execute automated market marking strategies on top of TDEX"),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The daemon exposes two HTTP/2 gRPC interfaces, one meant to be public to be consumed by traders that fully implements ",Object(o.b)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-specs/blob/master/04-trade-protocol.md"},"BOTD #4")," called ",Object(o.b)("strong",{parentName:"p"},"trader interface")," (by default on the port ",Object(o.b)("strong",{parentName:"p"},"9945"),") and another private to be consumed by the liquidity provider for internal management called ",Object(o.b)("strong",{parentName:"p"},"operator interface")," by default on the port ",Object(o.b)("strong",{parentName:"p"},"9000"),")."),Object(o.b)("p",null,"The daemon has an embedded Liquid wallet and sources blockchain information via a block explorer. At the time of writing the supported explorers are the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/blockstream/electrs"},"Blockstream fork of Electrs"),", and the Elements node. By default the first is used and the daemon connects to ",Object(o.b)("a",{parentName:"p",href:"https://blockstream.info/liquid/api/"},"Blockstream.info")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Operator API")),Object(o.b)("p",null,"The API for the operator interface are documented ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TDex-network/tdex-protobuf/blob/beta/docs/docs.md#operator"},"here")),Object(o.b)("h2",{id:"data-directory"},"Data directory"),Object(o.b)("p",null,"The first time you run the daemon, it creates a ",Object(o.b)("strong",{parentName:"p"},"data directory")," in ",Object(o.b)("inlineCode",{parentName:"p"},"~/.tdex-daemon")," and it is used to persist the wallet and the state in an embedded database.\nIt's possible to use a different path for the data directory exporting the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"TDEX_DATA_DIR_PATH"),". If you use docker you must mount the volume pointing to the different chosen path."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Be sure to replicate this data directory to keep your markets running in case of hardware failures. You can restore the access of your funds and the markets with your mnemonic seed")),Object(o.b)("h2",{id:"run"},"Run"),Object(o.b)("p",null,"Use one of the following methods to run a TDEX daemon on your machine:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#run-with-docker"},"Docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#run-standalone"},"Standalone"))),Object(o.b)("h2",{id:"run-with-docker"},"Run with Docker"),Object(o.b)("h4",{id:"pull-from-github-packages"},"Pull from Github Packages"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ docker pull ghcr.io/tdex-network/tdexd:latest\n")),Object(o.b)("h4",{id:"start-the-daemon"},"Start the daemon"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'# Run on Liquid network connecting to blockstream.info for sourcing blockchain data\n$ docker run -it -d --name tdexd --restart unless-stopped -p 9945:9945 -p 9000:9000 -v `pwd`/tdexd:/.tdex-daemon ghcr.io/tdex-network/tdexd:latest\n\n# Run on Liquid connecting to a local explorer\n$ docker run -it -d --name tdexd --restart unless-stopped -p 9945:9945 -p 9000:9000 -v `pwd`/tdexd:/.tdex-daemon -e TDEX_EXPLORER_ENDPOINT="http://127.0.0.1:3001" ghcr.io/tdex-network/tdexd:latest\n\n# Run on Liquid connecting to a local Elements node\n$ docker run -it -d --name tdexd --restart unless-stopped -p 9945:9945 -p 9000:9000 -v \'pwd\'/tdexd:/.tdexd -e TDEX_ELEMENTS_RPC_ENDPOINT="http://rpcuser:rpcpassword@127.0.0.1:7041" ghcr.io/tdex-network/tdexd:latest\n\n# Run on Regtest connecting to a local explorer and using regtest LBTC asset hash.\n$ docker run -it -d --name tdexd --restart unless-stopped -p 9945:9945 -p 9000:9000 -v `pwd`/tdexd:/.tdex-daemon -e TDEX_NETWORK="regtest" -e TDEX_BASE_ASSET="5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225" -e TDEX_EXPLORER_ENDPOINT="http://127.0.0.1:3001"  ghcr.io/tdex-network/tdexd:latest\n\n# Run on Liquid and specify USDt as base asset instead of default L-BTC\n$ docker run -it -d --name tdexd --restart unless-stopped -p 9945:9945 -p 9000:9000 -v `pwd`/tdexd:/.tdex-daemon -e TDEX_BASE_ASSET="ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2" ghcr.io/tdex-network/tdexd:latest\n')),Object(o.b)("p",null,"This will mount the data directory in a folder called ",Object(o.b)("inlineCode",{parentName:"p"},"tdexd")," in your current path."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"#environment-variables"},"Enviroment Variables")," for all available options."),Object(o.b)("h3",{id:"check-the-logs"},"Check the Logs"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ docker logs tdex\nINFO[0000] trader interface is listening on :9945\nINFO[0000] operator interface is listening on :9945\n")),Object(o.b)("h3",{id:"use-the-operator-cli"},"Use the operator CLI"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ alias tdex='docker exec -it tdexd tdex'\n")),Object(o.b)("p",null,"Now you are ready to ",Object(o.b)("a",{parentName:"p",href:"#deposit-funds"},"deposit funds")," to create your first market and start accepting incoming trades."),Object(o.b)("h2",{id:"run-standalone"},"Run standalone"),Object(o.b)("h4",{id:"install"},"Install"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-daemon/releases"},"Download the latest release for MacOS or Linux"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Move daemon and cli into a folder in your PATH (eg. ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/bin"),") and rename the daemon as ",Object(o.b)("inlineCode",{parentName:"p"},"tdexd")," and the cli as ",Object(o.b)("inlineCode",{parentName:"p"},"tdex"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Give executable permissions. (eg. ",Object(o.b)("inlineCode",{parentName:"p"},"chmod a+x /usr/local/bin/tdexd")," and ",Object(o.b)("inlineCode",{parentName:"p"},"chmod a+x /usr/local/bin/tdex"),")"))),Object(o.b)("h4",{id:"run-1"},"Run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'# Run on Liquid network connecting to blockstream.info for sourcing blockchain data\n$ tdexd\n\n# Run on Liquid connecting to a local explorer\n$ export TDEX_EXPLORER_ENDPOINT="http://127.0.0.1:3001"\n$ tdexd\n\n# Run on Liquid connecting to a local Elements node\n$ export TDEX_ELEMENTS_RPC_ENDPOINT="http://rpcuser:rpcpassword@127.0.0.1:7041"\n$ tdexd\n\n# Run on Regtest connecting to a local explorer and using regtest LBTC asset hash.\n$ export TDEX_NETWORK="regtest"\n$ export TDEX_BASE_ASSET="5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225"\n$ export TDEX_EXPLORER_ENDPOINT="http://127.0.0.1:3001"\n$ tdexd\n\n# Run on Liquid and specify USDt as base asset instead of default L-BTC\n$ export TDEX_BASE_ASSET="ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n$ tdexd\n')),Object(o.b)("p",null,"This will mount the data directory in a folder called ",Object(o.b)("inlineCode",{parentName:"p"},".tdex-daemon")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"$HOME"),"."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"#environment-variables"},"Environment Variables")," for all available options."),Object(o.b)("h3",{id:"use-the-operator-cli-1"},"Use the operator CLI"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex --help\n")),Object(o.b)("p",null,"Now you are ready to ",Object(o.b)("a",{parentName:"p",href:"#deposit-funds"},"deposit funds")," to create your first market and start accepting incoming trades."),Object(o.b)("h2",{id:"environment-variables"},"Environment variables"),Object(o.b)("p",null,"The list of available variables can be found ",Object(o.b)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/tdex-network/tdex-daemon/config"},"here")),Object(o.b)("h2",{id:"deposit-funds"},"Deposit funds"),Object(o.b)("p",null,"To start a market, you need to deposit two reserves of two ",Object(o.b)("strong",{parentName:"p"},"Liquid assets")," for the pair (called ",Object(o.b)("strong",{parentName:"p"},"Market"),") you are providing liquidity for. Each ",Object(o.b)("strong",{parentName:"p"},"Market")," has a BASE ASSET, which is always the same per daemon, and a QUOTE ASSET."),Object(o.b)("p",null,"To determine the spot price you can adopt different strategies, at the moment the supported one are ",Object(o.b)("strong",{parentName:"p"},"PLUGGABLE")," and ",Object(o.b)("strong",{parentName:"p"},"BALANCED"),"."),Object(o.b)("p",null,"The PLUGGABLE strategy expects you to update the price manually, plugging in an external price feed that need to call the ",Object(o.b)("inlineCode",{parentName:"p"},"UpdateMarketPrice")," rpc method of the operator interface."),Object(o.b)("p",null,"The BALANCED strategy (this is the default when you create a market) uses ",Object(o.b)("strong",{parentName:"p"},"Automated Market Making")," to determine the spot price. The initial ratio of the two amounts you deposit will represent the price of the first trade you accept in.\nFrom that point on, the ",Object(o.b)("strong",{parentName:"p"},"automated market making strategy will self regulate the trading price"),". It follows the ",Object(o.b)("em",{parentName:"p"},"constant product market-making")," formula. Every transaction that occurs on this market will adjust the prices of the market accordingly. It's a basic supply and demand automated market making system."),Object(o.b)("p",null,"The following commands will uses the operator cli ",Object(o.b)("inlineCode",{parentName:"p"},"tdex")," to call the gRPC ",Object(o.b)("strong",{parentName:"p"},"operator")," interface of ",Object(o.b)("inlineCode",{parentName:"p"},"tdexd"),". By default running on localhost on port 9000."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Initialize the local state of the CLI.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# By default it looks for the daemon operator gRPC interface on localhost:9000\n$ tdex config init\n# If the daemon is running on regtest\n$ tdex config init --network regtest --explorer_url http://localhost:3001\n# or on a remote machine\n$ tdex config init --rpcserver example.com:9000\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can always check the current state with the following command")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex config\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new mnemonic seed (only the first time)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex genseed\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Initialize the wallet (only the first time or after a restore from seed)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex init --seed <generatedSeed> --password <mypassword>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OR")," import and restore an existing wallet")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex init --seed <mySeed> --password <mypassword> --restore\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Unlock the wallet with chosen password")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex unlock --password <mypassword>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can manually deposit funds to the daemon wallet:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Get a deposit address from the fee account")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ tdex depositfee\n")),Object(o.b)("p",{parentName:"li"},"Now send some L-BTC that will be used to subsidize liquid network fees."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Claim the deposits for the fee account")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'$ tdex claimfee --outpoints \'[{"hash": <txid>, "index": <vout>}]\'\n')),Object(o.b)("p",{parentName:"li"},"v Create a Market and get a new deposit address."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex depositmarket\n")),Object(o.b)("p",{parentName:"li"},"Now send some base asset (by default is LBTC) and quote asset of choice in that address, such as USDt or LCAD."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Claim the deposits for the market")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'$ tdex config set base_asset <BaseAssetHash>\n$ tdex config set quote_asset <QuoteAssetHash>\n\n$ tdex claimmarket --outpoints \'[{"hash": <txid>, "index": <vout>}, {...}]\'\n')))),Object(o.b)("h3",{id:"new-concurrent-swap-requests"},"NEW: CONCURRENT SWAP REQUESTS"),Object(o.b)("p",null,"You can make use of the fragmenter tool, an interactive process that let's you send all the funds to a temporary wallet that splits the total amount into smaller fragments, increasing the capabilities of the daemon to serve an higher number of concurrent trade requests:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Get a temporary address to send fee account's funds to:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ tdex fragmentfee\n")),Object(o.b)("p",{parentName:"li"}," After having generated and showed the temporary wallet's address, the commands waits for you to insert the txid of the funding tx(s).",Object(o.b)("br",{parentName:"p"}),"\n","Press ",Object(o.b)("em",{parentName:"p"},"ENTER")," to confirm and continue the process in order to calculate the optimal number of fragments based on the amount detected and send the fragmented deposits to the daemon's fee account."),Object(o.b)("p",{parentName:"li"},"NOTICE: If, for any reason, the process fails (like for example you pasted the wrong txid) you can resume it with:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ tdex fragmentfee --txid <txid1> --txid <txid2> ...\n")),Object(o.b)("p",{parentName:"li"},"  The process is smart enough to recognize if any previous one exited before being completed. In that case, it expects you to resume by providing the list of funding txids. If this time everything's allright, the process will complete as described above, otherwise you'll need to repeat the reseume again. Only after a fragmentation process is completed, it is possible to go for anotherone.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Get a temporary address to send market's funds to:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ tdex fragmentmarket\n#\xa0INFO[0000] send funds to address: el1qqf9w40vhwnq0rjejfuv0l4hlhgc6zwdacftra5yd3rakl8s3y0pn3078ul8jh5dhfg7rpceu2xt8wyx92wz9swqsm2p6fcjvq\n#\xa0INFO[0000] Enter txid of fund(s) separated by a white space [press ENTER to skip or confirm]:\n")),Object(o.b)("p",{parentName:"li"},"  Fund the temporary wallet's address and insert the txid of the funding txs.",Object(o.b)("br",{parentName:"p"}),"\n","Press ",Object(o.b)("em",{parentName:"p"},"ENTER")," to confirm and continue the process in order to calculate the optimal number of fragments and to send the fragmented deposits to the daemon's market account."),Object(o.b)("p",{parentName:"li"},"NOTICE: If, for any reason, the process fails, the same resume flow described above applies for ",Object(o.b)("inlineCode",{parentName:"p"},"fragmentmarket --txid <txid1> ..."),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can check the status of the market"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex listmarket\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Optional: You can get a new deposit address for an already created and funded market passing the optional flag")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex depositmarket --base_asset <BaseAssetHash> --quote_asset <QuoteAssetHash>\n")),Object(o.b)("h2",{id:"manage-markets"},"Manage markets"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select the market")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex config set base_asset <BaseAssetHash>\n$ tdex config set quote_asset <QuoteAssetHash>\n")),Object(o.b)("p",null,"You can always check the current state with the following command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex config\n")),Object(o.b)("p",null,"Now the following commands will be launch against this market."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the market using automated market making")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex open\n")),Object(o.b)("p",null,"This makes the selected market available for trading using the BALANCED market strategy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Close the market")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex close\n")),Object(o.b)("p",null,"This makes the selected market NOT available for trading."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Change market making strategy to pluggable")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex strategy --pluggable\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Update the price")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex price --base_price=16000 --quote-price=0.001\n")),Object(o.b)("p",null,"This updates the current market price to be used for future trades."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the market again")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ tdex open\n")))}d.isMDXComponent=!0}}]);