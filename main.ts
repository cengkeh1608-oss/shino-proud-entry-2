import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = [
  "You wobble down the driveway on your new bike, your father jogging behind with one hand on the seat, his shoes slapping the pavement, shouting pedal, pedal.",
  "At the corner you look back and he stopped three houses ago, hands on his knees, grinning, and you are riding alone.",
].join("\n");

const OUT_PATH = "/output/entry.txt";

// Gate check, same as the sealed scorer: 1-280 chars, not only whitespace.
const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-280 chars, got ${ENTRY.length}`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");
