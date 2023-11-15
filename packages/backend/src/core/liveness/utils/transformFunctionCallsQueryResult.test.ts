import { EthereumAddress, ProjectId, UnixTime } from '@l2beat/shared-pure'
import { expect } from 'earl'

import { LivenessRecord } from '../../../peripherals/database/LivenessRepository'
import { LivenessFunctionCall } from '../types/LivenessConfig'
import { BigQueryFunctionCallsResult } from '../types/model'
import { transformFunctionCallsQueryResult } from './transformFunctionCallsQueryResult'

describe(transformFunctionCallsQueryResult.name, () => {
  it('should transform results', () => {
    const ADDRESS_1 = EthereumAddress.random()
    const ADDRESS_2 = EthereumAddress.random()
    const ADDRESS_3 = EthereumAddress.random()
    const sinceTimestamp = UnixTime.now()

    const config: Omit<LivenessFunctionCall, 'id'>[] = [
      {
        projectId: ProjectId('project1'),
        address: ADDRESS_1,
        selector: '0x095e4',
        type: 'STATE',
        sinceTimestamp,
        livenessConfigurationId: 1,
      },
      {
        projectId: ProjectId('project1'),
        address: ADDRESS_2,
        selector: '0x915d9',
        type: 'DA',
        sinceTimestamp,
        livenessConfigurationId: 2,
      },
      {
        projectId: ProjectId('project2'),
        address: ADDRESS_3,
        selector: '0x90d5e',
        type: 'STATE',
        sinceTimestamp,
        livenessConfigurationId: 3,
      },
    ]
    const queryResults: BigQueryFunctionCallsResult = [
      {
        transaction_hash: '0x09e353ae9ee709e353ad7849cf30e4dc19',
        block_number: 1,
        block_timestamp: UnixTime.fromDate(new Date('2022-01-01T01:00:00Z')),
        input: '0x095e44fa24d87dedd2d351b485868bff700e0',
        to_address: ADDRESS_1,
      },
      {
        transaction_hash: '0x92b857ae9ee709e353ad7849cf30e4dc19',
        block_number: 2,
        block_timestamp: UnixTime.fromDate(new Date('2022-01-01T02:00:00Z')),
        input: '0x915d9fa24d87dedd2d351b485868bff700e0',
        to_address: ADDRESS_2,
      },
      {
        transaction_hash: '0xb4858ae9ee709e353ad7849cf30e4dc19',
        block_number: 3,
        block_timestamp: UnixTime.fromDate(new Date('2022-01-01T03:00:00Z')),
        input: '0x90d5efa24d87dedd2d351b485868bff700e0',
        to_address: ADDRESS_3,
      },
    ]
    const expected: LivenessRecord[] = [
      {
        blockNumber: 1,
        timestamp: UnixTime.fromDate(new Date('2022-01-01T01:00:00Z')),
        txHash: '0x09e353ae9ee709e353ad7849cf30e4dc19',
        livenessConfigurationId: 1,
      },
      {
        blockNumber: 2,
        timestamp: UnixTime.fromDate(new Date('2022-01-01T02:00:00Z')),
        txHash: '0x92b857ae9ee709e353ad7849cf30e4dc19',
        livenessConfigurationId: 2,
      },
      {
        blockNumber: 3,
        timestamp: UnixTime.fromDate(new Date('2022-01-01T03:00:00Z')),
        txHash: '0xb4858ae9ee709e353ad7849cf30e4dc19',
        livenessConfigurationId: 3,
      },
    ]

    expect(transformFunctionCallsQueryResult(config, queryResults)).toEqual(
      expected,
    )
  })
})