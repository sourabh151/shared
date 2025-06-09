import { create } from "zustand"

type Grid = {
  cells: [[number]]
}

export const useGridStore = create<Grid>((set) => {
  return {
    cells: new Array(10).fill(new Array(10).fill(0))
  }
})

