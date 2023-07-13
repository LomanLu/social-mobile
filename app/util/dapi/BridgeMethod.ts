export enum BridgeMethod {
  ETH_ChainId = 'eth_chainId',
  NET_Version = 'net_version',
  ETH_RequestAccounts = 'eth_requestAccounts',
  ETH_Accounts = 'eth_accounts',
  ETH_BlockNumber = 'eth_blockNumber',
  ETH_GasPrice = 'eth_gasPrice'
}

export class BridgeRequest {
  ID: number | undefined
  method: BridgeMethod | undefined
  params: any | undefined | null
}

export default { BridgeMethod, BridgeRequest}
