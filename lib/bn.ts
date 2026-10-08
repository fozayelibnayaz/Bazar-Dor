const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

const bnWeekdays = [
  "রবিবার",
  "সোমবার",
  "মঙ্গলবার",
  "বুধবার",
  "বৃহস্পতিবার",
  "শুক্রবার",
  "শনিবার",
];

const bnMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

export function toBn(value: string | number) {
  return String(value).replace(/\d/g, (digit) => bnDigits[Number(digit)]);
}

export function bnNumber(value: number) {
  return toBn(value.toLocaleString("en-IN"));
}

export function bnMoney(value: number) {
  const fractions = Number.isInteger(value) ? 0 : 2;
  return toBn(
    value.toLocaleString("en-IN", {
      minimumFractionDigits: fractions,
      maximumFractionDigits: fractions,
    }),
  );
}

export function bnPercent(value: number) {
  return `${toBn(Math.abs(value).toFixed(1))}%`;
}

export function banglaDate(now: Date = new Date()) {
  const dhaka = new Date(now.getTime() + 6 * 60 * 60 * 1000);
  const weekday = bnWeekdays[dhaka.getUTCDay()];
  const day = toBn(dhaka.getUTCDate());
  const month = bnMonths[dhaka.getUTCMonth()];
  const year = toBn(dhaka.getUTCFullYear());
  return `${weekday}, ${day} ${month}, ${year}`;
}