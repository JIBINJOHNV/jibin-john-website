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
  ["dusty coral accent on deep oxblood", "#C98274", "#321C20"],
  ["warm blush accent on wine", "#EAD8D3", "#5A2E35"],
  ["body text on brick section", "#F1E5E2", "#6B3A40"],
  ["muted text on brick card", "#D8C5C3", "#6B3A40"],
  ["heading text on brick card", "#F7EFEC", "#6B3A40"],
  ["deep oxblood CTA text on dusty coral", "#321C20", "#C98274"],
];

test("small brand text meets WCAG AA contrast", () => {
  for (const [label, foreground, background] of smallTextPairs) {
    assert.ok(
      contrast(foreground, background) >= 4.5,
      `${label} has insufficient contrast: ${contrast(foreground, background).toFixed(2)}:1`,
    );
  }
});
