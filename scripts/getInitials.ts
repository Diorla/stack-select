/**
 * Returns initial from user's name, for avatar
 * @param name string
 * @returns string
 * @example getInitials("John Doe") // JD
 * @example getInitials("John") // JO
 * @example getInitials("j") // JJ
 */
export default function getInitials(name: string) {
  const nameArr = name.split(" ");
  if (nameArr.length > 1)
    return `${nameArr[0][0]}${nameArr[1][0]}`.toUpperCase();
  if (name.length > 1) return `${name[0]}${name[1]}`.toUpperCase();
  return `${name}${name}`.toUpperCase();
}
