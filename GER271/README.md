## German 271 hw

Text is deployed to rinkeby testnet.   

- deploy contract first since ~12kb text payload is too big and overruns block gas limits  
- chunk text into 4, seems TXs fail silently while appearing succesful around the 4-5kb range
- call contract.add(...) for each of the text chunks
- Deploy this html and pray that it works

contract.sol is the deployed contract.   
ABI and address are hardcoded into the html
assignmentText contains text from the assignment with newlines replaced with \n and everything minified to one line.
