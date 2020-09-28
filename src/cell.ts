import { min, max } from "mathjs";

export enum CellState {
    Alive,
    Dead
}

export class Cell {
    state: CellState

    constructor(initial_state: CellState = CellState.Dead) {
        this.state = initial_state
    }

    
    public get display() : string {
        return this.state === CellState.Alive ? 'o' : '*'
    }
    
}

export function check_neighbors(board: Cell[][], row: number, col: number): number {
    if (board.length === 0) return 0

    const boardSize = board.length
    let neighborCount = 0

    for (let y = max(0, col - 1); y <= min(col + 1, boardSize - 1); y++) {
        for (let x = max(0, row - 1); x <= min(row + 1, boardSize - 1); x++) {
            if (y === col && x === row) continue

            const cell = board[x][y]
            neighborCount += cell.state === CellState.Alive ? 1 : 0
        }
    }

    return neighborCount
}

export function get_new_state(cell: Cell, neighbors_count: number): CellState {
    switch (cell.state) {
        case CellState.Alive:

            if(neighbors_count > 1 && neighbors_count < 4)
                return CellState.Alive
            else
                return CellState.Dead
            break;

        case CellState.Dead:
            if(neighbors_count === 3)
                return CellState.Alive
            else
                return CellState.Dead
            break;
    }
}