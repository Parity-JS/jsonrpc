// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

const { withPreamble } = require('../helpers');

module.exports = withPreamble(`
  The \`debug\` API gives you access to several non-standard RPC methods, which will allow you to inspect, debug and set certain debugging flags during runtime.
  `,
{
  getBadBlocks: {
    desc: 'Returns a list of the last "bad blocks" that the client has seen on the network.',
    params: [],
    example: '',
    returns: {
      type: Array,
      desc: 'List of "bad blocks" seen on the network.',
      example: [
        {
          author: '0x0000000000000000000000000000000000000000',
          difficulty: '0x0',
          extraData: '0x',
          gasLimit: '0x0',
          gasUsed: '0x0',
          hash: '0x27bfb37e507ce90da141307204b1c6ba24194380613590ac50ca4b1d7198ff65',
          logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          miner: '0x0000000000000000000000000000000000000000',
          number: '0x0',
          parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
          reason: 'Invalid block',
          receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
          rlp: '0x010203',
          sealFields: [],
          sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
          size: '0x3',
          stateRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
          timestamp: '0x0',
          totalDifficulty: null,
          transactions: [],
          transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
          uncles: []
        }
      ]
    }
  }
}
);
