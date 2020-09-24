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