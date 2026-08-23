import assert from "node:assert/strict";
import test from "node:test";

function luminance(hex) {
  const channels = [1, 3, 5].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const linear = channels.map((channel) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(foreground, background) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

const smallTextPairs = [
  ["rose accent on deep ocean", "#d6aaa7", "#234453"],
  ["light rose accent on ocean", "#f0cdca", "#315d70"],
  ["body text on ocean section", "#f3f6f7", "#477487"],
  ["muted text on ocean card", "#edf2f3", "#3d687a"],
  ["heading text on ocean card", "#fbf8f7", "#3d687a"],
  ["deep ocean CTA text on soft rose", "#234453", "#d6aaa7"],
];

test("small brand text meets WCAG AA contrast", () => {
  for (const [label, foreground, background] of smallTextPairs) {
    assert.ok(
      contrast(foreground, background) >= 4.5,
      `${label} has insufficient contrast: ${contrast(foreground, background).toFixed(2)}:1`,
    );
  }
});
