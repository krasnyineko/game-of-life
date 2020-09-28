import 'mocha'
import { expect } from 'chai'

import { check_neighbors } from '../src/index'
import { Cell, CellState } from '../src/cell';

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

        it('should return 1 when there are is 1 living neighbors', () => {
            const board = [
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(), new Cell(CellState.Alive)],
                [new Cell(), new Cell(), new Cell()]
            ]

            expect(check_neighbors(board, 1, 1)).to.equal(1)
        })

        it('should return 8 when there are is 8 living neighbors', () => {
            const board = [
                [new Cell(CellState.Alive), new Cell(CellState.Alive), new Cell(CellState.Alive)],
                [new Cell(CellState.Alive), new Cell(), new Cell(CellState.Alive)],
                [new Cell(CellState.Alive), new Cell(CellState.Alive), new Cell(CellState.Alive)]
            ]

            expect(check_neighbors(board, 1, 1)).to.equal(8)
        })
    })
})