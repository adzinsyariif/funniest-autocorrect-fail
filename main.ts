import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Shortlist, narrowed from six draft candidates:
// - "rest in peas" (peace) was clear but too gentle — the wrong word charms
//   instead of detonating.
// - "nude budget proposal" (new) landed, but the intended word is slightly
//   less instant than the winner.
// - "great sax" (sex), "defiling Grandma's paperwork" (filing), and
//   "for desert" (dessert) each needed a beat too long to decode.
//
// Winner: "pubic" for "public". The intended phrase "public speaking" is
// one every reader knows, so the slip is visible instantly, the wrong word
// is a complete surprise in a sincere good-luck text, and the joke needs
// no setup or explanation.
// Polished wording: "Break a leg" opens like a real pre-show text,
// "the whole office is coming to watch" raises the stakes of the slip,
// and "debut" makes the first-impression disaster even sharper.
const entry: string =
  "Break a leg today! The whole office is coming to watch your big pubic speaking debut and I know you're going to crush it.";

const outputPath = "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, entry + "\n", "utf8");
