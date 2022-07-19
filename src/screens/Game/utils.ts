import {CardModal} from '../../components/Card/Card';

const generateRandomCards: () => CardModal[] = () => {
  const cards: CardModal[] = [];
  while (cards.length < 12) {
    var number = Math.floor(Math.random() * 100);
    if (cards.findIndex(card => card.number === number) === -1) {
      cards.push({number, id: cards.length});
      cards.push({number, id: cards.length + 6});
    }
  }
  return cards;
};

function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// generate 6 random pairs (6 uniques and duplicate it)
// shuffle it
export const generateGrid: () => CardModal[] = () => {
  const randomPairs = generateRandomCards();
  return shuffle(randomPairs);
};
