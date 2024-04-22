import { createStore } from 'zustand';

export interface BoardStoreProps {
  boardSize?: number;
}
export interface BoardStore {
  boardSize: number;
  boardElements: number[];
}
export const createBoardStore = ({ boardSize = 8 }: BoardStoreProps) =>
  createStore<BoardStore>((set) => ({
    boardSize,
    boardElements: Array.from({ length: boardSize }, (_, i) => i + 1)
      .concat(Array.from({ length: boardSize }, (_, i) => i + 1))
      .sort(() => 0.5 - Math.random()),
  }));
