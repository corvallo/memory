export default async function generateBoard(boardSize: number) {
  return [
    ...Array.from({ length: boardSize ** 2 }, (_, i) =>
      i + 1 > boardSize ** 2 / 2 ? i + 1 - boardSize ** 2 / 2 : i + 1
    ).sort(() => 0.5 - Math.random()),
  ];
}
