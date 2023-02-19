const { ethers } = require("ethers");

const repository = require("./contracts/artifacts/1_Repository.json");
const repositoryAddress = "0x0fdC79cF32536ACeC922dDe65294DD2CE9bA637E";
const repositoryAbi = repository.output.abi;

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.testnet.mantle.xyz"
);

const wallet = new ethers.Wallet(
  "0x18baCF8465F64C578Cf022447D76143b08aff802",
  provider
);

const repositoryContract = new ethers.Contract(
  repositoryAddress,
  repositoryAbi,
  wallet
);
const main = async () => {
  const result = await repositoryContract.getAllRepository();
  console.log(result);
};

main();
