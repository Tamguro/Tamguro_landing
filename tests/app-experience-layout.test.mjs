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

test("App Experience matches the approved Figma desktop geometry", async () => {
  const [appExperience, phoneMockup] = await Promise.all([
    readFile(appExperiencePath, "utf8"),
    readFile(phoneMockupPath, "utf8"),
  ]);

  assert.match(phoneMockup, /compact:\s*264/);
  assert.match(appExperience, /lg:px-\[120px\]/);
  assert.match(appExperience, /lg:h-\[360px\]/);
  assert.match(appExperience, /lg:h-\[657px\]/);
  assert.match(appExperience, /gap-\[63px\]/);
  assert.match(appExperience, /lg:top-\[170px\]/);
  assert.match(appExperience, /lg:top-\[137\.5px\]/);
  assert.match(appExperience, /lg:size-\[345px\]/);
});

test("App Experience accent halos are crisp rather than blurred", async () => {
  const appExperience = await readFile(appExperiencePath, "utf8");

  assert.doesNotMatch(appExperience, /\bblur(?:-|\b)/);
});
