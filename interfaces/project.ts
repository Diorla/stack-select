export type status = 'todo' | 'doing' | 'done' | 'reviewing';
export type note = {
  content: string;
  date: number;
};
export default interface project {
  name: string;
  description: string;
  status: status;
  tools: string[];
  created: number;
  modified: number;
  notes: note[];
}
