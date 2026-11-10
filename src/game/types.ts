// Theme-agnostic game types. Each theme (작품) supplies its own stat definitions.

export type StatDef = {
  id: string;
  label: string;
  initial: number;
  min: number;
  max: number;
  /** semantic token name used for the gauge color, e.g. "trust" -> bg-trust */
  tone: string;
};

export type Stats = Record<string, number>;

export type Character = {
  id: string;
  name: string;
  number?: string;
  /** optional image path; falls back to a drawn placeholder portrait */
  image?: string;
  /** semantic token used for placeholder portrait */
  tone: "primary" | "ink" | "orange" | "court" | "muted";
};

export type Line = { speaker?: string | undefined; text: string };

export type Choice = {
  label: string;
  effects: Stats;
  reactions: Line[];
};

export type Question = {
  id: string;
  title: string;
  background: string;
  cast: string[];
  lines: Line[];
  prompt: string;
  choices: Choice[];
};

export type Ending = {
  id: string;
  title: string;
  subtitle: string;
  background: string;
  lines: Line[];
  quote: string;
  retryLabel: string;
  /** returns true when the ending applies to the final stats */
  condition: (stats: Stats) => boolean;
};

export type Theme = {
  id: string;
  title: string;
  subtitle: string;
  stats: StatDef[];
  characters: Record<string, Character>;
  backgrounds: Record<string, { label: string; image?: string }>;
  opening: Line[];
  openingBanner: string;
  openingGuide: string[];
  howTo: string[];
  questions: Question[];
  /** evaluated in order; last one should be the fallback */
  endings: Ending[];
  /** external link to the original work; null until a real URL is provided */
  originalWorkUrl: string | null;
};
