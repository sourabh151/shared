import { create } from "zustand"

export type BoardState = {
    board: number[][],
    score: number,
    setBoard: (board: number[][]) => void,
    setScore: (score: number) => void
}

export const useBoard = create<BoardState>((set => ({
    board: Array.from({ length: 4 }, () => Array(4).fill(0)),
    score: 0,
    setBoard: (board: number[][]) => set({ board: board }),
    setScore: (score: number) => set({ score: score })
})))