import 'mocha'
import { expect } from 'chai'

import { check_neighbors } from '../src/index'
import { Cell } from '../src/cell';

describe('Check neighbors function', () => {
    describe('basic cases', () => {
        it('should return 0 when there are no living neighbors', () => {
            const board = [
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(), new Cell()]
            ]

            expect(check_neighbors(board, 1, 1)).to.equal(0)
        })

        it('should return 1 when there are no living neighbors', () => {
            const board = [
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(), new Cell()]
            ]

            expect(check_neighbors(board, 1, 1)).to.equal(0)
        })
    })
})