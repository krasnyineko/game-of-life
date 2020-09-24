import 'mocha'
import {expect} from 'chai'

import { Cell, CellState } from '../src/cell'

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