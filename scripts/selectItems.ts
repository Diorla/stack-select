import Chance from "chance";
const chance = new Chance();

export type itemType = {
  id: string;
  [key: string]: any;
};

export default function selectItems(
  items: itemType[],
  weight: number[],
  length: number
): itemType[] {
  let tempItems = [...items];
  let tempWeight = [...weight];
  let currentItems: itemType[] = [];
  while (currentItems.length < length && tempItems.length) {
    const item = chance.weighted(tempItems, tempWeight);
    const idx = tempItems.findIndex(
      (currentItem) => item.id === currentItem.id
    );
    currentItems.push(item);
    tempItems = [...tempItems.slice(0, idx), ...tempItems.slice(idx + 1)];
    tempWeight = [...tempWeight.slice(0, idx), ...tempWeight.slice(idx + 1)];
  }
  return currentItems;
}
