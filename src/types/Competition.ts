export const competition = ["U12", "U14", "U16", "Junior", "Open"] as const;

export type Competition = (typeof competition)[number];
