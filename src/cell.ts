import { min, max } from "mathjs";

export enum CellState{
    Alive,
    Dead
}

export class Cell{
    state: CellState
    
    constructor(initial_state: CellState = CellState.Dead) {
        this.state = initial_state
    }
}

export function check_neighbors(board: Cell[][], row: number, col: number): number{
    if(board.length === 0) return 0

    const boardSize = board.length
    let neighborCount = 0

    for(let y = max(0, col - 1); y <= min(col + 1, boardSize); y++){
        for(let x = max(0, row - 1); x <= min(row + 1, boardSize); x++){
            if(y === col && x === row) continue

            const cell = board[x][y]
            neighborCount += cell.state === CellState.Alive ? 1 : 0
        }
    }

    return neighborCount
}