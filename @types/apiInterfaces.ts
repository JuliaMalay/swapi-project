export interface IGetStatistics {
  blocks: number,
  coins: number,
  delegated: number,
  delegatedproc: string,
  emission: number,
  freecirculation: string,
  market: number,
  txs: number,
  validators: number,
}

export interface IGetAddress {
  address: string,
  txes: number,
  balance: Record<string, unknown>,
  createdAt: string,
  updatedAt: string
}

export interface IGetStakesByAddressItem {
  validatorId: string,
  stakes: [
    {
      coin: string,
      amount: string,
      baseAmount: string,
      unbondAmount: string
    }
  ],
  totalStake: string,
  validator: {
    address: string,
    consensusAddress: string,
    rewardAddress: string,
    moniker: string,
    website: string,
    details: string,
    identity: null | string,
    'security_contact': null | string,
    blockId: number,
    skippedBlocks: number,
    delegators: number,
    fee: string,
    slots: number,
    mins: string,
    stake: string,
    power: string,
    rating: null | string,
    status: string,
    kind: string,
    createdAt: string,
    updatedAt: string
  }
}
export interface IGetStakesByAddress {
  total: 0
  validators: IGetStakesByAddressItem[],
}

export interface IGetNftStakesByAddress {
  rows: [
    {
      baseQuantity: string,
      validatorId: string,
      count: string,
      nft: {
        tokenUri: string,
        nftId: string,
        nftCollection: string
      },
      cover: string
    }
  ]
}

export interface IGetRewardsByAddress {
  count: number,
  rewards: [
    {
      addressId: string,
      createdAt: string,
      currency: string,
      date: string,
      id: number,
      type: string,
      updatedAt: string,
      validator: {
        moniker: string,
      }
      validatorId: string,
      value: string
    }
  ]
}

export interface IGetSlashesByAddress {
  'count': number,
  'slashes': [
    {
      'id': number,
      'type': string,
      'value': string,
      'currency': string,
      'validatorId': string,
      'addressId': string,
      'blockId': number,
      'date': string,
      'createdAt': string,
      'updatedAt': string,
      'validator': {
        'moniker': string
      }
    }
  ]

}

export interface IGetAddresses {
  count: number,
  addresses: {
    address: string,
    balance: Record<string, unknown>,
    createdAt: string,
    updatedAt: string
  }
}

export interface IGetBlock {
  height: number,
  date: string,
  hash: string,
  size: number,
  reward: number,
  blockTime: number,
  txsCount: number,
  validatorsCount: number,
  createdAt: string,
  updatedAt: string
  emission?: string
}

export interface IGetTxsByBlock {
  'count': number,
  'txs': {
      'id': number,
      'hash': string,
      'timestamp': string,
      'status': string,
      'type': string,
      'fee': {
        'gas_coin': null | string,
        'gas_used': string,
        'gas_amount': null | string,
        'gas_used_number': number
      },
      'data': Record<string, unknown>,
      'nonce': number,
      'code': number,
      'message': string,
      'blockId': number,
      'from': string,
      'to': string,
      'createdAt': string,
      'updatedAt': string
    }[]
}

export interface IGetValidatorsByBlock {
  count: number,
  validators: [
    {
      signed: boolean
      validator: {
        'address': string,
        'consensusAddress': string,
        'rewardAddress': string,
        'moniker': string,
        'website': string,
        'details': string,
        'identity': string,
        'security_contact': null | string,
        'blockId': number,
        'skippedBlocks': number,
        'delegators': number,
        'fee': string,
        'slots': number,
        'mins': string,
        'stake': string,
        'power': string,
        'rating': null | string,
        'status': string,
        'kind': string,
        'createdAt': string,
        'updatedAt': string
      }
    }
  ]
}

export interface IGetBlocksItem {
  height: number,
  date: string,
  hash: string,
  size: number,
  reward: number | null,
  blockTime: number,
  txsCount: number,
  validatorsCount: number,
  createdAt: string,
  updatedAt: string,
  emission?: string,
  id?: number,
  txCount?: number,
}
export interface IGetBlocks {
  count: number,
  blocks: IGetBlocksItem[]
}

export interface IGetTxsItem {
  blockId: number,
  code: number,
  createdAt: string,
  data: {
    'log': string,
    'nft': {
      'nftId': string,
      'creator': string,
      'reserve': string,
      'quantity': string,
      'tokenUri': string,
      'recipient': string,
      'nftCollection': string,
      'sender'?:string,
      'nftTokenUri'?:string,
    },
    'coin': string,
    'check': string,
    'coins': string,
    'proof': string,
    'title': string,
    'amount': string,
    'issuer': string,
    'owners': string,
    'sender': string,
    'symbol': string,
    'wallet': string,
    'weights': string,
    'identity': string,
    'coin_base': string,
    'confirmed': null | boolean,
    'due_block': string,
    'recipient': string,
    'threshold': string,
    'coin_check': string,
    'commission': string,
    'amount_base': string,
    'atomic_swap': {
      'from': string,
      'amount': string,
      'secret': string,
      'recipient': string,
      'time_locked': string,
      'hashed_secret': string,
      'transfer_type': string
    },
    'coin_to_buy': string,
    'nonce_check': null,
    'transaction': string,
    'amount_check': string,
    'coin_to_sell': string,
    'limit_volume': string,
    'amount_to_buy': string,
    'confirmations': null,
    'signer_weight': null,
    'swap_multiple': {
      'r': string,
      's': string,
      'v': number | string,
      'from': string,
      'amount': string,
      'sender': string,
      'chainTo': number,
      'chainFrom': number,
      'chainName': string,
      'recipient': string,
      'tokenName': string,
      'chainNameTo': string,
      'chainNumber': string,
      'tokenSymbol': string,
      'chainNameFrom': string,
      'transactionNumber': string
    },
    'amount_to_sell': string,
    'initial_volume': string,
    'reward_address': string,
    'validator_desc': {
      'details': string,
      'moniker': string,
      'website': string,
      'identity': string,
      'security_contact': string
    },
    'completion_time': string,
    'initial_reserve': string,
    'submit_proposal': {
      'vote': string,
      'title': string,
      'proposer': string,
      'description': string,
      'proposal_id': null | string,
      'validator_id': string,
      'voting_end_block': string,
      'voting_start_block': string
    },
    'delegator_address': string,
    'min_amount_to_buy': string,
    'validator_address': string,
    'max_amount_to_sell': string,
    'multisend_receivers': string,
    'constant_reserve_ratio': null
    'max_amount_to_buy'?: string
    'icon'?:string
  },
  fee: {
    coin?: string,
    amount?: string,
    'gas_amount'?: string
    'gas_coin'?: string
    'gas_used'?: string
    'gas_used_number'?: number
  },
  from: string,
  hash: string,
  id: number,
  message: string,
  nonce: number,
  status: string,
  timestamp: string,
  to: string,
  type: string,
  updatedAt: string
}

export interface IGetTxs {
  count: number,
  txs: IGetTxsItem[]
}

interface IGetGraphItem {
  count: number,
  date: string
}

export type IGetGraph = Array<IGetGraphItem>

export interface IGetValidator {
  address: string,
  blockId: number
}

export interface IGetStakesByValidator {
  count: number,
  stakes: [
    {
      coinSymbol: string,
      amount: string,
      addressId: string,
      validatorId: string,
      createdAt: string,
      updatedAt: string
    }
  ]
}

export interface IGetNftStakesByValidator {
  rows: [
    {
      addressId: string,
      baseQuantity: string,
      count: string,
      cover: string
    }
  ]
}

export interface IGetValidators {
  count: number,
  online: number,
  validators: [
    {
      address: string,
      blockId: number
    }
  ],
  freeSlots: number
}

export type IGetCandidates = IGetValidators

export interface IGetSlash {
  count: number,
  slashes: [
    {
      type: string,
      value: string,
      currency: string,
      blockId: number,
      validatorId: string
    }
  ]
}

export interface IGetMissedBlocks {
  count: number,
  blocks: [
    {
      signed: boolean,
      blockId: number,
      validatorId: string
    }
  ]
}

export type IGetNativeCoin = Record<string, unknown>

export interface IGetNativeCoinTxs {
  count: number,
  txs: [
    {
      hash: string,
      timestamp: string,
      status: number,
      type: string,
      fee: {
        coin: string,
        amount: string
      },
      data: Record<string, unknown>,
      nonce: number,
      blockId: number,
      message: string,
      from: string,
      to: string,
      createdAt: string,
      updatedAt: string
    }
  ]
}

export interface IGetCustomCoinsData {
  countAllCoin: number,
  totalReserve: string,
  coins: [
    {
      symbol: string,
      title: string,
      volume: string,
      reserve: string,
      crr: number,
      limitVolume: string,
      creator: string,
      txHash: string,
      blockId: string,
      price: string,
      delegated: string,
      avatar: string
    }
  ]
}

export interface IGetCoinAddressesItem {
  symbol: string,
  chain: {
    chainName: string,
    chainNumber: number
  },
  contractAddress: string
}

export interface IGetCoinAddresses {
  contractAddresses: IGetCoinAddressesItem[]
}

export type IRetrieveCoin = Record<string, unknown>

export interface IGetCoinHistory {
  coin: string,
  interval: string,
  res: [
    {
      price: string,
      timestamp: number
    }
  ]
}

export interface IGetTxsByCoin {
  count: number,
  txs: [
    {
      hash: string,
      timestamp: string,
      status: number,
      type: string,
      fee: {
        coin: string,
        amount: string
      },
      data: Record<string, unknown>,
      nonce: number,
      blockId: number,
      message: string,
      from: string,
      to: string,
      createdAt: string,
      updatedAt: string
    }
  ]
}

export interface IRetrieveProposal {
  proposal: {
    proposalId: number,
    hashTx: string,
    title: string,
    description: string,
    votingStartBlock: string,
    votingEndBlock: string,
    proposer: string,
    stakesTotal: number,
    stakesYes: number,
    stakesNo: number,
    stakesAbstain: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    percentYes: string,
    percentNo: string,
    percentAbstain: string,
    percentNone: string,
    votes: {
      count: number,
      votes: [
        {
          id: number,
          proposalId: number,
          hashTx: string,
          validatorId: string,
          stake: number,
          vote: string,
          createdAt: string,
          updatedAt: string,
          validator: {
            moniker: string
          }
        }[]
      ]
    },
    votesTotal?:number
  }
}
export interface IGetProposals {
  count: number,
  proposals: IRetrieveProposal[]
}

export interface IStatisticDataItem {
  timestamp: string,
  volume: string
}
export interface IGetMarketData {
  res: {
    customCreated: IStatisticDataItem[],
    delegated: IStatisticDataItem[],
    freeFloat: IStatisticDataItem[],
    nftCreated: IStatisticDataItem[],
    totalEmission: IStatisticDataItem[],
    validators: IStatisticDataItem[],
  }
}

export interface IGetChainData {
  res: {
    customCap: IStatisticDataItem[],
    priceUSD: IStatisticDataItem[],
  }
}

export interface IGetBlockchainData {
  res: {
    averageBlockSize: IStatisticDataItem[],
    fee24: IStatisticDataItem[],
    height: IStatisticDataItem[],
    speed: IStatisticDataItem[],
    txsAverageBlock: IStatisticDataItem[],
    txsCount24: IStatisticDataItem[],
  }
}

export interface IGetFunctionalData {
  res: {
    addresses: IStatisticDataItem[],
    addressesMultisig: IStatisticDataItem[],
    swaps: IStatisticDataItem[],
  }
}
