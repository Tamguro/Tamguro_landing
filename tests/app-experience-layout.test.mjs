import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const appExperiencePath = new URL(
  "../components/sections/AppExperience.tsx",
  import.meta.url,
);
const phoneMockupPath = new URL(
  "../components/PhoneMockup.tsx",
  import.meta.url,
);
const globalsPath = new URL("../app/globals.css", import.meta.url);

test("App Experience pins a stage and slides 01 → 03 horizontally on desktop", async () => {
  const [appExperience, phoneMockup, globals] = await Promise.all([
    readFile(appExperiencePath, "utf8"),
    readFile(phoneMockupPath, "utf8"),
    readFile(globalsPath, "utf8"),
  ]);

  assert.match(phoneMockup, /compact:\s*264/);
  // tall runway + sticky stage on desktop
  assert.match(appExperience, /lg:h-\[340vh\]/);
  assert.match(appExperience, /lg:sticky/);
  // three panels side by side, track translated by the eased step
  assert.match(appExperience, /lg:w-\[300%\]/);
  assert.match(globals, /translate3d\(calc\(var\(--e\) \* -100% \/ 3\)/);
  // small screens fall back to a native swipe carousel
  assert.match(appExperience, /snap-x snap-mandatory/);
});

test("App Experience accent halos are crisp rather than blurred", async () => {
  const appExperience = await readFile(appExperiencePath, "utf8");

  assert.doesNotMatch(appExperience, /\bblur(?:-|\b)/);
});
