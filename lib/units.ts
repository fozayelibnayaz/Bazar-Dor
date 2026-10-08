const unitLabels: Record<string, string> = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};

const unitShorts: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export function unitLabel(unit: string) {
  return unitLabels[unit] ?? `প্রতি ${unit}`;
}

export function unitShort(unit: string) {
  return unitShorts[unit] ?? unit;
}