'use client';
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from 'react';
import { type BoardStore, createBoardStore, BoardStoreProps } from './store';
import { useStore } from 'zustand';

export const BoardContext = createContext<ReturnType<
  typeof createBoardStore
> | null>(null);

export const BoardProvider: React.FC<PropsWithChildren & BoardStoreProps> = ({
  children,
  boardSize = 8,
}) => {
  const store = useRef(createBoardStore({ boardSize })).current;
  return (
    <BoardContext.Provider value={store}>{children}</BoardContext.Provider>
  );
};

export function useBoardStore<T>(selector: (state: BoardStore) => T): T {
  const store = useContext(BoardContext);
  if (store === null) {
    throw new Error('No Board Provider Found');
  }
  return useStore(store, selector);
}
