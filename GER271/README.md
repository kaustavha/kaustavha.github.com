## German 271 hw

Demo of hosting text on the EVM instead of a classical backend server or in a static(html) page. 

File overview:  

- `README.md` - what you're reading now
- `assignmentText.txt` - Text that was uploaded to the contract. Assignment text from website with formatting and links removed, minified into 1 line, newlines replaced with character literal for newlines (\n). 
- `contract.sol` - Solidity contract that is deployed to the EVM running on the rinkeby testnet. This code is basically shared between peers in the network and holds our text from `assignmentText.txt`
- `index.html` - Main source code, this is all the code that is actually being used with the classic client-server model, it's all frontend code and your browser negotiates with the deployed contract on the EVM on rinkeby using metamask to fetch the data stored in that contract

FAQS:

- EVM? - Stands for Ethereum Virtual Machine, Ethereum is one company/concept attempting to implement a decentralized web, the VM can be thought of as a single virtual computer built on top of a connected network of peers/contributing computers. 
- rinkeby? - Ethereum is kind enough to provide free test networks to use for development, this is one of those test networks. The same incentivization mechanisms as the main network exists but there also exists "faucets" which provide free money i.e. tokens that are used to pay for computation on this p2p network
- contract? - This is what we call programs running on the shared p2p architecture provided by ethereum

Replication steps:

- deploy contract in `contract.sol` first since ~12kb text payload is too big and overruns block gas limits, you can use remix.ethereum.org to do this.   
- chunk text into at least 4, seems TXs fail silently while appearing succesful around the 4-5kb range
- Locally declare contract, get the ABI and rinkeby address from remix after deploying the contract: `var contract = web3.eth.contract(ABI).at(rinkebyAddress);`  
- call `contract.add(chunk, (err,data) => {...})` for each of the text chunks (I did this from my browsers console, inspect element -> console)
- Deploy this html and pray that it works
