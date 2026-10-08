import type { ChangeDir } from "@/types";

export function changeArrow(dir: ChangeDir) {
  if (dir === "up") return "▲";
  if (dir === "down") return "▼";
  return "—";
}

export function changeTone(dir: ChangeDir) {
  if (dir === "up") return "text-up";
  if (dir === "down") return "text-down";
  return "text-flat";
}