export const generateArray = (length: number) => {
  return [...Array(length).keys()];
}

export const formatWord = (word: string) => (
  word
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toUpperCase()
);
