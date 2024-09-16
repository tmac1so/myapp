import { atom } from "jotai";

export interface Action {
  id: number;
  date: string;
  content: string;
}

export const actionsAtom = atom<Action[]>([]);
