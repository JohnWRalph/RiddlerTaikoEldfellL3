import { Contract, ethers } from "ethers"
import RIDDLER_ABI from "../abi/RIDDLER_ABI";

async function getsolvedRiddles(contract): Promise<any> {
  // const solvedRiddles = await contract.filters.RiddleSolved()
  // const events = await contract.queryFilter(solvedRiddles, 0, "latest");
  // return events;

  //rpc provider
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.l3test.taiko.xyz"
  )

  const newContract = new Contract(
    import.meta.env.VITE_CONTRACT_ADDRESS,
    RIDDLER_ABI,
    provider.getSigner()
  )

  const solvedRiddles = await newContract.filters.RiddleSolved()
  const events = await newContract.queryFilter(solvedRiddles, 0, "latest")
  return events
  

}

export default getsolvedRiddles