import p5 from 'p5'
import { Cell, CellState, check_neighbors, get_new_state } from './cell'

let board: Cell[][] = []

const SIZE = 50


let s = (sketch: p5) => {
    sketch.setup = () => {
        sketch.createCanvas(SIZE * 10, SIZE * 10)
        sketch.noStroke()
        sketch.background(52, 73, 94)
        sketch.textAlign(sketch.LEFT, sketch.TOP)
        for (let i = 0; i < SIZE; i++) {
            board[i] = []
            for (let j = 0; j < SIZE; j++) {
                const state = sketch.random([CellState.Alive, CellState.Dead])
                board[i][j] = new Cell(state)
            }
        }
    }

    sketch.draw = () => {
        let new_board: Cell[][] = []

        for (let y = 0; y < SIZE; y++) {
            for (let x = 0; x < SIZE; x++) {
                const cell = board[x][y];
                if (cell.state === CellState.Alive)
                    sketch.fill(39, 174, 96, 15)
                else
                    sketch.fill(52, 73, 94, 20)
                sketch.rect(x * 10, y * 10, 10, 10)
            }
        }

        for (let x = 0; x < SIZE; x++) {
            new_board[x] = []
            for (let y = 0; y < SIZE; y++) {
                const cell = board[x][y];
                const neighbor_count = check_neighbors(board, x, y)
                let new_state = get_new_state(cell, neighbor_count)

                if (sketch.random() < 0.0001) {
                    new_state = CellState.Alive
                    sketch.fill(241, 196, 15, 35)
                    sketch.rect(x * 10, y * 10, 10, 10)
                }
                new_board[x][y] = new Cell(new_state)
            }
        }

        board = new_board
    }
}

new p5(s)