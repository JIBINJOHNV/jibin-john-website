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
  ["sage eyebrow on darkest surface", "#9bc3a6", "#171c1a"],
  ["sage eyebrow on lightest dark surface", "#9bc3a6", "#34443c"],
  ["muted text on lightest dark surface", "#b9c6bd", "#34443c"],
  ["chip text on lightest dark surface", "#d4dfd7", "#34443c"],
  ["copper note on lightest dark surface", "#e6aa84", "#34443c"],
  ["dark CTA text on sage", "#171c1a", "#7fae91"],
];

test("small brand text meets WCAG AA contrast", () => {
  for (const [label, foreground, background] of smallTextPairs) {
    assert.ok(
      contrast(foreground, background) >= 4.5,
      `${label} has insufficient contrast: ${contrast(foreground, background).toFixed(2)}:1`,
    );
  }
});
