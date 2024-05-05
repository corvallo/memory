export default async function generateBoard(boardSize: number) {
  return [
    ...Array.from({ length: boardSize * boardSize }, (_, i) => i + 1)
      .concat(Array.from({ length: boardSize * boardSize }, (_, i) => i + 1))
      .sort(() => 0.5 - Math.random()),
  ];
}
