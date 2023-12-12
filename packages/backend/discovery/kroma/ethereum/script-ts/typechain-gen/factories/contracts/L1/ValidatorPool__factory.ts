/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  ValidatorPool,
  ValidatorPoolInterface,
} from '../../../contracts/L1/ValidatorPool'

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract L2OutputOracle',
        name: '_l2OutputOracle',
        type: 'address',
      },
      {
        internalType: 'contract KromaPortal',
        name: '_portal',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_securityCouncil',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_trustedValidator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_requiredBondAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxUnbond',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_roundDuration',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'outputIndex',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'challenger',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'amount',
        type: 'uint128',
      },
    ],
    name: 'BondIncreased',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'submitter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'outputIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'amount',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'expiresAt',
        type: 'uint128',
      },
    ],
    name: 'Bonded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'outputIndex',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'challenger',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'amount',
        type: 'uint128',
      },
    ],
    name: 'PendingBondAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'outputIndex',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'challenger',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'amount',
        type: 'uint128',
      },
    ],
    name: 'PendingBondReleased',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'outputIndex',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'amount',
        type: 'uint128',
      },
    ],
    name: 'Unbonded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'L2_ORACLE',
    outputs: [
      {
        internalType: 'contract L2OutputOracle',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_UNBOND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PORTAL',
    outputs: [
      {
        internalType: 'contract KromaPortal',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'REQUIRED_BOND_AMOUNT',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ROUND_DURATION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SECURITY_COUNCIL',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TAX_DENOMINATOR',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TAX_NUMERATOR',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRUSTED_VALIDATOR',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VAULT_REWARD_GAS_LIMIT',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_outputIndex',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_challenger',
        type: 'address',
      },
    ],
    name: 'addPendingBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_addr',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_outputIndex',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: '_expiresAt',
        type: 'uint128',
      },
    ],
    name: 'createBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_outputIndex',
        type: 'uint256',
      },
    ],
    name: 'getBond',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'expiresAt',
            type: 'uint128',
          },
        ],
        internalType: 'struct Types.Bond',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_outputIndex',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_challenger',
        type: 'address',
      },
    ],
    name: 'getPendingBond',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_outputIndex',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_challenger',
        type: 'address',
      },
    ],
    name: 'increaseBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_addr',
        type: 'address',
      },
    ],
    name: 'isValidator',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nextValidator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_outputIndex',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_challenger',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
    ],
    name: 'releasePendingBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unbond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'validatorCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

const _bytecode =
  '0x6101c06040523480156200001257600080fd5b506040516200254e3803806200254e833981016040819052620000359162000261565b6001608052600060a081905260c0526001600160a01b0380881660e05286811661010052858116610120528416610140526001600160801b038316610160526101808290526101a08190526200008a62000097565b50505050505050620002e8565b600054610100900460ff1615808015620000b85750600054600160ff909116105b80620000e85750620000d530620001c960201b6200135d1760201c565b158015620000e8575060005460ff166001145b620001515760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801562000175576000805461ff0019166101001790555b6200017f620001d8565b8015620001c6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6001600160a01b03163b151590565b600054610100900460ff16620002455760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840162000148565b60018055565b6001600160a01b0381168114620001c657600080fd5b600080600080600080600060e0888a0312156200027d57600080fd5b87516200028a816200024b565b60208901519097506200029d816200024b565b6040890151909650620002b0816200024b565b6060890151909550620002c3816200024b565b809450506080880151925060a0880151915060c0880151905092959891949750929550565b60805160a05160c05160e05161010051610120516101405161016051610180516101a05161215e620003f06000396000818161033601526108d7015260008181610402015261179f01526000818161047b01528181610ae201528181610b4201528181610f3a01528181610f690152818161144801526115ef0152600081816102ab01526109250152600081816102420152818161127301526116330152600081816101ec0152611aa601526000818161017c015281816105f9015281816107a10152818161082f015281816109ec01528181610d8901528181610ebf015281816110c40152611831015260006109a0015260006109770152600061094e015261215e6000f3fe6080604052600436106101655760003560e01c806370a08231116100d1578063ab91f1901161008a578063d38dc7ee11610064578063d38dc7ee146104a5578063d8fe7642146104c5578063dd215c5d1461050c578063facd743b1461052c57600080fd5b8063ab91f19014610439578063b7d636a514610469578063d0e30db01461049d57600080fd5b806370a08231146103585780638129fc1c1461038e57806382dae3aa146103a35780638f09ade4146103d0578063946765fd146103f0578063a51c9ace1461042457600080fd5b80633a549046116101235780633a549046146102845780633ee4d4a31461029957806354fd4d50146102cd5780635a544742146102ef5780635df6a6bc1461030f5780636641ea081461032457600080fd5b80621c2ff61461016a5780630f43a677146101bb5780630ff754ea146101da5780632e1a7d4d1461020e578063360864171461023057806336b8346914610264575b600080fd5b34801561017657600080fd5b5061019e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101c757600080fd5b506036545b6040519081526020016101b2565b3480156101e657600080fd5b5061019e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561021a57600080fd5b5061022e610229366004611c5b565b61055c565b005b34801561023c57600080fd5b5061019e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561027057600080fd5b5061022e61027f366004611c89565b6105f7565b34801561029057600080fd5b5061019e610789565b3480156102a557600080fd5b5061019e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d957600080fd5b506102e2610947565b6040516101b29190611d27565b3480156102fb57600080fd5b5061022e61030a366004611d3a565b6109ea565b34801561031b57600080fd5b5061022e610ba7565b34801561033057600080fd5b506101cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036457600080fd5b506101cc610373366004611d6a565b6001600160a01b031660009081526033602052604090205490565b34801561039a57600080fd5b5061022e610c12565b3480156103af57600080fd5b506103b8601481565b6040516001600160801b0390911681526020016101b2565b3480156103dc57600080fd5b506103b86103eb366004611d3a565b610d22565b3480156103fc57600080fd5b506101cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561043057600080fd5b506103b8606481565b34801561044557600080fd5b50610450620186a081565b60405167ffffffffffffffff90911681526020016101b2565b34801561047557600080fd5b506103b87f000000000000000000000000000000000000000000000000000000000000000081565b61022e610d72565b3480156104b157600080fd5b5061022e6104c0366004611d9c565b610d7e565b3480156104d157600080fd5b506104e56104e0366004611c5b565b610fef565b6040805182516001600160801b0390811682526020938401511692810192909252016101b2565b34801561051857600080fd5b5061022e610527366004611d3a565b6110c2565b34801561053857600080fd5b5061054c610547366004611d6a565b6112e6565b60405190151581526020016101b2565b61056461136c565b61056e33826113c5565b600061058b335a84604051806020016040528060008152506115a7565b9050806105ea5760405162461bcd60e51b815260206004820152602260248201527f56616c696461746f72506f6f6c3a20455448207472616e73666572206661696c604482015261195960f21b60648201526084015b60405180910390fd5b506105f460018055565b50565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639e45e8f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106799190611dc1565b6001600160a01b0316336001600160a01b0316146106a95760405162461bcd60e51b81526004016105e190611dde565b60008381526039602090815260408083206001600160a01b03861684529091529020546001600160801b0316806106f25760405162461bcd60e51b81526004016105e190611e24565b60008481526039602090815260408083206001600160a01b0387168452909152902080546001600160801b0319169055610735826001600160801b0383166115c7565b6040516001600160801b03821681526001600160a01b03808416919085169086907f8c95336a279406edcc768d685e8eb6667368a77d840a188144b8e3719423198f9060200160405180910390a450505050565b6038546000906001600160a01b0316156109225760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663dcec33486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190611e72565b905060006001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663d1de856c61085f846001611ea1565b6040518263ffffffff1660e01b815260040161087d91815260200190565b602060405180830381865afa15801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be9190611e72565b905080421061090f5760006108d38242611eb9565b90507f000000000000000000000000000000000000000000000000000000000000000081111561090d576001600160a01b03935050505090565b505b50506038546001600160a01b0316919050565b507f000000000000000000000000000000000000000000000000000000000000000090565b60606109727f00000000000000000000000000000000000000000000000000000000000000006116da565b61099b7f00000000000000000000000000000000000000000000000000000000000000006116da565b6109c47f00000000000000000000000000000000000000000000000000000000000000006116da565b6040516020016109d693929190611ed0565b604051602081830303815290604052905090565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639e45e8f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6c9190611dc1565b6001600160a01b0316336001600160a01b031614610a9c5760405162461bcd60e51b81526004016105e190611dde565b6000828152603460205260409020805442600160801b9091046001600160801b03161015610adc5760405162461bcd60e51b81526004016105e190611f2a565b610b0f827f00000000000000000000000000000000000000000000000000000000000000006001600160801b03166113c5565b60008381526039602090815260408083206001600160a01b0386168085529083529281902080546001600160801b0319167f00000000000000000000000000000000000000000000000000000000000000006001600160801b0316908117909155905190815285917f2904258f32adf74dd8f23ad6f17ff50209896039c8ee3d4728ff55bd05c4cf2a910160405180910390a3505050565b6000610bb161176d565b9050806105f45760405162461bcd60e51b815260206004820152602960248201527f56616c696461746f72506f6f6c3a206e6f20626f6e6420746861742063616e206044820152681899481d5b989bdb9960ba1b60648201526084016105e1565b600054610100900460ff1615808015610c325750600054600160ff909116105b80610c4c5750303b158015610c4c575060005460ff166001145b610caf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105e1565b6000805460ff191660011790558015610cd2576000805461ff0019166101001790555b610cda61194e565b80156105f4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b60008281526039602090815260408083206001600160a01b03851684529091528120546001600160801b031680610d6b5760405162461bcd60e51b81526004016105e190611e24565b9392505050565b610d7c33346115c7565b565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e0a5760405162461bcd60e51b815260206004820152602b60248201527f56616c696461746f72506f6f6c3a2073656e646572206973206e6f74204c324f60448201526a75747075744f7261636c6560a81b60648201526084016105e1565b60008281526034602052604090208054600160801b90046001600160801b031615610e9d5760405162461bcd60e51b815260206004820152603c60248201527f56616c696461746f72506f6f6c3a20626f6e64206f662074686520676976656e60448201527f206f757470757420696e64657820616c7265616479206578697374730000000060648201526084016105e1565b610ea561176d565b5060405163161d413560e31b8152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b0ea09a890602401602060405180830381865afa158015610f0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f329190611dc1565b9050610f67817f00000000000000000000000000000000000000000000000000000000000000006001600160801b03166113c5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160801b03908116600160801b9185169182028117845560408051918252602082019290925285916001600160a01b038416917f5ca130257b8f76f72ad2965efcbe166f3918d820e4a49956e70081ea311f97c4910160405180910390a350505050565b6040805180820190915260008082526020820152600082815260346020526040902080546001600160801b03161580159061103a57508054600160801b90046001600160801b031615155b6110955760405162461bcd60e51b815260206004820152602660248201527f56616c696461746f72506f6f6c3a2074686520626f6e6420646f6573206e6f7460448201526508195e1a5cdd60d21b60648201526084016105e1565b6040805180820190915290546001600160801b038082168352600160801b90910416602082015292915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639e45e8f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015611120573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111449190611dc1565b6001600160a01b0316336001600160a01b0316146111745760405162461bcd60e51b81526004016105e190611dde565b6000828152603460205260409020805442600160801b9091046001600160801b031610156111b45760405162461bcd60e51b81526004016105e190611f2a565b60008381526039602090815260408083206001600160a01b03861684529091529020546001600160801b0316806111fd5760405162461bcd60e51b81526004016105e190611e24565b6000606461120c601484611f78565b6112169190611fbd565b905060006112248284611fe3565b60008781526039602090815260408083206001600160a01b038a811680865291845282852080546001600160801b03199081169091558a549081166001600160801b0391821688018216178b557f00000000000000000000000000000000000000000000000000000000000000009091168552603384529382902080548886160190559051928416835292935088917f383f9b8b5a1fc2ec555726eb895621a312042e18b764135fa12ef1a520ad30db910160405180910390a3505050505050565b60365460009081036112fa57506000919050565b6001600160a01b03821661131057506000919050565b6001600160a01b03821660008181526037602052604090205460368054919291839081106113405761134061200b565b6000918252602090912001546001600160a01b0316149392505050565b6001600160a01b03163b151590565b6002600154036113be5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105e1565b6002600155565b6001600160a01b0382166000908152603360205260409020548181101561143a5760405162461bcd60e51b8152602060048201526024808201527f56616c696461746f72506f6f6c3a20696e73756666696369656e742062616c616044820152636e63657360e01b60648201526084016105e1565b6114448282611eb9565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160801b0316811080156114825750611482836112e6565b156115875760365460009061149990600190611eb9565b90508015611539576001600160a01b03841660009081526037602052604081205460368054919291849081106114d1576114d161200b565b600091825260209091200154603680546001600160a01b0390921692508291849081106115005761150061200b565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152603790915260409020555b6001600160a01b038416600090815260376020526040812055603680548061156357611563612021565b600082815260209020810160001990810180546001600160a01b0319169055019055505b6001600160a01b0390921660009081526033602052604090209190915550565b600080600080845160208601878a8af19695505050505050565b60018055565b6001600160a01b0382166000908152603360205260408120546115eb908390611ea1565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160801b0316811015801561162c575061162a836112e6565b155b15611587577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b03161461158757603680546001600160a01b03949094166000818152603760209081526040808320889055600188019094557f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b890960180546001600160a01b03191690921790915560339094529092209190915550565b606060006116e7836119b9565b600101905060008167ffffffffffffffff81111561170757611707612037565b6040519080825280601f01601f191660200182016040528015611731576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461173b57509392505050565b60355460408051608081018252600080825260208201819052918101829052606081018290529091908290819060005b7f000000000000000000000000000000000000000000000000000000000000000081101561191e57600085815260346020526040902080546001600160801b038082169650919450600160801b900416421080159061180557506000846001600160801b0316115b1561191e57600085815260346020526040808220919091555163a25ae55760e01b8152600481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a25ae55790602401608060405180830381865afa158015611880573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a4919061204d565b91506118bd8260000151856001600160801b03166115c7565b81516040516001600160801b03861681526001600160a01b039091169086907f7047a0fb8bfae78c0ebbd4117437945bb85240453235ac4fd2e55712eb5bf0c39060200160405180910390a361191282611a92565b6001948501940161179d565b8015611942576119318260200151611b89565b505050603591909155506001919050565b60009550505050505090565b600054610100900460ff166115c15760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105e1565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106119f85772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611a24576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611a4257662386f26fc10000830492506010015b6305f5e1008310611a5a576305f5e100830492506008015b6127108310611a6e57612710830492506004015b60648310611a80576064830492506002015b600a8310611a8c576001015b92915050565b805160608201516040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263c30af388926008602160991b0192620186a0926310b3879160e11b92611b0d926024016001600160a01b039290921682526001600160801b0316602082015260400190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199485161790525160e086901b9092168252611b549392916004016120d7565b600060405180830381600087803b158015611b6e57600080fd5b505af1158015611b82573d6000803e3d6000fd5b5050505050565b6036548015611c475760008183434144611ba4600184611eb9565b6040805160208101969096528501939093526bffffffffffffffffffffffff19606092831b1691840191909152607483015240609482015260b4016040516020818303038152906040528051906020012060001c611c029190612114565b905060368181548110611c1757611c1761200b565b600091825260209091200154603880546001600160a01b0319166001600160a01b03909216919091179055505050565b603880546001600160a01b03191690555050565b600060208284031215611c6d57600080fd5b5035919050565b6001600160a01b03811681146105f457600080fd5b600080600060608486031215611c9e57600080fd5b833592506020840135611cb081611c74565b91506040840135611cc081611c74565b809150509250925092565b60005b83811015611ce6578181015183820152602001611cce565b83811115611cf5576000848401525b50505050565b60008151808452611d13816020860160208601611ccb565b601f01601f19169290920160200192915050565b602081526000610d6b6020830184611cfb565b60008060408385031215611d4d57600080fd5b823591506020830135611d5f81611c74565b809150509250929050565b600060208284031215611d7c57600080fd5b8135610d6b81611c74565b6001600160801b03811681146105f457600080fd5b60008060408385031215611daf57600080fd5b823591506020830135611d5f81611d87565b600060208284031215611dd357600080fd5b8151610d6b81611c74565b60208082526026908201527f56616c696461746f72506f6f6c3a2073656e646572206973206e6f7420436f6c6040820152656f737365756d60d01b606082015260800190565b6020808252602e908201527f56616c696461746f72506f6f6c3a207468652070656e64696e6720626f6e642060408201526d191bd95cc81b9bdd08195e1a5cdd60921b606082015260800190565b600060208284031215611e8457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611eb457611eb4611e8b565b500190565b600082821015611ecb57611ecb611e8b565b500390565b60008451611ee2818460208901611ccb565b8083019050601760f91b8082528551611f02816001850160208a01611ccb565b60019201918201528351611f1d816002840160208801611ccb565b0160020195945050505050565b6020808252602e908201527f56616c696461746f72506f6f6c3a20746865206f757470757420697320616c7260408201526d1958591e48199a5b985b1a5e995960921b606082015260800190565b60006001600160801b0380831681851681830481118215151615611f9e57611f9e611e8b565b02949350505050565b634e487b7160e01b600052601260045260246000fd5b60006001600160801b0380841680611fd757611fd7611fa7565b92169190910492915050565b60006001600160801b038381169083168181101561200357612003611e8b565b039392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60006080828403121561205f57600080fd5b6040516080810181811067ffffffffffffffff8211171561209057634e487b7160e01b600052604160045260246000fd5b604052825161209e81611c74565b81526020838101519082015260408301516120b881611d87565b604082015260608301516120cb81611d87565b60608201529392505050565b6001600160a01b038416815267ffffffffffffffff8316602082015260606040820181905260009061210b90830184611cfb565b95945050505050565b60008261212357612123611fa7565b50069056fea26469706673582212201d7b823971086f6204f6bc242c6d5acc0ad159222af5308241e8d6da1059c18064736f6c634300080f0033'

type ValidatorPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: ValidatorPoolConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class ValidatorPool__factory extends ContractFactory {
  constructor(...args: ValidatorPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _l2OutputOracle: string,
    _portal: string,
    _securityCouncil: string,
    _trustedValidator: string,
    _requiredBondAmount: BigNumberish,
    _maxUnbond: BigNumberish,
    _roundDuration: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): Promise<ValidatorPool> {
    return super.deploy(
      _l2OutputOracle,
      _portal,
      _securityCouncil,
      _trustedValidator,
      _requiredBondAmount,
      _maxUnbond,
      _roundDuration,
      overrides || {},
    ) as Promise<ValidatorPool>
  }
  override getDeployTransaction(
    _l2OutputOracle: string,
    _portal: string,
    _securityCouncil: string,
    _trustedValidator: string,
    _requiredBondAmount: BigNumberish,
    _maxUnbond: BigNumberish,
    _roundDuration: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _l2OutputOracle,
      _portal,
      _securityCouncil,
      _trustedValidator,
      _requiredBondAmount,
      _maxUnbond,
      _roundDuration,
      overrides || {},
    )
  }
  override attach(address: string): ValidatorPool {
    return super.attach(address) as ValidatorPool
  }
  override connect(signer: Signer): ValidatorPool__factory {
    return super.connect(signer) as ValidatorPool__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ValidatorPoolInterface {
    return new utils.Interface(_abi) as ValidatorPoolInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ValidatorPool {
    return new Contract(address, _abi, signerOrProvider) as ValidatorPool
  }
}
