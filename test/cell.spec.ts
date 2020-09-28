import 'mocha'
import { expect } from 'chai'

import { Cell, CellState, check_neighbors, get_new_state } from '../src/cell'

describe('Cell', () => {
    describe('Initialization', () => {
        it('should be initialized with default value', () => {
            const cell = new Cell()
            expect(cell.state).to.equal(CellState.Dead)
        })

        it('should set state to alive', () => {
            const cell = new Cell(CellState.Alive)
            expect(cell.state).to.equal(CellState.Alive)
        })

        it('should set state to dead', () => {
            const cell = new Cell(CellState.Dead)
            expect(cell.state).to.equal(CellState.Dead)
        })
    })
})

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

    describe('edge cases', () => {
        it('should return 1 neighbor while on edge', () => {
            const board = [
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(CellState.Alive), new Cell()],
                [new Cell(), new Cell(), new Cell()]
            ]

            expect(check_neighbors(board, 2, 0)).to.equal(1)
        })
    })
})

describe('Rules', () => {
    describe('cell starts alive', () => {
        it('should return alive with 2 neighbors', () => {
            const cell = new Cell(CellState.Alive)

            expect(get_new_state(cell, 2)).to.equal(CellState.Alive)
        })

        it('should return alive with 3 neighbors', () => {
            const cell = new Cell(CellState.Alive)

            expect(get_new_state(cell, 3)).to.equal(CellState.Alive)
        })

        it('should return dead with 4 neighbors', () => {
            const cell = new Cell(CellState.Alive)

            expect(get_new_state(cell, 4)).to.equal(CellState.Dead)
        })

        it('should return alive with 1 neighbors', () => {
            const cell = new Cell(CellState.Alive)

            expect(get_new_state(cell, 1)).to.equal(CellState.Dead)
        })
    })

    describe('cell starts dead', () => {
        it('should return alive with 3 neighbors', () => {
            const cell = new Cell(CellState.Dead)

            expect(get_new_state(cell, 3)).to.equal(CellState.Alive)
        })

        it('should return dead with 2 neighbors', () => {
            const cell = new Cell(CellState.Dead)

            expect(get_new_state(cell, 2)).to.equal(CellState.Dead)
        })

        it('should return dead with 4 neighbors', () => {
            const cell = new Cell(CellState.Dead)

            expect(get_new_state(cell, 4)).to.equal(CellState.Dead)
        })
    })
})