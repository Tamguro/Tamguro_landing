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

test("App Experience pins one phone on desktop and stacks phones below lg", async () => {
  const [appExperience, phoneMockup] = await Promise.all([
    readFile(appExperiencePath, "utf8"),
    readFile(phoneMockupPath, "utf8"),
  ]);

  assert.match(phoneMockup, /compact:\s*264/);
  // desktop: sticky phone column driven by the step crossing mid-viewport
  assert.match(appExperience, /sticky top-\[calc\(50vh-300px\)\]/);
  assert.match(appExperience, /rootMargin: "-50% 0px -50% 0px"/);
  // small screens: each step renders its own phone inline
  assert.match(appExperience, /className="relative lg:hidden"/);
  assert.match(appExperience, /lg:size-\[345px\]/);
});

test("App Experience accent halos are crisp rather than blurred", async () => {
  const appExperience = await readFile(appExperiencePath, "utf8");

  assert.doesNotMatch(appExperience, /\bblur(?:-|\b)/);
});
