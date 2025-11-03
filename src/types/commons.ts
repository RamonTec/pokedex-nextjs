
export interface IPagination<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export type ResultType<T, E = string> =
  | { ok: true; data: T }
  | { ok: false; error: E }