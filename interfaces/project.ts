export type status = "todo" | "doing" | "done" | "reviewing";

export default interface project {
  id: string;
  name: string;
  description: string;
  status: status;
  toolsId: string[];
  modified: number;
  notes: string[];
}
