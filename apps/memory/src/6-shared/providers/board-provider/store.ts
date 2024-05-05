import { createStore } from 'zustand';

export interface BoardStoreProps {
  boardSize?: number;
  boardElements: number[];
}
export interface BoardStore {
  boardSize: number;
  boardElements: number[];
  clickedElements: { index: number; value: number } | null;
  onCardClick: ({ index, value }: { index: number; value: number }) => void;
}
export const createBoardStore = ({
  boardSize = 8,
  boardElements = [],
}: BoardStoreProps) =>
  createStore<BoardStore>((set) => ({
    boardSize,
    boardElements,
    clickedElements: null,
    onCardClick: ({ index, value }) => {
      set((s) => {
        if (s.clickedElements?.index === index) return s;

        if (s.clickedElements?.value === value) {
          return {
            clickedElements: null,
            boardElements: [
              ...s.boardElements.map((v) => (v === value ? 0 : v)),
            ],
          };
        }
        if (!s.clickedElements) {
          return {
            clickedElements: { index, value },
          };
        }
        return {
          clickedElements: null,
        };
      });
    },
  }));
