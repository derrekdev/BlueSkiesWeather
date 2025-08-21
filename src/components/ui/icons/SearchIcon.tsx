import type { SvgIconTypes } from "../../../types/icon";

export default function SearchIcon({
  width = "30",
  height = "30",
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "2",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}: SvgIconTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
    >
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  );
}
