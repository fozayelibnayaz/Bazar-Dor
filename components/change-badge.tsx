import type { ChangeDir } from "@/types";
import { bnPercent } from "@/lib/bn";
import { changeArrow } from "@/lib/change";

const tones: Record<ChangeDir, string> = {
  up: "bg-up-soft text-up",
  down: "bg-down-soft text-down",
  flat: "bg-flat-soft text-flat",
};

export default function ChangeBadge({ dir, pct }: { dir: ChangeDir; pct: number }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold ${tones[dir]}`}
    >
      {changeArrow(dir)} {bnPercent(pct)}
    </span>
  );
}