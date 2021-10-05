export default function toggleItemInList<type>(
  list: type[],
  item: type
): type[] {
  const idx = list.indexOf(item);
  if (idx < 0) return [...list, item];
  return [...list.slice(0, idx), ...list.slice(idx + 1)];
}
