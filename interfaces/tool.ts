export default interface tool {
  id: string;
  name: string;
  description: string;
  /**
   * 1 to 5 stars
   */
  rating: number;
  modified: number;
  /**
   * Every tool should belong to a stack e.g. React is part of frontend stack because it is a frontend tool
   * The id will never change of course, but the name may be changed externally
   */
  stackId: string;
}
