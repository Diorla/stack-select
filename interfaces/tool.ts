export type stackInfo = {
  id: string;
  name: string;
};

export default interface tool {
  name: string;
  /**
   * 1 to 5 stars
   */
  rating: number;
  created: number;
  modified: number;
  /**
   * Every tool should belong to a stack e.g. React is part of frontend stack because it is a frontend tool
   * The id will never change of course, but the name may be changed externally
   */
  stack: stackInfo;
}
