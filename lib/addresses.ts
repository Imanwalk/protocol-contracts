import testnet from "../data/addresses.testnet.json";
import mainnet from "../data/addresses.mainnet.json";
import { getChainId } from "@zetachain/networks";

export const getAddress = (type: any, network: any, symbol?: any) => {
  const networks = [...testnet, ...mainnet];
  let address;
  if (type === "zrc20" && !symbol) {
    // for backwards compatibility
    const chainId = getChainId(network);
    address = networks.find((n: any) => {
      return n.foreign_chain_id === chainId?.toString() && n.type === type && n.coin_type === "gas";
    });
  } else {
    address = networks.find((n: any) => {
      return n.chain_name === network && n.type === type;
    });
  }
  return address?.address;
};
