/**
 * Note, this is a crude pluralization. It is not sensitive to irregular plurals, hence, child => childs(sic) not children
 * @param word the word that will be pluralized
 * @param size the count to determine if it is a plural or not
 * @returns plurals with a -s or not e.g. world => worlds
 */
export default function pluralByS(word: string, size: number) {
  if (Math.abs(size) < 2) return word;
  return `${word}s`;
}
