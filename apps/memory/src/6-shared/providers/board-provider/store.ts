import { createStore } from 'zustand';

export interface BoardStoreProps {
  boardSize?: number;
  boardElements: number[];
}
export interface BoardStore {
  boardSize: number;
  boardElements: number[];
  activeElement: { index: number; value: number } | null;
  onCardClick: ({ index, value }: { index: number; value: number }) => void;
}
export const createBoardStore = ({
  boardSize = 8,
  boardElements = [],
}: BoardStoreProps) =>
  createStore<BoardStore>((set) => ({
    boardSize,
    boardElements,
    activeElement: null,

    onCardClick: ({ index, value }) => {
      set((s) => {
        if (s.activeElement?.index === index) return s;

        if (s.activeElement?.value === value) {
          return {
            activeElement: null,
            boardElements: [
              ...s.boardElements.map((v) => (v === value ? 0 : v)),
            ],
          };
        }
        if (!s.activeElement) {
          return {
            activeElement: { index, value },
          };
        }
        return {
          activeElement: null,
        };
      });
    },
  }));
